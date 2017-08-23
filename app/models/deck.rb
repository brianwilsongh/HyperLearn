class Deck < ActiveRecord::Base
  validates :title, :user_id, :subject_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :subject,
  primary_key: :id,
  foreign_key: :subject_id,
  class_name: :Subject

end
