// es5
function seeIfNumber(val) {
    if (typeof val === 'number' && !isNaN(val)) {
        return true
    }
    return false;
}

// es6
Number.isFinite(5);
Number.isInteger(5);