# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
pictureOfMe = File.open("app/assets/images/wilson.png")
guest = User.create(username: "guest", password: "password", image: pictureOfMe,
f_name: "John", l_name: "Doe")

175.times do |iteration|
  randPic = File.open("app/assets/images/seed_avatars/seedavatar#{(rand * 40).to_i + 1}.jpeg")
  User.create(username: (Faker::StarWars.character.gsub(/\s+/, "").downcase + iteration.to_s),
  password: (Faker::GameOfThrones.character.strip.downcase + "password"),
  image: randPic,
  f_name: Faker::Name.first_name,
  l_name: Faker::Name.last_name )
end

Category.destroy_all

12.times do
  Category.create(name: Faker::Color.color_name)
end


Categorization.destroy_all
Subject.destroy_all
#at least 3 for guest
5.times do
  this_subject = Subject.create(title: Faker::GameOfThrones.city,
  user_id: guest.id)
  Categorization.create(subject_id: this_subject.id, category_id: Category.all.sample.id)
end

50.times do
  this_subject = Subject.create(title: Faker::GameOfThrones.city,
  user_id: User.all.sample.id)
  Categorization.create(subject_id: this_subject.id, category_id: Category.all.sample.id)
end

25.times do
  this_subject = Subject.create(title: Faker::LordOfTheRings.location,
  user_id: User.all.sample.id)
  Categorization.create(subject_id: this_subject.id, category_id: Category.all.sample.id)
end


Follow.destroy_all
User.all.each do |user|
  Follow.create(user_id: user.id, subject_id: Subject.all.sample.id)
end

5.times do
  Follow.create(user_id: guest.id, subject_id: Subject.all.sample.id)
end

Deck.destroy_all

400.times do
  random_subject = Subject.all.sample
  Deck.create(title: Faker::GameOfThrones.character,
    subject_id: random_subject.id,
    user_id: random_subject.user_id)
end

Card.destroy_all

1400.times do
  Card.create(question: Faker::Pokemon.name,
  answer: Faker::Pokemon.move,
  deck_id: Deck.all.sample.id)
end

Rating.destroy_all

User.all.each do |user|
  all_subjects = user.all_subjects
  all_subjects.each do |subject|
    subject.cards.each do |card|
      Rating.create(rating: (1 + (rand * 5).floor), user_id: user.id, card_id: card.id)
    end
  end
end
