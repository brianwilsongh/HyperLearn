require 'rails_helper'

RSpec.describe Deck, type: :model do

  it "should validate presence of user_id" do
    is_expected.to validate_presence_of(:user_id)
  end

  it "should validate presence of subject_id" do
    is_expected.to validate_presence_of(:subject_id)
  end

end
