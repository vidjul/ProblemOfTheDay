integerList = [1, 2, 3, 4, 5];
res = []

for (i of integerList) {
    let prod = 1;
    for (j of integerList) {
        prod *= j;
    }
    res.push(prod/i);
}

console.log(res);