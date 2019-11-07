import React from 'react';
import { connect } from 'react-redux'

const Total = props => {
  //console.log('Total', props.addititionalPrice);
  return (
    <div className="content">
      <h4>Total Amount: $
    {props.car.price + props.addititionalPrice}
      </h4>
    </div>
  );
};

const mapsStateToProps = state => {
  return{
    car: state.car,
    addititionalPrice: state.additionalPrice
  }
}

export default connect(
  mapsStateToProps, {}
)(Total);
