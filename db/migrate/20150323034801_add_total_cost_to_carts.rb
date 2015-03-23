class AddTotalCostToCarts < ActiveRecord::Migration
  def change
    add_column :carts, :total_cost, :decimal
  end
end
