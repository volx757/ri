class AddCustomerInfoToPack < ActiveRecord::Migration
  def change
    add_column :packs, :customer_id, :integer
    add_column :packs, :order_id, :integer
  end
end
