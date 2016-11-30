import React from 'react';
import { connect } from 'react-redux';

const App = ({ text, counter }) => {
  return (
    <div>
      <p>{text} {counter}</p>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
};

export default connect(mapStateToProps)(App);
