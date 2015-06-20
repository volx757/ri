class AddDetailsToUser < ActiveRecord::Migration
  def change
    add_column :users, :address_two, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zip, :string
    add_column :users, :card_number, :string
    add_column :users, :card_expiry, :string
    add_column :users, :card_ccv, :string
  end
end
