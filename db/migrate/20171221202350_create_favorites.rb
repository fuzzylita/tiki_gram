class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :image_id
      t.string :tag
      t.text :image
      t.datetime :created_at
    end
  end
end
