export default class API {
    static mockAPI() {
        const URL = 'https://demo5358003.mockable.io/'
        return fetch(URL,{
            method: 'GET',
        }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}