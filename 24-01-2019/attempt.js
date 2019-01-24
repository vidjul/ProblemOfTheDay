const climbStaircase = (n, jumps, count=0) => {
    let ways = 0;
    if (n === count) {
        return 1;
    }
    if (count > n) {
        return 0;
    }
    else {
        for (let jump of jumps) {
            ways += climbStaircase(n, jumps, count + jump);
        }
    }
    return ways;
};

const jumps = [1, 2];
console.log(climbStaircase(4, jumps, 0));