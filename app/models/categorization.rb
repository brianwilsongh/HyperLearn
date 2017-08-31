# == Schema Information
#
# Table name: categorizations
#
#  id          :integer          not null, primary key
#  subject_id  :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Categorization < ApplicationRecord
  validates :subject_id, presence: true, uniqueness: {scope: :category_id}
  validates :category_id, presence: true

  belongs_to :subject,
    primary_key: :id,
    foreign_key: :subject_id,
    class_name: :Subject

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category
end
