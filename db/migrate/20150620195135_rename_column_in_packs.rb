class RenameColumnInPacks < ActiveRecord::Migration
  def change
    rename_column :packs, :order_id, :cart_id
  end
end
