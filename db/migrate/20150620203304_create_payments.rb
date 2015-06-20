class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.integer :customer_id
      t.integer :cart_id
      t.decimal :amount

      t.timestamps
    end
  end
end
