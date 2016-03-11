import React, { PropTypes } from 'react';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.any,
  dispatch: PropTypes.func,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this._routeToPageA = this._routeToPageA.bind(this);
    this._routeToPageB = this._routeToPageB.bind(this);
  }
  componentWillMount() {
    return true;
  }
  _routeToPageA() {
    this.props.dispatch(routeActions.push('/PageA'));
  }

  _routeToPageB() {
    this.props.dispatch(routeActions.push('/PageB'));
  }

  render() {
    return (
      <div>
      <div>
          <button
            onClick={this._routeToPageA}
          >
            PageA
          </button>
          <button
            onClick={this._routeToPageB}
          >
            PageB
          </button>
        </div>
        <div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    dispatch: state.dispatch,
  };
}

export default connect(mapStateToProps)(App);
