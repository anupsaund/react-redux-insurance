import React from 'react';
import { connect } from 'react-redux';  
import { increment, decrement } from '../actions';

class Claims extends React.Component {
  
    increment = () => {
        this.props.increment();
    };
  
    decrement = () => {
        this.props.decrement();
    };
  
    render() {
      return (
        <div >
          <h2>Number of Claims in the past year.</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      );
    }
  }

function mapStateToProps(state) {
    return {
      count: state.insurance.count
    };
}

const mapDispatchToProps = {
    increment,
    decrement
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Claims);