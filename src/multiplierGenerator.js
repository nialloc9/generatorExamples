const multiplierGenerator = function* (number) {

    let multiplier = 10;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
    yield;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
    yield;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
};

export default multiplierGenerator;