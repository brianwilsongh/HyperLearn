# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ActiveRecord::Base
  validates :user_id, :subject_id, presence: true
  validates :title, presence: true, uniqueness: {scope: :subject_id}, length: {minimum: 1}

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :subject,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Subject

  has_many :cards,
    primary_key: :id,
    foreign_key: :deck_id,
    class_name: :Card

  has_many :ratings,
    through: :cards,
    source: :ratings


  def reset_ratings
    self.ratings.each do |rating|
      rating.rating = 0
      rating.save
    end
  end

end
