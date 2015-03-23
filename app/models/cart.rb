class Cart < ActiveRecord::Base

  belongs_to :user
  has_many :orders

  def add_product(product_id)
    if product_id_list.present?
      product_list = product_id_list + ' ' + product_id
    else
      product_list = product_id
    end
    update_attribute :product_id_list, product_list
  end

  def update_total_cost
    update_attribute :total_cost, total_cost
  end

  def total_cost
    cost = 0.0
    products = product_id_list.split(' ').map(&:to_i)
    products.each do |p|
      cost += Product.find_by_product_id(p).price
    end
    cost
  end

  def self.find_current(user_id)
    where(:user_id => user_id).first
  end

end
