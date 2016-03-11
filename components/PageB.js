import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as increaseActions from '../actions/IncreaseActions';

const propTypes = {
  increase: PropTypes.object,
  dispatch: PropTypes.any,
};

class PageB extends React.Component {
  constructor(props) {
    super(props);
    this._increaseNumber = this._increaseNumber.bind(this);
  }

  componentWillMount() {
    return true;
  }

  _increaseNumber() {
    this.props.dispatch(increaseActions.increaseNumber());
  }

  render() {
    return (
      <div>
        PageB
        <div>
          <button onClick={this._increaseNumber}>
            +
          </button>
          {this.props.increase}
        </div>
      </div>
    );
  }
}

PageB.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    dispatch: state.dispatch,
    increase: state.increase,
  };
}

export default connect(mapStateToProps)(PageB);
