// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list = ['ali', 'farhan', 'raza', 'aysha'];
var not_present = 'farhan';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
console.log('\nUnfortunately we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry sir/medam.".concat(remove_guest, "you are not inivited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nYes you are still invited on tomarrow dinner\nthank you\n');
}
guest_list.splice(0 - 2);
console.log(guest_list);
