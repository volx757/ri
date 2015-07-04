class RemoveColumnsFromPack < ActiveRecord::Migration
  def change
    remove_column :packs, :juice_one_id
    remove_column :packs, :juice_two_id
    remove_column :packs, :juice_three_id
    remove_column :packs, :juice_four_id
    remove_column :packs, :juice_five_id
    remove_column :packs, :juice_six_id
    remove_column :packs, :juice_seven_id
    remove_column :packs, :juice_eight_id
    remove_column :packs, :juice_nine_id
    remove_column :packs, :juice_ten_id
    remove_column :packs, :juice_eleven_id
    remove_column :packs, :juice_twelve_id
  end
end
