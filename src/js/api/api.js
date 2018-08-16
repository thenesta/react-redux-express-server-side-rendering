const api = {
  createUser (payload) {
    console.log("API");
    const formData = new FormData(payload.data.formEvent.target);

  	 var object = {};
  	formData.forEach(function(value, key){
  		object[key] = value;
  	});
  	var json = JSON.stringify(object);

  		return fetch(payload.data.url, {
  		  method: 'POST',
  		   headers: {
  					 'Accept': 'application/json',
  					 'Content-Type': 'application/json'
  				 },
  		  body: json,
  		})
  		.then(response => response.json())
  		.then((data) => {
         console.log(data);
         return data;
  		   /*dispatch(InputIsLoading(false));
  		   if(data.errors){
  		     dispatch(InputHasErrored(data));
  			 //this.setState({ formSubmit: data })
  		   }else{
  			 console.log("Form Submit Success");
  			 dispatch(InputPass());
  			 //this.props.history.push('/admin/user');
       }*/
  		})

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

  }
}

export default api
