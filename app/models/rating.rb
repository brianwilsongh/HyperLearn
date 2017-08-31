# == Schema Information
#
# Table name: ratings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  card_id    :integer          not null
#  rating     :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rating < ApplicationRecord
  validates :user_id, :card_id, :rating, presence: true

  belongs_to :card,
    primary_key: :id,
    foreign_key: :card_id,
    class_name: :Card

end
