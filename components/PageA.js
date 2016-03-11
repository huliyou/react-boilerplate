import React, { PropTypes } from 'react';

const propTypes = {
  message: PropTypes.string.isRequired,
};

class PageA extends React.Component {

  componentWillMount() {
    return true;
  }

  render() {
    return (
      <div>PageA</div>
    );
  }
}

PageA.propTypes = propTypes;

export default PageA;
