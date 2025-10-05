//regular function
// let names = function (...namesArr){
//     return `String [${namesArr.join("] , [")}] "=> Done !"  `
// }
// console.log(names("Abdo","moha","Ahmed"))
// // output should be : String [Abdo],[moha],[Ahmed] "=> Done !"  

//arrow function
let names = (...namesArr) => `String [${namesArr.join("] , [")}] "=> Done !"  `
console.log(names("Abdo","moha","Ahmed"))
// output should be : String [Abdo],[moha],[Ahmed] "=> Done !"  


/*   ================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output



// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => (+nums)+one+two;
// console.log(calc(10, myNumbers[0], myNumbers[1]) ); // 80

let myNumbers = [20, 50, 10, 60];

let calc = function (one, two, ...nums) 
{
    return (+nums)+one+two;
} 
console.log(calc(10, myNumbers[0], myNumbers[1]) ); // 80
