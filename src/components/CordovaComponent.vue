<template>
      <!-- <div class="appcordova">
         <h1>Apache Cordova</h1>
         <div id="deviceready" class="blink">
             <p class="event listening">Connecting to Device</p>
             <p class="event received">Device is Ready</p>
         </div>
      </div> -->


  <div class="hello">
    <h1> {{ msg }}</h1>
    <!-- <h2>Vista HTML de cordova aqui, con los link si son necesarios</h2> -->
    <div class="appcordova">
      <h1>Apache Cordova</h1>
      <div id="deviceready" class="blink">
        <p class="event listening">Connecting to Device</p>
        <p class="event received">Device is Ready</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CordovaComponent',
  data () {
    return {
      msg: 'Hola desde mi componente cordova'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*SI .Aqui o allá se coloca la hoja de estilo (por defecto) de cordova? */

</style>
