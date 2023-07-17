const renderOptions = async (values, elements) => {
    values.forEach((item) => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        elements.select.append(option);
    })
}

const renderValues = (currencyValue, path, elements) => {
    const pathWindow = `${path}Window`;
    elements[pathWindow].textContent = currencyValue;
}

const renderContainer = (status, elements) => {
    if (status === 'home') {
        elements.sectionHome.style.display = 'flex';
        elements.sectionChanger.style.display = 'none';
        elements.link.textContent = 'Tap here to convert';
    } else if (status === 'changer') {
        elements.sectionHome.style.display = 'none';
        elements.sectionChanger.style.display = 'flex';
        elements.link.textContent = 'Tap here to see currency';
    }
}

const renderResultOfConvertation = ({resultOfConvert, valueToChange}, elements) => {
    elements.result.textContent = `${resultOfConvert} ${valueToChange}`;
}

export { renderOptions, renderValues, renderContainer, renderResultOfConvertation }