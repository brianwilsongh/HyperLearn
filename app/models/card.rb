# == Schema Information
#
# Table name: cards
#
#  id               :integer          not null, primary key
#  question         :text             not null
#  answer           :text             not null
#  deck_id          :integer          not null
#  question_img_url :string
#  answer_img_url   :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Card < ApplicationRecord
  validates :deck_id, :question, :answer, presence: true

  belongs_to :deck,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Deck

  has_many :ratings, dependent: :destroy,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Rating
end
