<template>
  
  <div id="hello" class="Lundi">
    <h2>Lundi</h2>
    <p><b>Température :</b> 15°C</p>
    <p><b>Vent :</b> 25km/h</p>  
    <p><b>Humidité :</b> 54% </p>
  </div>

  <footer>
    <button>L</button>
    <button>M</button>
    <button>M</button>
    <button>J</button>
    <button>V</button>    
    <button>S</button>
    <button>D</button>
  </footer>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
margin-top: 150px;
}
div{
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
footer{
  margin-top: 125px;
}
#hello{
  border: solid 1px white;
  margin-top: 45px;
  font-size: 30px;
}
button{
  background-color: lightblue;
  border-style: dashed black;
  margin-right: 15px;
  height: 23px;
  width: 44px;
}
</style>
