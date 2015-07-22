class AddAddressOneAndTwoToUser < ActiveRecord::Migration
  def change
    remove_column :users, :address
    add_column :users, :address_one, :string
  end
end
