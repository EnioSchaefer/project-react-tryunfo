import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange({ target }) {
    // PARA QUALQUER INPUT
    const { name } = target;
    // PARA INPUT DE CHECKBOX
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.enableSaveButton());
  }

  buttonValidation = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    const max = 90;
    const maxSum = 210;
    const validation = {
      name: cardName.length > 0,
      description: cardDescription.length > 0,
      image: cardImage.length > 0,
      attr1: Number(cardAttr1) >= 0 && Number(cardAttr1) <= max,
      attr2: Number(cardAttr2) >= 0 && Number(cardAttr2) <= max,
      attr3: Number(cardAttr3) >= 0 && Number(cardAttr3) <= max,
      totalAttr: Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum,
      rare: cardRare === 'normal' || cardRare === 'raro' || cardRare === 'muito raro',
    };
    const checks = Object.values(validation);
    return !checks.every((check) => check === true);
  };

  enableSaveButton = () => {
    const validation = this.buttonValidation();

    this.setState({ isSaveButtonDisabled: validation });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;

    const arr = [];
    const obj = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    arr.push(obj);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: obj.cardTrunfo,
      cardDeck: arr,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>[PROJETO] Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
