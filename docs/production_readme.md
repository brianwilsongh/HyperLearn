HyperLearn is a card and deck-based learning platform inspired by BrainScape.
It's built on a Ruby on Rails backend utilizing a PostgreSQL database with a React/Redux framework on the frontend.

<h2>Features</h2>
<ul>
<li>User signup and login</li>
<li>Create, use, and delete decks</li>
<li>Add tags to subjects and decks</li>
<li>Search for subjects/decks by their tags</li>
</ul>

<h2>Implementation</h2>

<h3> Authorization </h3>

The user will begin on the landing page, which will restrict the user from accessing any of the study materials until the user has logged in. Login/Signup inputs will appear to the user through a modal, overlaying the main page. The forms in the model will trigger an AJAX request that will trigger an action updating the store with current_user after finishing.

![Front Page](https://github.com/wilsontheory/HyperLearn/blob/master/docs/wireframes/FrontPage.png)

<h3> Subjects/Decks </h3>

Once the session cookie matches a user in the database, the user will be redirected to '/interface', where they will see all the subjects that were either authored by them or followed by them. These subjects will be retrieved through an AJAX request that will search for subjects authored by the user and subjects followed by the user, accumulating both responses into a slice of state "user_subjects" to populate the subjects components.

Clicking on a subject will trigger an AJAX call that will fetch the decks that belong to that subject. DeckItemComponent will be rendered after the call is returned. Subjects can be deleted/edited through a modal that will appear if the user clicks on an edit button for the subject.

![Logged In Interface](https://github.com/wilsontheory/HyperLearn/blob/master/docs/wireframes/LoggedInInterface.png)

<h3> Using Decks </h3>

Users that click the study button next to any given deck will be redirected to '/learn/:deck_id' which will render the following page.

![Deck Study Interface](https://github.com/wilsontheory/HyperLearn/blob/master/docs/wireframes/DeckStudyInterface.png)

Statistics are generating through a relational database table of scores, which store both a user_id and a card_id. The card itself will show question/answer through a boolean switch that will live in the CardInterfaceComponent's state.

Clicking on an icon next to decks back on the main interface will brings users to '/edit/:deck_id' which will render the following components to easily edit a deck and add tags.

![Edit Deck](https://github.com/wilsontheory/HyperLearn/blob/master/docs/wireframes/EditDeck.png)

<h3> Database </h3>

In the relational database, Subjects will be stored in a table with columns for name, and one for the user_id to link them to their author. This will set up a belongs_to relationship between the Subject and its author, respectively.

Decks will be stored in a table with columns for name, and subject_id to link them to their parent subject.

Cards will have columns storing a deck_id to reference their parent deck, and will be linked to users through Scores which store an integer for the actual score and ids of both users and cards.

Tags will be associated with various subjects and decks by a 'Taggings' join table. Tags themselves will only contain a string for the actual Tag name, and will have a has_many relationship with Taggings to link them to their associated components.

Search will be implemented with a search feature that will send AJAX requests for each change undergone by the search bar, searching for tags that match the term. Upon submission of the search form, subjects and decks matching the tag will be returned.

<h3> Timeline </h3>
<li>Phase I: Build models/controllers and their API responses (jBuilder), seed DB and handle frontend auth input (2 days)</li>

<li>Phase II: Create landing page, along with AJAX actions that update store with appropriate info (2 days)</li>

<li>Phase III: Build study interface, allowing user to submit scores on cards, updating the statistical display (2 days)</li>

<li>Phase IV: Make pages/modals to create, edit subjects and decks (2 days)</li>

<li>Phase V: Create search functionality to search for subjects/decks by keyword/tag, work on CSS styling (1 day)</li>
