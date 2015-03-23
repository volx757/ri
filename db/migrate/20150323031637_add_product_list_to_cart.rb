class AddProductListToCart < ActiveRecord::Migration
  def change
    add_column :carts, :product_id_list, :string
  end
end
