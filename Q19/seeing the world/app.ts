// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

let places: string [] = ['cape town','delhi','faisalabad','benkok','ahmedabad',]
//console.log('origion : ' + places);

// • Print your array in alphabetical order without modifying the actual list.
//console.log('copy ' + [...places].sort());

// • Show that your array is still in its original order by printing it.
console.log('origion : ' + places);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

// • Show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('origion : ' + places.sort());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('origion : ' + places.sort().reverse());
