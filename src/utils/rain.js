function trap() {
    const heightList = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    const n = heightList.length
    if (n < 3) {
        return 0
    }
    let l_max = heightList[0]
    let r_max = heightList[n - 1]
    let res = 0
    for (let index = 1; index < n; index++) {
        l_max[index] = Math.max(l_max, heightList[index - 1]);
    }
    for (let index = n - 2; index >= 0; index--) {
        r_max[index] = Math.max(r_max, heightList[n + 1]);
    }
    for (let index = 0; index < array.length; index++) {
        res += Math.min(l_max[index], r_max[index]) - heightList[index]
    }
    return res
}