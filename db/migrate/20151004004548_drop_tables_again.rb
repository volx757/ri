class DropTablesAgain < ActiveRecord::Migration
  def change
    drop_table :inquiries
  end
end
