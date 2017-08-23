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

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
