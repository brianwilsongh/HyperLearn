require 'rails_helper'

RSpec.describe Card, type: :model do
  the_card = Card.new(deck_id: 123, question: "Q", answer: "A")
  it { is_expected.to validate_presence_of(:deck_id) }
  it { is_expected.to validate_presence_of(:question) }
  it { is_expected.to validate_presence_of(:answer) }
end
