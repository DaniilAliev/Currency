import onChange from "on-change";
import { renderOptions, renderValues, renderContainer, renderResultOfConvertation } from "./render.js";

export default (state,elements) => {
    const watchedState = onChange(state, (path, value) => {
        if (path === 'availableValues') {
            renderOptions(value, elements);
        }
        if (path === 'page') {
            renderContainer(value, elements);
        }
        if (path === 'form') {
            renderResultOfConvertation(value, elements);
        }
        if (path === 'usd') {
            renderValues(value, path, elements)
        }
        if (path === 'eur') {
            renderValues(value, path, elements)
        }
        if (path === 'cny') {
            renderValues(value, path, elements)
        }
        if (path === 'gbp') {
            renderValues(value, path, elements)
        }
    })

    return watchedState;
}