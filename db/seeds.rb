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

real_sub_2 = Subject.create(title: "Game Of Thrones", user_id: guest.id)
Categorization.create(subject_id: real_sub_2.id, category_id: fun_cat.id)

java_sub = Subject.create(title: "Java", user_id: guest.id)
Categorization.create(subject_id: java_sub.id, category_id: cs_cat.id)

ruby_sub = Subject.create(title: "Ruby/Rails", user_id: guest.id)
Categorization.create(subject_id: ruby_sub.id, category_id: cs_cat.id)

js_sub = Subject.create(title: "JavaScript/React", user_id: guest.id)
Categorization.create(subject_id: js_sub.id, category_id: cs_cat.id)

cs_sub = Subject.create(title: "Comp Sci", user_id: guest.id)
Categorization.create(subject_id: cs_sub.id, category_id: cs_cat.id)


50.times do |itr|
  this_subject = Subject.create(title: "Subject ##{itr.to_s}",
  user_id: User.where.not(username: "guest").sample.id)
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

real_deck_2 = Deck.create(title: "Geography", subject_id: real_sub_2.id, user_id: guest.id)
real_deck_3 = Deck.create(title: "House Baratheon", subject_id: real_sub_2.id, user_id: guest.id)
real_deck_4 = Deck.create(title: "House Lannister", subject_id: real_sub_2.id, user_id: guest.id)
real_deck_5 = Deck.create(title: "House Stark", subject_id: real_sub_2.id, user_id: guest.id)
real_deck_6 = Deck.create(title: "House Targaryen", subject_id: real_sub_2.id, user_id: guest.id)

#seed decks for the java subject
java_deck_history = Deck.create(title: "History", subject_id: java_sub.id, user_id: guest.id)
java_deck_basics = Deck.create(title: "Basic Knowledge", subject_id: java_sub.id, user_id: guest.id)
java_jdbc = Deck.create(title: "Java DB Connectivity", subject_id: java_sub.id, user_id: guest.id)
java_concurrency = Deck.create(title: "Concurrency", subject_id: java_sub.id, user_id: guest.id)
java_collections = Deck.create(title: "Collections", subject_id: java_sub.id, user_id: guest.id)

#seed decks for the ruby subject
ruby_deck_basics = Deck.create(title: "Basic Knowledge", subject_id: ruby_sub.id, user_id: guest.id)
ruby_deck_data_types = Deck.create(title: "Data Types", subject_id: ruby_sub.id, user_id: guest.id)

#seed decks for JavaScript
js_deck_deep = Deck.create(title: "JS Deep Dive", subject_id: js_sub.id, user_id: guest.id)

100.times do |itr|
  random_subject = Subject.all.sample
  if User.find(random_subject.user_id).username != "guest"
    Deck.create(title: "DeckTitle #{itr.to_s}",
      subject_id: random_subject.id,
      user_id: random_subject.user_id)
  end
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
Card.create(question: "What year was Java created?", answer: "1995", deck_id: java_deck_history.id)
Card.create(question: "What was the original name of Java?", answer: "Oak", deck_id: java_deck_history.id)
Card.create(question: "There are four Java platforms with their own JVMs, what are they?",
answer: "Java Standard Edition \n Java Enterprise Edition \n Java Micro Edition \n Java FX", deck_id: java_deck_history.id)
Card.create(question: "Who is credited with the invention of Java?", answer: "James Gosling", deck_id: java_deck_history.id)
Card.create(question: "Which company currently owns and maintain Java?", answer: "Oracle Corporation", deck_id: java_deck_history.id)
Card.create(question: "Write once...", answer: "...Run Anywhere.", deck_id: java_deck_history.id)

