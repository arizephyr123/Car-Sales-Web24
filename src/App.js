import React from "react";
import { connect } from "react-redux";

//Components
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//Actions
import { addFeature, removeFeature } from "./actions/actions";

const App = props => {
  //console.log("App props:", props);

  const removeItem = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};


export default App;
