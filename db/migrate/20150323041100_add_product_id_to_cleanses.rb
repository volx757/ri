class AddProductIdToCleanses < ActiveRecord::Migration
  def change
    add_column :cleanses, :product_id, :integer
  end
end