# Java Basics
Card.create(question: "Which of the following is an invalid use of the 'final' keyword?
 \n final class (class cannot be extended)
 \n final field (field is a constant)
 \n final method (method can't be overwritten)
 \n final countdown (time before a process starts)
 \n final variable (variable value cannot be changed)",
answer: "final countdown", deck_id: java_deck_basics.id)

Card.create(question: "Does Java support multithreading?", answer: "Yes", deck_id: java_deck_basics.id)
Card.create(question: "Does Java allow for dynamic programming?", answer: "Yes, through reflections and instrumentations", deck_id: java_deck_basics.id)
Card.create(question: "What is the smallest primitive data type for numbers?", answer: "byte", deck_id: java_deck_basics.id)
Card.create(question: "Are Java arrays mutable?", answer: "No", deck_id: java_deck_basics.id)
Card.create(question: "What is the class typically used to create an array that must change size?", answer: "ArrayList", deck_id: java_deck_basics.id)
Card.create(question: "The static keyword allows for what?", answer: "Access to the variable/object without instantiating class", deck_id: java_deck_basics.id)
Card.create(question: "Every method must technically return something, so for a method that should return nothing which keyword do you use?",
answer: "void", deck_id: java_deck_basics.id)
Card.create(question: "What will be the output of the following code segment?
\n int a = 4, b = 8, c = -5;
\n System.out.println(a/b+\"\\n\"+(++c*b--)+" "+a--*b/c--);
\n " " \n 0 \n -32 -7
\n " " \n 0.5 \n 32 6
\n " " \n 0 40 \n -7
\n " " \n 0.5 -32 -7
\n " "\n 0 -32 \n -7
",
answer: "0 \n -32 -7", deck_id: java_deck_basics.id)

# JDBC
Card.create(question: "Name the methods in the java.sql.Statement class that are used to:
\na) execute SQL select statements
\nb) execute SQL insert, update and delete statements
\nc) execute arbitrary SQL statements
\nd) execute more than one SQL statement specified in Java code, not in a stored procedure",
answer: "a: executeQuery
\nb: executeUpdate
\nc: execute
\nd: executeBatch", deck_id: java_jdbc.id)

Card.create(question: "By default, JDBC commits changes made by executing SQL statements immediately after they execute.
What line of code disables that so the code can decide when to commit or rollback changes in a transaction?",
 answer: "setAutoCommmit(false);", deck_id: java_jdbc.id)

Card.create(question: "What class is used to efficiently execute the same statement repeatedly with different 'parameter' values?",
 answer: "java.sql.PreparedStatement (PreparedStatement is crucial)", deck_id: java_jdbc.id)

Card.create(question: "What class is used to invoke SQL stored procedures?",
 answer: "java.sql.CallableStatement (CallableStatement is crucial)", deck_id: java_jdbc.id)

Card.create(question: "In JDBC, what class is responsible for selecting the driver that will be used to communicate with a specified
database?",
 answer: "java.sql.DriverManager (DriverManager is crucial)", deck_id: java_jdbc.id)


# Java Concurrency
Card.create(question: "What is the class in java.util.concurrent that provides an Integer that may be atomically updated?",
 answer: "AtomicInteger", deck_id: java_concurrency.id)
Card.create(question: "Two java.util.concurrent Interfaces extend the java.util.concurrent.Executor Interface. Name one.",
 answer: "Either ExecutorService or ScheduledExecutorService", deck_id: java_concurrency.id)
Card.create(question: "What reusable synchronization aid allows a set of threads to wait for each other to reach a common barrier
point?",
 answer: "CyclicBarrier", deck_id: java_concurrency.id)

Card.create(question: "CopyOnWriteArraySet is a thread-safe Set in which all mutative operations are implemented by making a
fresh copy.   What is the java.util.concurent class used to implement CopyOnWriteArraySet?",
 answer: "CopyOnWriteArrayList", deck_id: java_concurrency.id)

