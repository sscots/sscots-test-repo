function testFunction(input1, input2) {
    console.log('input1', input1);
    console.log('input2', input2);
    return {
        "value1": input1 * 2,
        "value2": input2 * 2
    }
}

module.exports = {
    testFunction
};
