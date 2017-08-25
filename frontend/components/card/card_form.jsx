import React from 'react';
import { connect } from 'react-redux';
import { addPendingCardMod } from '../../actions/deck_actions';
import { Link, withRouter } from 'react-router-dom';

class CardForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.card.id,
      question: this.props.card.question,
      answer: this.props.card.answer,
      subject_id: this.props.current_subject.id,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(null);
  }

  method(){
    console.log("ready for action!");
  }

  updateCardInStore(){
    console.log("Hello");
  }


  handleInputChange(key){
    return (e) => {
      this.setState({
        [key]: e.currentTarget.value
      });
    };
  }

  handleDeleteClick(e){
    e.preventDefault();
    this.props.deleteCard(this.state.id);

  }



  render (){
    return (
      <div className="cardFormContainer">
        <div className="cardForm">
          <form onSubmit={this.handleEditClick} >

            <p className="errorBlock">{ }</p>

            <br />
            <h4>Question:</h4>
            <input onChange={this.handleInputChange("question")}
            placeholder="What is the question?"
            value={this.state.question} />

          <h4>Answer:</h4>
            <input onChange={this.handleInputChange("answer")}
            placeholder="What is the answer?"
            value={this.state.answer} />

            <button onClick={this.handleDeleteClick}>Destroy</button>
          </form>

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    current_user: state.session.current_user,
    current_subject: state.subjects.current,
    decks: state.decks.sorted,
    errors: state.decks.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPendingCardMod: (card) => dispatch((addPendingCardMod)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardForm));
