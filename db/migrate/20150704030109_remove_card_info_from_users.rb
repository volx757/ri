class RemoveCardInfoFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :card_number
    remove_column :users, :card_expiry
    remove_column :users, :card_ccv
  end
end
