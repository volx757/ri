class AddAnsweredToInquiries < ActiveRecord::Migration
  def change
    add_column :inquiries, :answered, :boolean
  end
end
