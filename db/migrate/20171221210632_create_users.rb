class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :instagram_id
      t.string :profile_picture
    end
  end
end
