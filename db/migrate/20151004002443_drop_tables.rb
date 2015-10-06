class DropTables < ActiveRecord::Migration
  def change
    drop_table :contacts
  end
end
