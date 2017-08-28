# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

guest = User.create(username: "guest", password: "password",
f_name: "John", l_name: "Doe")
125.times do |iteration|
  User.create(username: (Faker::GameOfThrones.house + iteration.to_s),
  password: (Faker::GameOfThrones.character + "password"),
  f_name: Faker::Name.first_name,
  l_name: Faker::Name.last_name )
end

Subject.destroy_all

#at least 3 for guest
5.times do
  Subject.create(title: Faker::GameOfThrones.city,
  user_id: guest.id)
end

30.times do
  Subject.create(title: Faker::GameOfThrones.city,
  user_id: User.all.sample.id)
end

Category.destroy_all

10.times do
  Category.create(name: Faker::Color.color_name)
end

Categorization.destroy_all

50.times do
  Categorization.create(subject_id: Subject.all.sample.id, category_id: Category.all.sample.id)
end

Follow.destroy_all

User.all.each do |user|
  Follow.create(user_id: user.id, subject_id: Subject.all.sample.id)
end

6.times do
  Follow.create(user_id: guest.id, subject_id: Subject.all.sample.id)
end

Deck.destroy_all

150.times do
  random_subject = Subject.all.sample
  Deck.create(title: Faker::GameOfThrones.character,
    subject_id: random_subject.id,
    user_id: random_subject.user_id)
end

Card.destroy_all

750.times do
  Card.create(question: Faker::Lovecraft.deity,
  answer: Faker::Lovecraft.word,
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
