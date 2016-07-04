// Detecting if a string has unique characters
var word = "Unique";
var reg = /(.)(.*?)(\1)/g;
console.log(reg.test(word) ? 'Duplicated' : 'Unique');

var unique = word.split('').filter(function(element,index,array){
    return array.indexOf(element) == index;
}).join('');
console.log(unique.length == word.length ? "Unique": 'Duplicated');