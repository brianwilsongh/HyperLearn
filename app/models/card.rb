class Card < ApplicationRecord
  validates :deck_id, :question, :answer, presence: true

  belongs_to :deck,
  primary_key: :id,
  foreign_key: :deck_id,
  class_name: :Deck
end
