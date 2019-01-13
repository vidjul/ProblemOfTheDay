const k = 17;
const integerList = [10, 15, 3, 7];
let res = false;

for (let i in integerList) {
    for (let j in integerList) {
        if (i !== j) {
            if (integerList[i] + integerList[j] === k) {
                res = true;
            }
        }
    }
}

console.log(res);

/* 

Bonus not done.

*/