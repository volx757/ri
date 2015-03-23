class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :cart_id
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
