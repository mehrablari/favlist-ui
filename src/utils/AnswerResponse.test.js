import React from 'react';
import { render } from '@testing-library/react';
import AnsweredResponse from './AnsweredResponse';

test('renders answered response component', () => {
  render(<AnsweredResponse />);

});



import PropTypes from 'prop-types';

const AnsweredResponse = ({ response }) => {
  const { answers, questionId } = response.data;


AnsweredResponse.propTypes = {
  response: PropTypes.shape({
    data: PropTypes.shape({
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.string.isRequired,
          rank: PropTypes.number.isRequired,
          vote: PropTypes.number.isRequired,
        })
      ).isRequired,
      questionId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

}

export default AnsweredResponse;


import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes from the correct module

const AnsweredResponse = ({ response }) => {
  const { answers, questionId } = response.data;

  // Component rendering logic here
};

// Define PropTypes outside the component function
AnsweredResponse.propTypes = {
  response: PropTypes.shape({
    data: PropTypes.shape({
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.string.isRequired,
          rank: PropTypes.number.isRequired,
          vote: PropTypes.number.isRequired,
        })
      ).isRequired,
      questionId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AnsweredResponse;

