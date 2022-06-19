//--------------Test Answers----------

// Q1)-
// An array is given, return the sum of all the positives numbers.const input = [1, -5, 2, 10, -30, 29, 50]; 

const input = [1, -5, 2, 10, -30, 29, 50]
function SummPositive(posnumbers) {

    var sum = 0;

    for (var i = 0; i < posnumbers.length; i++) {
        if (posnumbers[i] > 0) {
            sum += posnumbers[i];
        }
    }



    return sum;
}

var sum_result = SummPositive(input);

console.log(sum_result + " Is the sum of psotive numbers ");






//-------------Question 2 ---------------





// Q2)
//  Multiple records of people are given, you have to print the first name and last name.
//  let friends = [{ fname: 'Rachal', lname: "Green", id: 1, marks: 98 },
//   { fname: 'Ross', lname: "Geller", id: 2, marks: 23 },
//   { fname: 'Monica ', lname: "Geller", id: 3, marks: 75 },
//   { fname: 'Joey', lname: " Tribbiani", id: 4, marks: 46 },
//   { fname: 'Chandler  ', lname: "Bing", id: 5, marks: 78 },
//   { fname: 'Phoebe', lname: "Buffay", id: 6, marks: 45 }] 

let friends = [{ fname: 'Rachal', lname: "Green", id: 1, marks: 98 },
{ fname: 'Ross', lname: "Geller", id: 2, marks: 23 },
{ fname: 'Monica ', lname: "Geller", id: 3, marks: 75 },
{ fname: 'Joey', lname: " Tribbiani", id: 4, marks: 46 },
{ fname: 'Chandler  ', lname: "Bing", id: 5, marks: 78 },
{ fname: 'Phoebe', lname: "Buffay", id: 6, marks: 45 }]

console.log(friends);

for (let i = 0; i < friends.length; i++) {

    console.log(friends[i].fname, friends[i].lname);
}





//------------Question 3--------------



//Q3)-
// You are given some names of different cities and a ordered list html element; add a list item for each to the ordered
// list.city = ['Delhi', 'Mumbai', 'Jaipur', 'Kolkata', 'Indore']; (below html code and output is given)



document.getElementById('1').innerHTML = "Delhi"
document.getElementById('2').innerHTML = "Mumbai"
document.getElementById('3').innerHTML = "jaipur"
document.getElementById('4').innerHTML = "Kolkata"
document.getElementById('5').innerHTML = "Indore"


var city = document.getElementById('ol').innerHTML
console.log(city)

