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

120.times do |itr|
  randPic = File.open("app/assets/images/seed_avatars/seedavatar#{(rand * 45).to_i + 1}.jpeg")
  User.create(username: (Faker::StarWars.character.gsub(/\s+/, "").downcase + itr.to_s),
  password: (Faker::GameOfThrones.character.strip.downcase + "password"),
  image: randPic,
  f_name: Faker::Name.first_name,
  l_name: Faker::Name.last_name )
end

Category.destroy_all

Category.create(name: "Art & Literature")
Category.create(name: "Biology")
Category.create(name: "Chemistry & Physics")
cs_cat = Category.create(name: "Computer Science & Programming")
Category.create(name: "History")
fun_cat = Category.create(name: "Just For Fun")
Category.create(name: "Math")


Categorization.destroy_all
Subject.destroy_all
#at least 3 for guest

real_sub_1 = Subject.create(title: "All About Brian", user_id: guest.id)
Categorization.create(subject_id: real_sub_1.id, category_id: fun_cat.id)

java_sub = Subject.create(title: "Java", user_id: guest.id)
Categorization.create(subject_id: java_sub.id, category_id: cs_cat.id)

ruby_sub = Subject.create(title: "Ruby/Rails", user_id: guest.id)
Categorization.create(subject_id: ruby_sub.id, category_id: cs_cat.id)

js_sub = Subject.create(title: "JavaScript/React", user_id: guest.id)
Categorization.create(subject_id: js_sub.id, category_id: cs_cat.id)

cs_sub = Subject.create(title: "Comp Sci", user_id: guest.id)
Categorization.create(subject_id: cs_sub.id, category_id: cs_cat.id)


50.times do |itr|
  this_subject = Subject.create(title: "SubjectTitle #{itr.to_s}",
  user_id: User.all.sample.id)
  Categorization.create(subject_id: this_subject.id, category_id: Category.all.sample.id)
end


Follow.destroy_all
User.all.each do |user|
  Follow.create(user_id: user.id, subject_id: Subject.all.sample.id)
end

2.times do
  Follow.create(user_id: guest.id, subject_id: Subject.all.sample.id)
end

Deck.destroy_all

real_deck_1 = Deck.create(title: "Knowing the Basics", subject_id: real_sub_1.id, user_id: guest.id)

#seed data for the java subject
java_deck_history = Deck.create(title: "History", subject_id: java_sub.id, user_id: guest.id)
java_deck_basics = Deck.create(title: "Basic Knowledge", subject_id: java_sub.id, user_id: guest.id)
java_deck_one = Deck.create(title: "Level 1", subject_id: java_sub.id, user_id: guest.id)

150.times do |itr|
  random_subject = Subject.all.sample
  Deck.create(title: "DeckTitle #{itr.to_s}",
    subject_id: random_subject.id,
    user_id: random_subject.user_id)
end

Card.destroy_all

#BW Trivia questions
Card.create(question: "Favorite food", answer: "Sushi", deck_id: real_deck_1.id)
Card.create(question: "Name of his cat", answer: "Chell", deck_id: real_deck_1.id)
Card.create(question: "First car make and model", answer: "Toyota Corolla", deck_id: real_deck_1.id)
Card.create(question: "Years married as of Sep 2017", answer: "~4", deck_id: real_deck_1.id)
Card.create(question: "Alma Mater", answer: "Vanderbilt University", deck_id: real_deck_1.id)
Card.create(question: "Favorite type of bear", answer: "polar bear", deck_id: real_deck_1.id)
Card.create(question: "his daughter's name", answer: "Lydia", deck_id: real_deck_1.id)
Card.create(question: "Favorite sport", answer: "Soccer", deck_id: real_deck_1.id)
Card.create(question: "Countries visited", answer: "7", deck_id: real_deck_1.id)
Card.create(question: "Favorite movie", answer: "The Good, the Bad, and the Ugly", deck_id: real_deck_1.id)
Card.create(question: "Favorite game", answer: "Starcraft", deck_id: real_deck_1.id)
Card.create(question: "His arch nemesis", answer: "Entropy", deck_id: real_deck_1.id)
Card.create(question: "Biggest regret", answer: "Not majoring in CS", deck_id: real_deck_1.id)
Card.create(question: "Favorite biome", answer: "Taiga", deck_id: real_deck_1.id)
Card.create(question: "Bones broken since birth", answer: "1", deck_id: real_deck_1.id)

# Java History
Card.create(question: "What year was Java created?", answer: "?", deck_id: java_deck_history.id)

# Java Basics
Card.create(question: "How many bytes...", answer: "?", deck_id: java_deck_basics.id)

# Java Level One
Card.create(question: "What is....", answer: "?", deck_id: java_deck_one.id)



500.times do
  Card.create(question: "Seed Question",
  answer: "#{rand * 100}",
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
