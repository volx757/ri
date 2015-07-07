class Invoice < ActiveRecord::Base

  after_create :write_products_text

  belongs_to :user
  belongs_to :cart

  attr_accessible :user_id, :cart_id, :products



  def write_products_text
    update_attribute :products, products_text
  end

  private

  def products_text
    text = ''
    text += total_cost.to_s + '\n'
    cart.line_items.each do |l|
      text += l.product.name + ' ' + l.price.to_s
    end
    text
  end

end
