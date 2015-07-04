class AddColumnsToPaymentMethod < ActiveRecord::Migration
  def change
    add_column :payment_methods, :name, :string
    add_column :payment_methods,  :number, :string
    add_column :payment_methods,  :date, :string
    add_column :payment_methods,  :ccv, :string
  end
end
