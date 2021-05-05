
class Ekran{
    constructor() {
        this.sakaGetirBtn = document.querySelector('#get');
        this.sakaGetirBtn.addEventListener('click', ()=>this.sakaGetir());
        
    }

    async sakaGetir(){
        const rastgeleResim = await new UnsplashAPI().randomResimGetir();
        const rastgeleSaka = await new JokeApi().randomSakaGetir();
        const ceviri = await new CeviriAPI(rastgeleSaka).ceviriYap();

        const tumSonuclar =  {
            rastgeleResim,
            rastgeleSaka,
            ceviri
        }

        this.ekranaYazdir(tumSonuclar);
    }

    ekranaYazdir(mySonuc) {

    
    document.querySelector('.sonuc').innerHTML = `<div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img src="${mySonuc.rastgeleResim}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-4 has-text-danger is-bold">${mySonuc.rastgeleSaka}</p>
        </div>
      </div>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-4 has-text-primary is-bold">${mySonuc.ceviri}</p>
        </div>
      </div>
    </div>
  </div>`;
}
}