class AddSessionIdToGuest < ActiveRecord::Migration
  def change
    add_column :users, :session_id, :string
  end
end
