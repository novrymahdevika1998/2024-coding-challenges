// function grow(x){
//     let result;

//     for (const num of x) {
//         if (result === undefined) {
//             result = num;
//         } else {
//             result *= num;
//         }
//     }

//     return result;
// }

// function grow(x) {
//     let result = x.reduce((acc, num) => num*acc, 1);

//     return result;
// }

function grow(x) {
    let result;

    for (let i=0; i<x.length; i++) {
        if (result === undefined) {
            result = x[i];
        } else {
            result *= x[i];
        }
    }

    return result;
}

console.log(grow([1,2,3,4]))