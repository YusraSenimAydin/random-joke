class JokeApi{
    constructor() {
        this.baseURL = 'https://api.chucknorris.io/';
        this.axios = axios.create({
            baseURL: this.baseURL,
        });
    }
    async randomSakaGetir() {
        const sakaResponse = await this.axios.get('https://api.chucknorris.io/jokes/random');       
        return sakaResponse.data.value;
    }
}