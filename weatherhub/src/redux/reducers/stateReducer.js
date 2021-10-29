const stateReducer = (state = '', action ) => {
    switch( action.type ) {
        case 'SET_TEST_STATE':
            const testState = 'Set State in reducer';
            console.log( 'Got dispatch in reducer and setting redux state');
            return {...state, testState};
        default:
            return state;
    }
}

// testState will be on the store at state.testState
export default stateReducer;