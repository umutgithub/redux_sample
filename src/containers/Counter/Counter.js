import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    //state = {
    //    counter: 0
    //}
    //
    //counterChangedHandler = ( action, value ) => {
    //    switch ( action ) {
    //        case 'inc':
    //            this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //            break;
    //        case 'dec':
    //            this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //            break;
    //        case 'add':
    //            this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //            break;
    //        case 'sub':
    //            this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //            break;
    //    }
    //}

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.subtractCounter}  />
            </div>
        );
    }
}
                        //this state is coming  from reducer.js
const mapStateToProps = state => {
    return {
      ctr : state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        addCounter: () => dispatch({type: 'ADD', val: 10}),
        // 2 different way of passing action: payload or just a key/val pair
        subtractCounter: () => dispatch({type: 'SUBTRACT', payload: {val: 15}})
    };

};
//connect is helper component to  pass state as props to my component
export default connect(mapStateToProps, mapDispatchToProps )(Counter);