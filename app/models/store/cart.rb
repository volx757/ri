class Cart < ActiveRecord::Base

  belongs_to :user
  has_many :line_items, dependent: :destroy


  scope :active, where(:active => true)

  attr_accessible :user_id, :guest_id, :active, :purchased_at, :total_cost

  validates_presence_of :user_id, :active


  def deactivate
    create_invoice
    update_attribute :active, false
  end

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

  def find_product(id)
    Product.find(id)
  end




  def self.find_guest(guest_id)
    where(:guest_id => guest_id).first
  end

  private

  def create_invoice
    Invoice.create!(:cart_id => id, :user_id => user.id)
  end

  def create_line_item(product_id)
    price = Product.find(product_id).price
    LineItem.create(:product_id => product_id, :cart_id => id, :price => price)
  end

end
