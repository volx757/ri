class AddTypeToProduct < ActiveRecord::Migration
  def change
    add_column :products, :type, :string
  end
end
