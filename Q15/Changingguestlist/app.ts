// 15.	Changing Guest List: You just heard that one of your guests can’t 
// make the dinner, so you need to send out a 
// new set of invitations. You’ll have to think of someone else to invite.

let guest_list : string []= ['ali', 'farhan', 'raza','aysha'];
for (let i=0; i<guest_list.length; i++){
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n')
}
let not_present : string = 'farhan';
let new_guest : string = 'babar azam';
guest_list[1] = new_guest;
for (let i=0; i<guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n')
}
console.log(`Mr. ${not_present} will not coming tommarrow dinner. `)