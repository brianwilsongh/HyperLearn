class Category < ApplicationRecord
  validates :name, presence: true, length: {minimum: 2}, uniqueness: true

  has_many :categorizations,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Categorization

  has_many :subjects,
    through: :categorizations,
    source: :subject
end