Card.create(question: "What java.util.concurrent Interface does a concurrent programmer keep going back to when needing to
represent the result of an asynchronous computation?",
 answer: "Future", deck_id: java_concurrency.id)

 # Java Collections
 Card.create(question: "Name one non-optional method java.util.ListIterator has that java.util.Iterator does not.",
  answer: "One of: hasPrevious(), previous(), previousIndex(), nextIndex()", deck_id: java_collections.id)
 Card.create(question: "Can a single-threaded Java program throw a java.util.ConcurrentModificationException?",
  answer: "Yes", deck_id: java_collections.id)
 Card.create(question: "Does Map<K, V> extend Collection<E> for some E?",
  answer: "No", deck_id: java_collections.id)
 Card.create(question: "True/False: A HashSet is internally implemented using a HashMap.",
  answer: "True", deck_id: java_collections.id)
 Card.create(question: "Name three methods of the java.util.Arrays utility class.",
  answer: "three of:
asList, binarySearch, copyOf, copyOfRange, deepEquals, deepHashCode, deepToString, fill, hashCode, sort", deck_id: java_collections.id)

# Ruby Basics
Card.create(question: "What is the highest level in the object module?",
 answer: "BasicObject", deck_id: ruby_deck_basics.id)
Card.create(question: "Which core object includes the Kernel module?",
 answer: "Object", deck_id: ruby_deck_basics.id)
Card.create(question: "What is duck typing and how does it pertain to Ruby?",
 answer: "That an object may be acted upon even if it isn't the expected type as long as it looks and behaves like the expected object. This is a characteristic of Ruby because the lack of type checking of parameters makes this an effective programming technique.", deck_id: ruby_deck_basics.id)
Card.create(question: "What is a DSL and how does it pertain to Ruby?",
 answer: "A Domain Specific Language is an API that allows a developer to solve a problem or represent data more naturally than they might otherwise. The flexible nature of Ruby's syntax and the ability to alias and alter existing methods and classes makes it conducive to creating rich DSL's.", deck_id: ruby_deck_basics.id)
Card.create(question: "What can you say about an identifier that begins with a capital letter?",
 answer: "It is a constant", deck_id: ruby_deck_basics.id)
Card.create(question: "Is everything in Ruby an object?",
 answer: "Methods are not objects. Blocks are not objects. Keywords are not objects. However, there exist Method objects and Proc objects, and some keywords refer to objects.", deck_id: ruby_deck_basics.id)
Card.create(question: "Is Ruby a statically typed or a dynamically typed language?",
 answer: "Dynamically typed since type checking is done at runtime.", deck_id: ruby_deck_basics.id)
Card.create(question: "Is Ruby a strongly typed or a weakly typed language?",
 answer: "Strongly typed since an object's type is checked before an operation is performed on it.", deck_id: ruby_deck_basics.id)
Card.create(question: "What is the difference between a statement and an expression in Ruby?",
 answer: "All statements are expressions in Ruby since all statements return a value.", deck_id: ruby_deck_basics.id)
Card.create(question: "What does it mean to coerce an object? Why would you do it?",
 answer: "To coerce an object means to force it into an expected type. One might do this in order to try and force an unknown object type into the expected type or format required by the operation. This is a common practice involved in duck typing.", deck_id: ruby_deck_basics.id)

# Ruby Data Types
Card.create(question: "Why might you want to avoid using string literals within loops?",
 answer: "A new object is created for every string literal even when the values are identical. Consider using variables or symbols instead.", deck_id: ruby_deck_data_types.id)
Card.create(question: "Does String include the Enumerable module?",
 answer: "No.", deck_id: ruby_deck_data_types.id)
Card.create(question: "What method might you use to enumerate over a string?",
 answer: "String#each_char", deck_id: ruby_deck_data_types.id)
Card.create(question: "What is the difference between a character literal such as ?A and a string literal such as \"A\"?",
 answer: "There is no difference.", deck_id: ruby_deck_data_types.id)
Card.create(question: "Describe a symbol.",
 answer: "Symbols are scalar value objects used as identifiers, mapping immutable strings to fixed internal values.", deck_id: ruby_deck_data_types.id)
Card.create(question: "Why are symbols typically used as hash keys instead of strings?",
 answer: "Strings are mutable while symbols are immutable. Though Ruby internally makes an immutable copy of a string when used as a hash key, comparing two symbols is faster than comparing two String objects. This is also a convention.", deck_id: ruby_deck_data_types.id)
Card.create(question: "Symbols are immutable objects. Name another immutable core Ruby object.",
 answer: "Fixnum", deck_id: ruby_deck_data_types.id)
Card.create(question: "What happens when a value becomes too big for Fixnum?",
 answer: "It is automatically converted to a Bignum.", deck_id: ruby_deck_data_types.id)
Card.create(question: "What is the superclass of Fixnum?",
 answer: "Integer", deck_id: ruby_deck_data_types.id)
Card.create(question: "What is the superclass of Integer?",
 answer: "Numeric", deck_id: ruby_deck_data_types.id)
Card.create(question: "What numeric class might you use to avoid the rounding error arising in the use of binary floating-point arithmetic?",
 answer: "BigDecimal", deck_id: ruby_deck_data_types.id)
Card.create(question: "How does the %W syntax differ from the %w syntax?",
 answer: "With %W it is possible to define an array containing string interpolation.", deck_id: ruby_deck_data_types.id)
Card.create(question: "How might you specify a default value for a hash?",
 answer: "Pass the default values as arguments to ::new on initialization or change the default directly with the method Hash#default. You may also provide a default at the time of query with Hash#fetch.", deck_id: ruby_deck_data_types.id)
Card.create(question: "Name at least one synonym for Hash#key??",
 answer: "Hash#has_key?, Hash#include?, Hash#member?", deck_id: ruby_deck_data_types.id)
Card.create(question: "Does Hash use #== or #eql? to compare hash keys?",
 answer: "#eql?", deck_id: ruby_deck_data_types.id)
Card.create(question: "What order are the values of a hash iterated?",
 answer: "The order in which they were inserted", deck_id: ruby_deck_data_types.id)
Card.create(question: "What is the synonym of Hash#[]=?",
 answer: "Hash#store", deck_id: ruby_deck_data_types.id)
Card.create(question: "Why can you safely use a string as a hash key, even though a string is mutable?",
 answer: "Because the interpreter makes a private copy of a string used as a hash key.", deck_id: ruby_deck_data_types.id)
Card.create(question: "Why might you use Hash#fetch over Hash#[] when querying values in a hash?",
 answer: "Hash#fetch provides options for handling the case where a key does not exist in the hash.", deck_id: ruby_deck_data_types.id)
Card.create(question: "When would you need to use Hash#rehash?",
 answer: "After you mutate a mutable hash key.", deck_id: ruby_deck_data_types.id)
Card.create(question: "What are two uses of ranges?",
 answer: "comparison, iteration", deck_id: ruby_deck_data_types.id)
Card.create(question: "How might you include an expression within a Regexp literal?",
 answer: "Using \#{} just like as in a double-quoted string literal.", deck_id: ruby_deck_data_types.id)
Card.create(question: "What is the global variable for the last Regexp match?",
 answer: "$LAST_MATCH_INFO equivalent to $~", deck_id: ruby_deck_data_types.id)

 #JS deep dive
Card.create(question: "What is a potential pitfall with using typeof bar === \"object\" to determine if bar is an object? How can this pitfall be avoided?",
 answer: "Although typeof bar === \"object\" is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!", deck_id: js_deck_deep.id)
Card.create(question: "What is NaN? What is its type? How can you reliably test if a value is equal to NaN?",
 answer: "The NaN property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., \"abc\" / 4), or because the result of the operation is non-numeric (e.g., an attempt to divide by zero).", deck_id: js_deck_deep.id)
Card.create(question: "(function(){
  \nvar a = b = 3;
\n})();
\n
\nconsole.log(\"a defined? \" + (typeof a !== 'undefined'));
\nconsole.log(\"b defined? \" + (typeof b !== 'undefined'));",
 answer: "a defined? false
\nb defined? true", deck_id: js_deck_deep.id)
Card.create(question: "What is the difference between undefined and not defined in JavaScript?",
answer: "In JavaScript, if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and script will stop executing. However, if you use typeof undeclared_variable, then it will return undefined", deck_id: js_deck_deep.id)
Card.create(question: "What is the drawback of creating true private methods in JavaScript?",
answer: "One of the drawbacks of creating true private methods in JavaScript is that they are very memory-inefficient, as a new copy of the method would be created for each instance.", deck_id: js_deck_deep.id)
Card.create(question: "What is a “closure” in JavaScript? Provide an example",
answer: "A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.", deck_id: js_deck_deep.id)
Card.create(question: "How do you check if an object is an array or not?",
answer: "The best way to find out whether or not an object is an instance of a particular class is to use the toString method from Object.prototype", deck_id: js_deck_deep.id)


#Baratheon
Card.create(question: "What distinguished Robert Baratheon from other armored warriors during Robert's Rebellion?",
 answer: "Antlers on helmet, usage of war hammer", deck_id: real_deck_3.id)
Card.create(question: "What was the name of the smuggler who saved Storm's End from starvation during its most recent siege?",
 answer: "Sir Davos Seaworth", deck_id: real_deck_3.id)

 #Stark
 Card.create(question: "Why does Sean Bean always have to die?", answer: "Because he is Sean Bean", deck_id: real_deck_5)
 Card.create(question: "What is Jon Snow's true name?", answer: "Aegon Targaryen", deck_id: real_deck_5)

100.times do
  Card.create(question: "Seed Question",
  answer: "Seed Answer",
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
