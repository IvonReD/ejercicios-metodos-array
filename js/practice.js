var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = function(array) {
  //Escribe tu codigo aquí.
  return numberArray.filter(array => array % 2 == 0);
};
var outputEvenNumbers = evenNumbers(numberArray);
console.log(outputEvenNumbers); // ---> [2, 4, 6, 8, 10]
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


var oddNumbers = function(array) {
  //Escribe tu codigo aquí
  return numberArray.filter(array => array % 2 == 1);
};
var outputOddNumbers = oddNumbers(numberArray);
console.log(outputOddNumbers); // ---> [1, 3, 5, 7, 9]

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


var reducer = function(outputReducer) {
  //Escribe tu codigo aquí
  var par = outputReducer.filter(array => array % 2 == 0).reduce((prev, cur) => prev + cur, 0);
  // var par = outputReducer.filter(array => array %2==0);
  // var par2 = par.reduce((prev, cur) => prev + cur, 0);
  console.log(par);
  var impar = outputReducer.filter(array => array % 2 == 1).reduce((prev, cur) => prev + cur, 0);
  //  var impar = outputReducer.filter(array => array %2 ==1);
  // var impar2 =  impar.reduce((prev, cur) => prev + cur, 0);
  console.log(impar);

  console.log(par, impar);

}

var outputReducer = reducer([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(outputReducer); // ---> [ 20, 25 ]


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


    var persons = [
      {id : 1, name : "John", tags : "javascript"},
      {id : 2, name : "Alice", tags : "javascript"},
      {id : 3, name : "Roger", tags : "java"},
      {id : 4, name : "Adam", tags : "javascript"},
      {id : 5, name : "Alex", tags : "java"}
    ];


    var filterTags = persons.filter(function(el) {
    return (el.tags === "javascript");
  });
  console.log(filterTags);


  var searchTags = persons.filter(function(el) {
    return (el.tags === "javascript");
  }).map(function(el) {
    return el.tags;
  }).sort();

  console.log(searchTags);




  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  var fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];

  var orderItem = fruits.sort();
  console.log(orderItem);
