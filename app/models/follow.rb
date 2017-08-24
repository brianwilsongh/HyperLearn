class Follow < ActiveRecord::Base
  validates :user_id, uniqueness: {scope: :subject}, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :subject,
  primary_key: :id,
  foreign_key: :subject_id,
  class_name: :Subject

end
