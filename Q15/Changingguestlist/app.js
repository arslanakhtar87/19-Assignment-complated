// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
// new set of invitations. You’ll have to think of someone else to invite.
var guest_list = ['ali', 'farhan', 'raza', 'aysha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n');
}
var not_present = 'farhan';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n');
}
console.log("Mr. ".concat(not_present, " will not coming tommarrow dinner. "));
