class AddPhoneNumbers < ActiveRecord::Migration
  def change
    add_column :users, :phone, :string

    add_column :invoices, :phone, :string
  end
end
