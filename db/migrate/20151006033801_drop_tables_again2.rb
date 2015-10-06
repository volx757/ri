class DropTablesAgain2 < ActiveRecord::Migration
  def change
    drop_table :carts
    drop_table :guests
    drop_table :products
    drop_table :locations
    drop_table :line_items
    drop_table :payments
    drop_table :payment_methods
    drop_table :invoices
  end
end
