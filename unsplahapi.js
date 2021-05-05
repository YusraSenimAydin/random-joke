class UnsplashAPI{
    constructor() {
        this.baseURL = 'https://api.unsplash.com/';
        this.clientID = 'Client-ID kzb4aVMo8tSTdRY_VXJr6_zWa02pPQOEeYW43oWeG24'
        this.axios = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization' : this.clientID
            }
        });
    }
    async randomResimGetir() {
        const resimResponse = await this.axios.get('https://api.unsplash.com/photos/random?query=animal');
        return resimResponse.data.urls.regular;
    }
}

const aa = new UnsplashAPI();
