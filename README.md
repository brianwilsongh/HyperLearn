# HyperLearn

[Link to live site](https://hyper-learn.herokuapp.com/#/)

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



### Implementing Mass-Edit

The mass edit form is found on the /build page, which allows users to add/edit/delete cards from a deck. In React, a parent component determines how many child components to render based on how many cards are in a deck. The child components contain forms that are populated with each individual card's information, received as properties from the parent component.

A user can edit all the cards at once with a single click, ultimately sending a single patch request to the server rather than many. This was achieved by creating a new slice of state exclusively for card edits, and by storing an array of references to child components within the parent components by passing onRef to the child with a callback that pushes itself (the React component) into an array stored in the state of the parent.

```javascript
if (!this.objEmpty(currentCards)){
  forms = Object.keys(currentCards).map((key, idx) => {
    return (
      <CardForm key={idx} card={currentCards[key]}
        onRef={ref => {
            if (ref){
              this.childComponentsEdit.push(ref);
            }
          }
        } />
    );
  });
} else {
  forms = <p>Deck is empty...</p>;
}
```

When a user triggers a "mass edit", this allows the parent to execute a method on each of the children since references to these children are stored. In this case, the method triggered adds the state of the children (the contents of the form) into a reserved area of state which is then used for the actual AJAX request before being emptied out.

```javascript
triggerSubmissionEdit(){
  this.childComponentsEdit.forEach((child, idx) => {
    if (child){
      if (this.props.cards[child.state.id]){
        child.addEditedCard();
      }
    }
  }, this);
}
```

So in the end, one large PATCH request is sent that can modify a large number of cards with one AJAX request. This results in a single response that includes all the updated information on cards that the deck being built.

I determined that success/error messages returned from the server also have to be individualized for each card in the mass-edit form for the user to fully understand what happened on the server side. This was achieved by adding an error-holding array inside the JSON objects representing each card, and a multi-line conditional in the render method for the card-form components (which rendered one form representing each card).

```javascript
let errors;
if (this.props.cardStore[this.state.id]){
  let thisCard = this.props.cardStore[this.state.id];
   if (thisCard.errors[0]){
     errors = thisCard.errors[0]
      .map((err, idx) => {
        if (err === "None"){
          return (<li className="cardNonErrorItem" key={idx}> Saved! </li>);
        } else {
          return (<li key={idx}> { err } </li>);
        }
      });
  }
}
```
This allows the React component to have one of three outcomes when it is rendered. One is blank, where the user hasn't performed any actions and no works appear with the form. The second is the success message, which is triggered when the server sends a successfully edited card with an explicit string "None" in the error-holding array which is displayed in a friendly green color. The third outcome occurs when there were errors in editing the card server-side, and these are displayed in a list.

### Future Directions for HyperLearn

<li>Reduce load on server by determining ways to send fewer/smaller requests without hindering functionality</li>

<li>Improve card-sorting algorithm to better favor unmastered, low-rated cards over unmastered, high-rated cards</li>

<li>Add ability to upload images for question/answer sides of a card</li>

<li>Build out social networking, add profile pages for users along with ability to add friends and send private messages</li>

<li>Add achievements to be displayed on profile pages, such as 'get 100 cards right in a row'</li>
