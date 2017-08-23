# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

john = User.create(username: "guest", password: "password")
jane = User.create(username: "master", password: "password");
alistair = User.create(username: "alistair", password: "hunter12");
david = User.create(username: "david", password: "hunter13");
ming = User.create(username: "ming", password: "hunter14");
debbie = User.create(username: "debbie", password: "hunter15");
phoeboe = User.create(username: "phoeboe", password: "hunter16");
chell = User.create(username: "chell", password: "hunter17");
tormund = User.create(username: "tormund", password: "wildling");

Subject.destroy_all


conjuration = Subject.create(title: "Conjuration", user_id: john.id)
destruction = Subject.create(title: "Destruction", user_id: chell.id)
mysticism = Subject.create(title: "Mysticism", user_id: alistair.id)
alchemy = Subject.create(title: "Alchemy", user_id: ming.id)

Deck.destroy_all

20.times do
  Deck.create(title: Faker::ElderScrolls.region, user_id: john.id, subject_id: Subject.all.sample)
end

Card.destroy_all

60.times do
  Card.create(question: Faker::GameOfThrones.character,
  answer: Faker::GameOfThrones.house,
  deck_id: Deck.all.sample)
end
