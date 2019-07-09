<template>
  <div id="app">
    <section class="container">
      <h2>Horaires et tarifs du Transgabonais</h2>

      <div>
        <span> <h3>Owendo - Franceville</h3></span>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Gare</th>
            <th>Jours</th>
            <th>Classe VIP</th>
            <th>1ere Classe</th>
            <th>2nde Classe</th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="" v-for="route in routes" :key="route.from+route.to">
            <td>{{route.from}} - <span class="dest">{{route.to}}</span></td>
            <td>LUN, MER, VEN</td>
            <td>{{route.vipClass.toLocaleString('fr')}} FCFA</td>
            <td>{{route.firstClass.toLocaleString('fr')}} FCFA</td>
            <td>{{route.secondClass.toLocaleString('fr')}} FCFA</td>
          </tr>
      
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import routes from "../data/routes";
export default {
  name: "app",
  components: {},
  data(){
    return {
      routes: routes
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
 margin: 0 auto;
 max-width: 1000px;
}
.dest{
  font-size: 1.2rem;
}
</style>
