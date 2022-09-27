import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <>
        <label htmlFor="name">
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageInput">
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            id="imageInput"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          <select
            id="rarity"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option id="normal">normal</option>
            <option id="rare">raro</option>
            <option id="very-rare">muito raro</option>
          </select>
        </label>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="button"
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

Form.defaultProps = {
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

export default Form;
