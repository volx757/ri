class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :user_id
      t.string :email
      t.string :address
      t.string :password_hash
      t.string :password_salt

      t.timestamps
    end
  end
end
