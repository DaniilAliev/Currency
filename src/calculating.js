const roundResult = (num) => {
    return Math.ceil(num * 100) / 100
}

const calculateCurrencyOnMainPage = (watchedState, data) => {
    ['usd', 'eur', 'cny', 'gbp'].forEach((item) => {
        const value = data[item.toUpperCase()].Value;
        const calculated = value / watchedState.currencyValue;
        const rounded = roundResult(calculated)
        watchedState[item] = rounded;
    })
}

const calculateConver = (textInput, data) => {
    const [sum, value, word ,valueToChange] = textInput.toUpperCase().split(' ');
    console.log(sum, value, valueToChange);

    let firstCurrency;
    let secondCurrency;

    if (value === 'RUB' || valueToChange === 'RUB') {
        if (value === 'RUB') {
            firstCurrency = 1;
            secondCurrency = data[valueToChange].Value
        } else if (valueToChange === 'RUB') {
            secondCurrency = 1;
            firstCurrency = data[value].Value
        } 
    } else {
        firstCurrency = data[value].Value;
        secondCurrency = data[valueToChange].Value;
    }
    const resultOfConvertNotRounded = Number(sum) * (firstCurrency / secondCurrency);
    const resultOfConvert = roundResult(resultOfConvertNotRounded);
    return {resultOfConvert, valueToChange};
}
export { calculateCurrencyOnMainPage, calculateConver }