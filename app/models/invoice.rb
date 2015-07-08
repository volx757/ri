class Invoice < ActiveRecord::Base

  after_create :write_products_text

  belongs_to :user
  belongs_to :cart

  attr_accessible :user_id, :cart_id, :products, :address_one, :address_two, :city, :state, :zip


  def write_products_text
    update_attribute :products, products_text
  end


  private

  def products_text
    text = ''
    text += cart.total_cost.to_s + '\n'
    cart.line_items.each do |l|
      text += l.product.name + ' ' + l.price.to_s
      text += '\n'
    end
    text
  end

end
