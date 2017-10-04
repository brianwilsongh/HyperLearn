require 'rails_helper'

RSpec.describe Deck, type: :model do

  it "should validate presence of user_id" do
    is_expected.to validate_presence_of(:user_id)
  end

  it "should validate presence of subject_id" do
    is_expected.to validate_presence_of(:subject_id)
  end

  it "has a belongs to relationship with user (author)" do
    is_expected.to belong_to(:author)
  end

  it "has a belongs to relationship with subject" do
    is_expected.to belong_to(:subject)
  end

  it "has many relationship with cards with dependent destroy" do
    is_expected.to have_many(:cards).dependent(:destroy)
  end

  it "has many ratings through its cards" do
    is_expected.to have_many(:ratings).through(:cards)
  end

end
