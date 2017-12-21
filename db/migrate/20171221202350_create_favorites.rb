class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.string :image_id
      t.string :tags
      t.text :images
      t.datetime :created_at
    end
  end
end
