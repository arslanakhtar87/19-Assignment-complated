var guest_list = ['ali', 'farhan', 'raza', 'ayesha',];
var not_present = 'farhan';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n');
}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/medam ' + guest_list[i] + ',\nwe invited you on dinner tommarow.\nthank you\n');
}
