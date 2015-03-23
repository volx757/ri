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

end
