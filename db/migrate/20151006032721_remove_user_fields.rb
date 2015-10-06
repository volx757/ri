class RemoveUserFields < ActiveRecord::Migration
  def change
    remove_column :users, :has_credit_info
    remove_column :users, :has_contact_info
  end
end
