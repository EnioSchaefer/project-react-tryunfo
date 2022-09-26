import React from 'react';
import PropTypes from 'prop-types';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <>
        <span data-testid="name-card">{ cardName }</span>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <span data-testid="description-card">{ cardDescription }</span>

        <span data-testid="attr1-card">{ cardAttr1 }</span>

        <span data-testid="attr2-card">{ cardAttr2 }</span>

        <span data-testid="attr3-card">{ cardAttr3 }</span>

        <span data-testid="rare-card">{ cardRare }</span>

        {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: 'cardName Default',
  cardDescription: 'cardDescription Default',
  cardAttr1: 'cardAttr1 Default',
  cardAttr2: 'cardAttr2 Default',
  cardAttr3: 'cardAttr3 Default',
  cardImage: 'cardImage Default',
  cardRare: 'cardRare Default',
  cardTrunfo: false,
};

export default Card;
