class DropCreditCardTable < ActiveRecord::Migration
  def change
    drop_table :credit_cards
  end
end
