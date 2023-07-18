import watch from './view.js';
import { parser } from './parsers.js';
import { calculateCurrencyOnMainPage, calculateConver } from './calculating.js';

export default async () => {

    const state = {
        currencyName: 'RUB',
        currencyValue: 1,
        availableValues: [],
        page: 'home',
        form: '',
        usd: '',
        eur: '',
        cny: '',
        gbp: '',
    };

    const elements = {
        sectionHome: document.querySelector('.home'),
        sectionChanger: document.querySelector('.changer'),
        container: document.querySelector('.container'),
        select: document.querySelector('select'),
        options: document.querySelectorAll('option'),
        form: document.querySelector('form'),
        link: document.querySelector('a'),
        result: document.querySelector('.result'),
        usdWindow: document.querySelector('.usd'),
        eurWindow: document.querySelector('.eur'),
        cnyWindow: document.querySelector('.cny'),
        gbpWindow: document.querySelector('.gbp'),
    };

    const watchedState = watch(state, elements);

    elements.link.addEventListener('click', (e) => {
        e.preventDefault();

        if (watchedState.page === 'home') {
            watchedState.page = 'changer';
        } else if (watchedState.page === 'changer') {
            watchedState.page = 'home';
        }
    })

    const data = await parser();

    watchedState.availableValues = Object.keys(data);

    calculateCurrencyOnMainPage(watchedState, data);

    elements.select.addEventListener('change', (e) => {
        watchedState.currencyName = elements.select.value; // ??
        if (watchedState.currencyName === 'RUB') {
         watchedState.currencyValue = 1;

        } else {
            const currentValute = data[watchedState.currencyName];
            watchedState.currencyValue = currentValute.Value / currentValute.Nominal;
        }
        calculateCurrencyOnMainPage(watchedState, data);
    })

    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const textInput = formData.get('text-input');
        watchedState.form = calculateConver(textInput, data);
    })
}

