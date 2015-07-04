class CreateInvoices < ActiveRecord::Migration
  def change
    create_table :invoices do |t|
      t.integer :user_id
      t.integer :cart_id
      t.string :date
      t.text :products

      t.timestamps
    end
  end
end
