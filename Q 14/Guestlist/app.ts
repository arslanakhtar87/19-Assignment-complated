// 14.	Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people
// you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.


let guest_list : string []= ['ali', 'farhan', 'raza','aysha'];
for (let i=0; i<guest_list.length; i++){
    console.log('respected sir/medam' + guest_list [i]+ ',\nwe invited you on dinner tommarow.\n\nthank you')
}