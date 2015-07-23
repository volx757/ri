class AddHasContactAndHasCreditToUser < ActiveRecord::Migration
  def change
    add_column :users, :has_contact_info, :boolean
    add_column :users, :has_credit_info, :boolean
  end
end
