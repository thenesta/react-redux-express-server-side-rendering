export function InputHasErrored(errors) {
    return {
        type: 'INPUT_CREATE_USER_HAS_ERRORED',
        hasErrored: errors
    };
}
export function InputIsLoading(bool) {
    return {
        type: 'INPUT_CREATE_USER_IS_LOADING',
        isLoading: bool
    };
}
export function InputPass() {
    return {
        type: 'INPUT_CREATE_USER_FETCH_DATA_SUCCESS'
    };
}

export function InputCreateUserSubmit(data) {
    return {
        type: 'INPUT_CREATE_USER_SUBMIT',
        data: data
    };
}

//impure function
export function FormSubmitData(url,event) {
	const formData = new FormData(event.target);

	 var object = {};
	formData.forEach(function(value, key){
		object[key] = value;
	});
	var json = JSON.stringify(object);


    return (dispatch) => {
        dispatch(InputIsLoading(true));

		fetch(url, {
		  method: 'POST',
		   headers: {
					 'Accept': 'application/json',
					 'Content-Type': 'application/json'
				 },
		  body: json,
		})
		.then(response => response.json())
		.then((data) => {
		   dispatch(InputIsLoading(false));
		   if(data.errors){
		     dispatch(InputHasErrored(data));
			 //this.setState({ formSubmit: data })
		   }else{
			 console.log("Form Submit Success");
			 dispatch(InputPass());
			 //this.props.history.push('/admin/user');
		   }
		})
		.catch(() => alert('Server Problem'));

        /*fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(InputIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(InputPass(items)))
            .catch(() => dispatch(InputHasErrored(true)));*/
    };
}
