class User < ActiveRecord::Base

  attr_accessible :email, :password, :password_confirmation, :address

  attr_accessor :password
  before_save :encrypt_password

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email

  has_many :orders
  has_one :cart

  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end

  def do_deposit_transaction(type, stripe_token)
    amount = Transaction.amount_for_type(type)
    coupon = UserCoupon.coupon_for_amount(amount)

    card = save_credit_card(stripe_token)
    if deposited = deposit(amount, card)
      subscribe if type == 'subscription'
      create_coupon(coupon) if coupon

      deposited
    end
  end

  def deposit(amount, card)
    customer = stripe_customer

    Stripe::Charge.create(
        amount: amount,
        currency: 'usd',
        customer: customer.id,
        card: card.id,
        description: "Charge for #{email}"
    )

    customer.account_balance += amount
    customer.save
  rescue => e
    false
  end

end
