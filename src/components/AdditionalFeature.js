import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions'

const AdditionalFeature = props => {
console.log('AdditionalFeature',props.feature);

  const buyItem = () => {
    // dipsatch an action here to add an item
    props.addFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick={buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return{
//     car: state.car,
//     additionalFeatures: state.additionalFeatures
//   }
// }

export default connect(null, { addFeature })(AdditionalFeature);
