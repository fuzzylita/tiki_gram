class Favorite < ApplicationRecord
  serialize :images
  serialize :tags
  belongs_to :user
end