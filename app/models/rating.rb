class Rating < ApplicationRecord
  validates :user_id, :card_id, :rating, presence: true

  belongs_to :card,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Card

end
