class CreateJuices < ActiveRecord::Migration
  def change
    create_table :juices do |t|
      t.string :name
      t.string :description
      t.decimal :price
      t.attachment :image

      t.timestamps
    end
  end
end
