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

  def do_deposit_transaction(type, stripe_token, user)
    Stripe.api_key = "sk_test_2jPsvi0qQfguqpV1SjkQOq84"

    customer = Stripe::Customer.create(email: user.email, card: stripe_token)

    Stripe::Charge.create(customer: customer.id,
                          amount: Cart.where(:user_id => user.id).first.total_cost.to_i * 100,
                          description: 'purchase',
                          currency: 'usd')

    save_stripe_customer_id(user.id, customer.id)
  end

  def save_stripe_customer_id(user_id, stripe_id)
    User.find(user_id).update_attribute :stripe_id, stripe_id
  end

end
