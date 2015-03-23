class AddProductIdToJuice < ActiveRecord::Migration
  def change
    add_column :juices, :product_id, :integer
  end
end
