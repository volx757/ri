class AddPackIdRoJuice < ActiveRecord::Migration
  def change
    add_column :products, :pack_id, :integer
  end
end
