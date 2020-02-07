import React, {useEffect} from 'react';
import './App.scss';

import {getFact} from "./actions/actions";
import {connect} from "react-redux";


function App(props) {

  const getCatFact = e => {
    e.preventDefault();
    props.getFact();
  };

  useEffect(() => {
    props.getFact();
  }, []);


  return (
    <div className="App">
      <header>
        <h1>Crazy Cat Facts</h1>
        <h2>All the facts you want and need</h2>
      </header>
      <div className="catTown">
        <h1>{props.catFact}</h1>
        <h2 className="error">{props.error}</h2>
        <p>
          <span>{props.catCount}</span> facts read.
        </p>
        <button
          onClick={e => {
            getCatFact(e);
          }}
        >
          Give me Facts
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    catCount: state.catCount,
    catFact: state.catFact,
    error: state.error
  };
};



export default connect(
  mapStateToProps,
  {getFact}
  )(App);
