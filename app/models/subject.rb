# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :decks,
  primary_key: :id,
  foreign_key: :subject_id,
  class_name: :Deck

  has_many :cards,
  through: :decks,
  source: :cards

  #TODO: put the scoring here

  has_many :follows,
  primary_key: :id,
  foreign_key: :subject_id,
  class_name: :Follow

  has_many :followers,
  through: :follows,
  source: :user


end
