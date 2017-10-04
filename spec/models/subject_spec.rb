require 'rails_helper'

RSpec.describe Subject, type: :model do
  u = User.first
  u ||= User.create(username: "asdf", password_digest: "fdsa")
  Subject.destroy_all
  Subject.create!(user_id: u.id, title: "Hello")

  it "should validate presence of user_id" do
    is_expected.to validate_presence_of(:user_id)
  end

  it "should validate presence of title" do
    is_expected.to validate_presence_of(:title)
  end

  it "should validate uniqueness of title with user_id as scope" do
    is_expected.to validate_uniqueness_of(:title).scoped_to(:user_id)
  end

  it "has a belongs to relation with a user (author)" do
    is_expected.to belong_to(:author)
  end

  it "has many relation with deck with dependent destroy" do
    is_expected.to have_many(:decks).dependent(:destroy)
  end

  it "has many cards through association with deck" do
    is_expected.to have_many(:cards).through(:decks)
  end

  it "has many ratings through cards association" do
    is_expected.to have_many(:ratings).through(:cards)
  end

  it "has many relationship with follows with dependent destroy" do
    is_expected.to have_many(:follows).dependent(:destroy)
  end

  it "has many followers(users) through follows relationship" do
    is_expected.to have_many(:followers).through(:follows)
  end

end
