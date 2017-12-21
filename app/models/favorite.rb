class Favorite < ApplicationRecord
  serialize :images, :tags
  belongs_to :user
end