// const reverseSeq = n => {
//     let arr = [];

//     for (let i=n; i >= 1; i--) {
//         arr.push(i)
//     }

//     return arr;
// };

// const reverseSeq = n => {
//     let arr = [];

//     for (const i of Array(n).keys()) {
//         arr.push(n-i)
//     }

//     return arr;
// }


// const reverseSeq = n => {
//     let arr = [];

//     for (const i of Array(n).keys()) {
//         arr.push(i+1)
//     }

//     return arr.reverse()
// }

const reverseSeq = n => {
    return Array(n).fill(0).map((_,i) => n-i)
}


console.log(reverseSeq(5))