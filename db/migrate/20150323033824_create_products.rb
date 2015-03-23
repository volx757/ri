class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :product_id
      t.string :name
      t.decimal :price

      t.timestamps
    end
  end
end
