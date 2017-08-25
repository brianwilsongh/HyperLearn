import React from 'react';

class CardForm extends React.Component {

  render (){
    return (
      <div>
        <p>Q:{this.props.card.question}</p>
        <p>A:{this.props.card.answer}</p>
      </div>
    );
  }
}

export default CardForm;
