# HyperLearn

[Link to live site](http://hyper-learn.herokuapp.com/#/)

### Summary

HyperLearn is a card and deck-based learning platform inspired by BrainScape. Users can follow or create subjects which contain decks, which contain cards that can be studied through an interface. The study interface allows users to flip cards (they first appear on the 'question' side) and rate their own performance on that card.

These ratings are used for percentage-based 'mastery' calculations for decks and subjects, which provide a quick way for the user to track how well they know certain subjects/decks. As users study decks through the interface, cards that have been 'mastered' (rated as a 5) are ignored by the card-sorting algorithm in favor of cards that have yet to be mastered.

HyperLearn is built on a Ruby on Rails backend with a PostgreSQL database storing all the information regarding subjects, cards, decks, and users. Amazon S3 is used to store images, currently just for users' avatars. The frontend is built with a React/Redux framework, which utilizes AJAX to communicate with the server.

### Features

* User signup and login
* Create, user, follow, delete, or categorize Subjects
* Create, use, and delete Decks, & Cards
* Search/Browse for subjects
* See other users who are studying the same subject as you, or users who follow your subjects

### Walkthrough

Users have the option to create a new account, log into an existing account, or use the one-click demonstration account. Users who try to access other pages will be redirected to the front.

![FrontPage](https://github.com/wilsontheory/HyperLearn/blob/master/docs/screens/ss1.png)

Once logged in, users will be brought to the main interface. Subjects are displayed on the left side of the page, decks of that subject appear in the center. Other users appear on the right side.

![FrontPage](https://github.com/wilsontheory/HyperLearn/blob/master/docs/screens/ss2.png)

Users can begin studying cards once they are following a subject that contains at least one deck with at least one card. Stats are tracked on the panel on the left side of the screen, and users must rate their own performance on each card once the answer is revealed.

![FrontPage](https://github.com/wilsontheory/HyperLearn/blob/master/docs/screens/ss3.png)

The mass edit form makes it easy to edit and add cards

![FrontPage](https://github.com/wilsontheory/HyperLearn/blob/master/docs/screens/ss4.png)

Users can visit the /browse page to find additional subjects to study by either searching or browsing the 'Top Subjects by Category' section. Follow buttons will appear next to any subjects that aren't already being followed by that user.

![FrontPage](https://github.com/wilsontheory/HyperLearn/blob/master/docs/screens/ss5.png)

### Future Directions for HyperLearn

<li>Reduce load on server by determining ways to send fewer/smaller requests without hindering functionality</li>

<li>Improve card-sorting algorithm to better favor unmastered, low-rated cards over unmastered, high-rated cards</li>

<li>Add ability to upload images for question/answer sides of a card</li>

<li>Build out social networking, add profile pages for users along with ability to add friends and send private messages</li>

<li>Add achievements to be displayed on profile pages, such as 'get 100 cards right in a row'</li>
