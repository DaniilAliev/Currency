import axios from 'axios'

const getDataFormUrl = async () => {
    try {
        const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js?random=${Math.random()}`);
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

const parser = async () => {
    try {
        const data = await getDataFormUrl();

        return data.Valute;
    } catch (e) {
        console.log(e)
    }
    
}

export { parser }