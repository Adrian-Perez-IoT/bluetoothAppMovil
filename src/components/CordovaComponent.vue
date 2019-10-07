<template>
      <!-- <div class="appcordova">
         <h1>Apache Cordova</h1>
         <div id="deviceready" class="blink">
             <p class="event listening">Connecting to Device</p>
             <p class="event received">Device is Ready</p>
         </div>
      </div> -->


  <div class="hello">
    <h1>Cordova aqui mostache! {{ msg }}</h1>
    <h2>Vista HTML de cordova aqui, con los link si son necesarios</h2>
    
  </div>
</template>

<script>
export default {
  name: 'CordovaComponent',
  data () {
    return {
      msg: 'Bandydos welcome to Component Cordova'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ¿?Aqui o allá se coloca la hoja de estilo (por defecto) de cordova? */

h1, h2 {
  font-weight: normal;
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
</style>
