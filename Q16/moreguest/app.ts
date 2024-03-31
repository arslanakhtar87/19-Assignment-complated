// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.




let guest_list : string [] = ['ali', 'farhan', 'raza', 'ayesha',];

let not_present : string = 'farhan';
let new_guest : string = 'babar azam';
guest_list[1] = new_guest;
for (let i=0; i<guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n')
}
guest_list.unshift('shaheen','sarfaraz','rizwan',);
for (let i=0; i<guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow. we found big table so we decide 3 more guest\nthank you\n')
}