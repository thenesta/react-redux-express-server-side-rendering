export function InputHasErrored(state = [], action) {

	state ={
		displayErrors : false,
		errors : {
			name : false,
			mobile : false
		}

	}
	  console.log("REDUCER DOING");
		console.log(action);
    switch (action.type) {
        case 'INPUT_CREATE_USER_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function InputIsLoading(state = false, action) {
    switch (action.type) {
        case 'INPUT_CREATE_USER_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function InputPass(state = false, action) {
    switch (action.type) {
        case 'IPUT_CREATE_USER_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}
