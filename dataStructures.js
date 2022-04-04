// level {1/2/3}

// level - 3

// 1. Write a recursive function that transforms all the strings to uppercase.
// ```
// // Input object
// ​
// const user = {
//     name: "Elie",
//     job: "Instructor",
//     workDetails: {
//         type: "Part Time",
//         hours: "40 hours"
//     }
//     educationQualifications: [
//         {
//             name: "Full Stack",
//             type: "Certification"
//         },
//         {
//             name: "Javascript",
//             type: "Certification"
//         }
//     ]
// }
// // Output should be
// ​
// {
//     name: "ELIE",
//     job: "INSTRUCTOR",
//     workDetails: {
//         type: "PASRT TimeTIME",
//         hours: "40 HOURS"
//     }
//     educationQualifications: [
//         {
//             name: "FULL STACK",
//             type: "CERTIFICATION"
//         },
//         {
//             name: "JAVASCRIPT",
//             type: "CERTIFICATION"
//         }
//     ]
// }

const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

// const user2 = {
//         name: "Elie",
//         job: "Instructor",
// }

// console.log(typeof user2)


// function strUpper(user2){

//     let upperCase = {};

//     for(let key in user2){
//         let str = user2[key];
//         upperCase[key] = str.toUpperCase();
//     }
//     return upperCase
// }

// strUpper(user2)

function recursiveUpper(user){
 
      Object.keys(user).forEach((key) => {
         let str = user[key].toUpperCase();
         console.log( `${key} : ${str}`)
         if(typeof user[key] === "object" && user[key] !== null ){
            recursiveUpper(user[key])
       }
      })
}

recursiveUpper(user);




//2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.
// ```
// Input string: "a:2,b:3,c:4,a:5,b:6"
// ```
// ```
// Output should be object: {a: 7, b: 9, c: 4}

str = "a:2,b:3,c:4,a:5,b:6";
function check(str){
    let arr = str.split(',')
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i].split(":");
        if(obj[temp[0]] == undefined){
            obj[temp[0]] = +temp[1]
        }else 
          obj[temp[0]] = obj[temp[0]] + Number(temp[1])
    }
    console.log(obj)
}

check(str)


// 3. Check for balanced parentheses using a stack
// ```
// Example:
// exp = "{[({})]}" should be valid
// but "{[(]} should be invalid


function balancedParenthesis(str){
    let stack = [];
    let top = -1;

    for(let i = 0; i < str.length; i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '[' ){
            stack.push(str[i]);
            top++
        }else{
            if(stack.length === 0){
                console.log("Not Valid");
                return;
            }else{
                if(str[i] === ')' && stack[top] !== "("  || 
                    str[i] === '}' && stack[top] !== "{" ||
                    str[i] === ']' && stack[top] !== "[" 
                ){
                   console.log("Not Valid");
                   return; 
                }else{
                    stack.pop();
                    top--;
                }
            }
        }
    }

    if(stack.length === 0){
        console.log("Valid");
        return;
    }else{
        console.log("Not Valid");
        return;
    }
}

balancedParenthesis("{[(]}")