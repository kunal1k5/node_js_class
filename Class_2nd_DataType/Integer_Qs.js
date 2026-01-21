// Question -- Given arr = [7,9,11,33] find the sum of all value.
//  provide the output in roundoff form.
//    Math.floor() eg:16.5=16
//    Math.ceil() eg: 16.5 = 17

let arr = [7,9,11,34];
let sum = 0;

for( i=0; i<arr.length; i++){
    sum = sum+arr[i];

}
console.log(Math.floor(sum/2));
console.log(Math.ceil(sum/2));


// Question2 -- given str = "Welcome to node js class" change to uppercase

let str = "Welcome to node js class";
console.log(str.toUpperCase());

// Question3 --- Create an object of array.

let arrr = [[1,2,3,4],[2,3,4,5],[6,7,8]];
console.log(arrr[0]);

// Question4 --- Check the String is palindrom

let string1 = "abc";

for(i=0;i<string1.length(); i++){
    if(string1());
}
