var promise = new Promise(function(resolve, reject) { 
    resolve('Hello'); 
})   
promise .then(function(successMessage) { 
     console.log(successMessage); 
    }, function(errorMessage) { 
        console.log(errorMessage); 
    }) 