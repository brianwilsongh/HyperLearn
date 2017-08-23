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


end
