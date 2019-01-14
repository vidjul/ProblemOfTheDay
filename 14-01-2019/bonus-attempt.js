integerList = [1, 2, 3, 4, 5];
res = []

for (i of integerList) {
    let prod = 1;
    for (j of integerList) {
        if (i !== j) {
            prod *= j;
        }
    }
    res.push(prod);
}

console.log(res);

/*

Division not used, but O(n²) solution.

*/