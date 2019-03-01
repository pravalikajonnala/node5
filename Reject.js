var promise = new Promise(function(resolve,reject){
    reject('BYE')
})
promise.then(function(successMessage){
    console.log(successMessage);
})
.catch(function(errorMessage) {
    console.log(errorMessage);  
});
