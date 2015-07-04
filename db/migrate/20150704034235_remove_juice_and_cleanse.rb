class RemoveJuiceAndCleanse < ActiveRecord::Migration
  def change
    drop_table :juices
    drop_table :cleanses
  end
end
