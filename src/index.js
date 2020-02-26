exports.min = function min(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length == 0) return 0;
    let minElem = 100000000;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minElem) minElem = array[i];
    }
    return minElem;
};

exports.max = function max(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length == 0) return 0;
    let maxElem = -100000000;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElem) maxElem = array[i];
    }
    return maxElem;
};

exports.avg = function avg(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length == 0) return 0;
    let avgElem = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    avgElem = sum / array.length;
    return avgElem;
};
