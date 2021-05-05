class CeviriAPI{
    constructor(cumle) {
        this.baseURL = 'https://translation.googleapis.com/language/translate/v2';
        this.clientID = 'Client-ID kzb4aVMo8tSTdRY_VXJr6_zWa02pPQOEeYW43oWeG24';
        this.aranacakCumle = cumle;
        this.axios = axios.create({
            baseURL: this.baseURL,
            params: {
                target: 'tr',
                key: 'AIzaSyDOu4rdyTSfNn3m3WPmmd5LYnKM6ijUxa8',
                q:this.aranacakCumle
            }
        });
    }
    async ceviriYap() {
        const ceviri = await this.axios.get();
        console.log(ceviri.data.data.translations[0].translatedText);
        return ceviri.data.data.translations[0].translatedText;
    }
}