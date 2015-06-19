class CreatePacks < ActiveRecord::Migration
  def change
    create_table :packs do |t|
      t.integer :quantity
      t.integer :juice_one_id
      t.integer :juice_two_id
      t.integer :juice_three_id
      t.integer :juice_four_id
      t.integer :juice_five_id
      t.integer :juice_six_id
      t.integer :juice_seven_id
      t.integer :juice_eight_id
      t.integer :juice_nine_id
      t.integer :juice_ten_id
      t.integer :juice_eleven_id
      t.integer :juice_twelve_id

      t.timestamps
    end
  end
end
