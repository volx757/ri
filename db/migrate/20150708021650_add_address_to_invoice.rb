class AddAddressToInvoice < ActiveRecord::Migration
  def change
    add_column :invoices, :address_one, :string
    add_column :invoices, :address_two, :string
    add_column :invoices, :city, :string
    add_column :invoices, :state, :string
    add_column :invoices, :zip, :string
  end
end
