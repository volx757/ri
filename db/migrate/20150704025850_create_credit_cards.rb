class CreateCreditCards < ActiveRecord::Migration
  def change
    create_table :credit_cards do |t|
      t.string :name
      t.string :number
      t.string :date
      t.string :ccv

      t.timestamps
    end
  end
end
