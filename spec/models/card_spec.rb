require 'rails_helper'

RSpec.describe Card, type: :model do

  it "should validate presence of deck_id" do
    is_expected.to validate_presence_of(:deck_id)
  end

  it "should validate presence of question" do
    is_expected.to validate_presence_of(:question)
  end

  it "should validate presence of answer" do
    is_expected.to validate_presence_of(:answer)
  end

  it "has a belongs to relation with a deck" do
    is_expected.to belong_to(:deck)
  end

  it "has many association with ratings with dependent destroy" do
    is_expected.to have_many(:ratings).dependent(:destroy)
  end

end
