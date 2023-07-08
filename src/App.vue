<template>
  <center>
    <img src="https://m.espacepourlavie.ca/sites/espacepourlavie.ca/files/styles/gal-photo-large/public/conseil-observation-soleil.jpg?itok=jIz-QRYz" alt="" >
  </center>

  <div class="info">
    <center>
    <h1>{{ city }}</h1>
    <p>Température : {{ temperature }} °C</p>
      <p>{{ weather }}</p>
    <p>le {{ currentDate }}</p>
  
    <input type="text" v-model="cityInput" placeholder="Entrez le nom de la ville">
    <button @click="getWeather()">Obtenir la météo</button>
  </center>
  </div>


  <p >
    <center><h2>Changez rapidement de ville !</h2> </center>
  </p>
  <div>
    <center>
      <button @click="getWeatherParis()" class="buttonPreDef">Paris</button>
      <button @click="getWeatherMarseille()" class="buttonPreDef">Marseille</button>
      <button @click="getWeatherBordeaux()" class="buttonPreDef">Bordeaux</button>
    </center>
  </div>
  
  
</template>
<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
  return {
    city: '',
    temperature: '',
    cityInpu: 'Paris',
    currentDate: ''
  }
},

  mounted() {
    this.getWeathe();
    console.log("test")
  },
  methods: {
    getWeatherByCity(city) {
      var self = this;
      var apiKey = '&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric';
      var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + apiKey;

      axios.get(url)
        .then(function(response) {
          self.city = response.data.name;
          self.temperature = response.data.main.temp;
          self.weather = response.data.weather[0].description;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  
    getWeather() {
  console.log("ici");
  var self = this;
  var url = 'https://api.openweathermap.org/data/2.5/weather?q='+ this.cityInput +'&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric';
  axios.get(url)
    .then(function(response) {
      self.city = response.data.name;
      self.temperature = response.data.main.temp;
    
      self.currentDate = new Date().toLocaleString();
    })
    .catch(function(error) {
      console.log(error);
    });
    self.cityInput ="";
}, 
getWeatherParis() {
  console.log("ici");
  var self = this;
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric';
  axios.get(url)
    .then(function(response) {
      self.city = response.data.name;
      self.temperature = response.data.main.temp;
    
      self.currentDate = new Date().toLocaleString();
    })
    .catch(function(error) {
      console.log(error);
    });
}, 
getWeatherMarseille() {
  console.log("ici");
  var self = this;
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric';
  axios.get(url)
    .then(function(response) {
      self.city = response.data.name;
      self.temperature = response.data.main.temp;
    
      self.currentDate = new Date().toLocaleString();
    })
    .catch(function(error) {
      console.log(error);
    });
},
getWeatherBordeaux() {
  console.log("ici");
  var self = this;
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=Bordeaux&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric';
  axios.get(url)
    .then(function(response) {
      self.city = response.data.name;
      self.temperature = response.data.main.temp;
    
      self.currentDate = new Date().toLocaleString();
    })
    .catch(function(error) {
      console.log(error);
    });
},

    getWeathe() {
      console.log("ici");
      var self = this;
      //var apiKey = '&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric'; // Remplacez YOUR_API_KEY par votre clé API OpenWeatherMap
      var url = 'https://api.openweathermap.org/data/2.5/weather?q='+ this.cityInpu +'&appid=97ad485b6db9822d9a93cb34073d61f3&units=metric'
      //var url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris' + this.cityInput + '&units=metric&appid=' + apiKey;
      axios.get(url)
        .then(function(response) {
          self.city = response.data.name;
          self.temperature = response.data.main.temp;
      
          self.currentDate = new Date().toLocaleString();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

body{
  margin-top: 100px;
  background-image: url('https://img.freepik.com/free-vector/blue-cloudy-daylight-background-weather-design_33099-512.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  
  
  color: rgb(26, 26, 26);
}
.info{
  border: solid 1px rgb(44, 43, 43);
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  margin-top: 45px;
  font-size: 25px;
  margin-bottom: 40px;
}
input{
  height: 20px;
  width: 220px;
  margin-right: 15px;
  margin-bottom: 10px;
}
button{
  height: 25px;
  width: 130px;
}
.buttonPreDef{
  height: 25px;
  width: 80px;
  margin-right: 10px;
}
img{
  border: solid rgb(63, 62, 62) 1px;
  border-radius: 100px;
  height: 150px;
  width: 300px;

}

</style>
