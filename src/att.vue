<template>
  <div>
    <h1>{{ city }}</h1>
    <p>{{ temperature }}</p>
    <p>{{ weather }}</p>
    <p>{{ currentDate }}</p>
  
    <input type="text" v-model="cityInput" placeholder="Entrez le nom de la ville">
    <button @click="getWeather()">Obtenir la météo</button>
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
    weather: '',
    cityInpu: 'Paris',
    currentDate: ''
  }
},

  mounted() {
    this.getWeathe();
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
      self.weather = response.data.weather[0].description;
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
          self.weather = response.data.weather[0].icon;
          self.currentDate = new Date().toLocaleString();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>