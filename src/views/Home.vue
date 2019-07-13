<template>
  <div >
    <section class="container">
      <h2 class="text-4xl text-center">{{ $t('title') }}</h2>

      <form @submit.prevent class="text-center">
        <div class="my-2">
          <button
            class="mr-2"
            :class="[ direction=== 'LBV-FCV' ? 'pill-selected' : 'pill' ]"
            @click="direction = 'LBV-FCV'"
          >
            Owendo -
            <span class="font-semibold">Franceville</span>
          </button>

          <button
            class="ml-2"
            :class="[ direction=== 'FCV-LBV' ? 'pill-selected' : 'pill' ]"
            @click="direction = 'FCV-LBV'"
          >
            Franceville -
            <span class="font-semibold">Owendo</span>
          </button>
        </div>
        <div class="my-4">
          <label for="express-train" class="mr-2"> Train Express</label>
          <input class="mr-4" type="checkbox" id="express-train" v-model="express">
          
          <label for="omnibus-train" class="mr-2"> Train Omnibus</label>
          <input type="checkbox" id="omnibus-train" v-model="omnibus">
        </div>
        <div class="text-gray-700 max-w-md m-auto">
          <input
            type="search"
            name="serch"
            placeholder="Destination"
            v-model="searchQuery"
            class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
          />
        </div>
      </form>

      <table class="mt-4 table-auto w-full">
        <thead>
          <tr class="border-b-2">
            <th class="text-left p-3 px-5">Trajet</th>
            <th class="text-left p-3 px-5">Train</th>
            <th class="text-left p-3 px-5">{{ $t('days') }}</th>
            <th class="text-left p-3 px-5">2nde Classe</th>
            <th class="text-left p-3 px-5">1ere Classe</th>
            <th class="text-left p-3 px-5 hidden sm:block">Classe VIP</th>

          </tr>
        </thead>
        <tbody>
          <tr class="border-b" v-for="route in filteredResults" :key="route.type+route.from+route.to">
            <td class="text-left p-3 px-5">
              <span class="hidden sm:block">{{route.from}} -</span>
              <span class="font-bold sm:text-xl">{{route.to}}</span>
            </td>
            <td class="text-left p-3 px-5">{{route.type}}</td>
            <td class="text-left p-3 px-5">{{concatenateDays(route.days)}}</td>
            <td class="text-left p-3 px-5">{{route.secondClass.toLocaleString('fr')}} FCFA</td>
            <td class="text-left p-3 px-5">{{route.firstClass.toLocaleString('fr')}} FCFA</td>
            <td class="text-left p-3 px-5 hidden sm:block">{{route.vipClass ? route.vipClass.toLocaleString('fr'): ''}} FCFA</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import allRoutes from "../../data/routes";
const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
export default {
  name: "home",
  data() {
    return {
      direction: "LBV-FCV",
      express: true,
      omnibus: true,
      searchQuery: ""
    };
  },
  methods: {
    concatenateDays(dayNumberList) {
      return dayNumberList.map(x => DAYS[x - 1]).join(", ");
    }
  },
  computed: {
    filteredResults() {
      let routes = [...allRoutes];
      if (this.searchQuery !== "") {
        routes = routes.filter(route =>
          route.to.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if(!this.express){
        routes = routes.filter(r => r.type !== "Express");
      }

      if(!this.omnibus){
        routes = routes.filter(r => r.type !== "Omnibus");
      }

      if (this.direction === "LBV-FCV") {
        routes = routes.filter(r => r.from === "Owendo");
      } else if (this.direction === "FCV-LBV") {
        routes = routes.filter(r => r.from === "Franceville");
      }
      return routes;
    }
  }
};
</script>

<style lang="scss">
.pill {
  @apply bg-transparent py-2 px-4 border border-gray-300 text-gray-600 rounded-full;
}
.pill-selected {
  @apply bg-blue-500 py-2 px-4 text-white rounded-full;
}
</style>
