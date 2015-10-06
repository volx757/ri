class CreatePacks < ActiveRecord::Migration
  def change
    drop_table :packs

    create_table :packs do |t|
      t.string :name
      t.string :description
      t.integer :quantity
      t.attachment :image

      t.timestamps
    end
  end
end
