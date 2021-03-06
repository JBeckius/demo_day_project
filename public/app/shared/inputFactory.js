var app = angular.module('myApp');

app.factory('inputFactory', function() {
    var initial = {};

    //passes the info through from the searchController and saves to object
    // --> user input is being stored here
    function saveObject(searchInput) {
        initial = searchInput;
    }

    //returns the object of the passed through info from the page
    function returnObject() {
        //console.log(initial);
        return initial;
    }

    return {
        saveObject: saveObject,
        returnObject: returnObject
    };
});
