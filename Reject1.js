var promise = new Promise(function(resolve, reject) { 
    throw new Error('error') 
}) 
  
promise.then(function(successMessage) { 
        console.log(successMessage); 
    }).catch(function(errorMessage) { 
      
        console.log(errorMessage); 
    }); 