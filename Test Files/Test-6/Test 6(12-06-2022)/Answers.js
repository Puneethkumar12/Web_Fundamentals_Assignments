
//----------Question 1 --------------


//Q1)  code
//Write a function to check if geekster exists in your array var list = ['geek', 'geekster', 'geeky'];
//If it exists  add some code to find the index of geekster and remove that item.


var list = ['geek', 'geekster', 'geeky'];

function removeArray(list){
  
      console.log(list); //consoling the list
      let listIncludes = list.includes('geekster') //checking if the geekster is present in list
      console.log(listIncludes) //consoling the output if geekster is present the value will be true or else it will be false
      let arrindex = list.indexOf('geekster'); //getting the index Of geekster 
      console.log(arrindex); // consoling the output value as indexof geekster is 1
      list.pop('geekster'); // removing the geekster 
      return list
  
}
console.log(removeArray(list));

//OR 

//removing the geekster without pop and shift 
let arr = ['geek', 'geekster', 'geeky'];
let l = arr.length;
middle = parseInt(l-1)/2;

for(let i = middle;i<l-1;i++){
    arr[i] = arr[i+1]
}
arr.pop(); // for removing the undefined 
console.log(arr)





//--------------Question 2 -------------------




// Q2) Code
 //In how many ways can we loop in an array describe each with an example ?
/*

 4 different ways to loop through an array

 1. for Loop -
 The basic for loop has the following syntax:

for (initialization; condition; update statement) {
    // code block to be executed
}

The for loop statement basically uses three expressions:

Initialization — to initialize the loop variable with a starting value and it will only be executed once
Condition — defines when the loop will stop looping
Update Statement — is executed every time after the code block within the loop has been executed. Normally it’s being used to increment the loop variable

Example of using for loop: var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
   
];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i].name);
}


Output:
    John
    Jane
    Martin
    



2. forEach() -
The forEach() is an array’s method that uses a callback function to include any custom logic to the iteration. In other words, 
forEach() will execute the provided callback function once for each array element.

The forEach() method has the following syntax:

array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
callback — refers to the callback function that takes up 3 arguments:
1. currentValue — the data/value of the current element
2. index (optional) —the array index of the current element
3. array (optional) —the entire array object
thisArg (optional) — Value to be passed to the callback function which will be used as its this value.
Return — undefined

Example of using forEach() loop - 
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

myArray.forEach((profile, index, myArr) => this.myfunction(profile, index, myArr));

myfunction = (profile, index, myArr) => {
    console.log(`Index: ${index}, Name: ${profile.name}`);
}

/*
Output:
  Index: 0, Name: John
  Index: 1, Name: Jane
  Index: 2, Name: Martin
  Index: 3, Name: Katie
  Index: 4, Name: Louis
*/
/*
3.while Loop -
The basic while loop has the following syntax:

while (condition) {
    // code block to be executed
}
condition — defines when the loop will stop looping

Example of using while loop

var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i].name)
    i++
}

/*
Output:
  John
  Jane
  Martin
  Katie
  Louis
*/
/*
4.do/while Loop
The do/while loop is in fact very similar to while loop. The only difference is that do/while loop will be triggered at least once regardless of the condition.

The basic do/while loop has the following syntax:

do {
    // code block to be executed
} while (condition)

condition — defines when the loop will stop looping

Example of using do/while loop - 
var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

var i = 0;
do {
    console.log(myArray[i].name)
    i++
} while(i < myArray.length)
  
/*
Output:
  John
  Jane
  Martin
  Katie
  Louis
*/








//-----------------------Question 3 ------------------------



//Q3) Code
//What is the length of these arrays
//A. var arr1 = [,,,];
// B. var arr2 = new Array(3)
//C. var arr3 = [1,2,3,4,5]
//D. var array = [ [1,2,3], [4,5,6]  ];
//E. var array[0].length = [ [1,2,3], [4,5,6]  ];


//A. var arr1 = [,,,];

var arr1=[,,,];
l1=arr1.length;
console.log(" The length of the array is "  + l1)
//output of A : 3


// B. var arr2 = new Array(3)

var arr2 =new Array(3);
l2=arr2.length;
console.log(" The length of the array is "  + l2)

//output of B : 3



//C. var arr3 = [1,2,3,4,5]

var arr3 = [1,2,3,4,5];
l3 = arr3.length;
console.log(" The length of the array is "  + l3)

//output of C : 5



//D. var array = [ [1,2,3], [4,5,6]  ];

var array = [ [1,2,3], [4,5,6]  ];
l4=array.length;
console.log(" The length of the array is "  + l4)

//output of D : 2



//E. var array[0].length = [ [1,2,3], [4,5,6]  ];

//var array[0].length = [ [1,2,3], [4,5,6]  ];
l5=array[0].length;
//console.log(" The length of the array is "  + l5)

//output of E  :
//We will get an error :Unexpected token '[' by this code var array[0].length = [ [1,2,3], [4,5,6]  ];
//because we  should not declare a variable with inbuit function or method and '[]' , we will get syntax error 




//-------------------------Question 4 -----------------------

//Q4) code
//Find the index position of b in this array var arr= ['a','b','c','d'];

var arrindex= ['a','b','c','d'];
var indexofarr = arrindex.indexOf('b');
console.log(indexofarr);



//-------------------------Question 5 ------------------------

//Q5)code
//What will be returned if you look for the index of something that does not exist?

/* 
looking up an index that doesn't exist in a list or array the answer will be in negeative (-1)
*/

var arrExist = [1,2,3,4,5];
var ind = arrExist.indexOf(8);
console.log(ind) 



//--------------------------Question 6 ---------------------------



//Q6) code
// Find the nth largest element in a sorted array

let ntharr = [23, 36, 43, 59, 68, 71, 89, 92]
function nthlargest(arra,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arra.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){
						
						if(arra[x] < arra[z]){
							temp = arra[z];
							arra[z] = arra[x];
							arra[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){ 
                      
						result = true;
					}	
				}
				if(result){
					break;
				}
			}

			return (arra[(highest - 1)]);	
		}
		
console.log(nthlargest(ntharr, 1)); 