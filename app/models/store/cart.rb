class Cart < ActiveRecord::Base

  belongs_to :user
  has_many :line_items


  attr_accessible :user_id, :guest_id, :active, :type


  def add_product(product_id)
    create_line_item(product_id)
  end

  def update_total_cost
    update_attribute :total_cost, total_cost
  end

  def total_cost
    cost = 0
    line_items.each { |l| cost += l.price }
    cost
  end

  def self.create_and_add_product(product_id, user_id)
    Cart.create(:user_id => user_id, :active => true).add_product(product_id)
  end

  def self.find_current(user_id)
    where(:user_id => user_id).first
  end

  def self.find_guest(guest_id)
    where(:guest_id => guest_id).first
  end


  def create_line_item(product_id)
    price = Product.find(product_id).price
    LineItem.create(:product_id => product_id, :cart_id => id, :price => price)
  end

end
