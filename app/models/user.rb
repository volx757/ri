class User < ActiveRecord::Base

  attr_accessible :email, :password, :password_confirmation, :address, :address_two, :city, :state

  attr_accessor :password

  before_save :encrypt_password

  has_secure_password

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email

  has_many :carts
  has_many :invoices

  scope :guests, -> { where(type: 'Guest') }
  #delegate :guests

  def self.types
    %w(Guest)
  end

  def is_guest?
    type == 'Guest'
  end

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

  def do_deposit_transaction(amount, stripe_token, user)
    Stripe.api_key = "sk_test_2jPsvi0qQfguqpV1SjkQOq84"

    customer = Stripe::Customer.create(email: user.email, card: stripe_token)

    begin
      charge = Stripe::Charge.create(customer: customer.id,
                                     amount: amount.to_i * 100,
                                     description: 'purchase',
                                     currency: 'usd')
    rescue Stripe::CardError => e
      # The card has been declined
    end

    save_stripe_customer_id(user.id, customer.id)
  end

  def save_stripe_customer_id(user_id, stripe_id)
    User.find(user_id).update_attribute :stripe_id, stripe_id
  end

end
