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

require 'test_helper'

class CategorizationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
