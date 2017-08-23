class Card < ApplicationRecord
  validates :deck_id, :question, :answer, presence: true
end
