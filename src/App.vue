<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <select
            class="form-select"
            aria-label="Default select example"
            @change="selectCountry($event)"
          >
            <option selected>Select Country</option>
            <option v-for="(country, ind) in countries" :key="ind">{{
              country.country_name
            }}</option>
          </select>
        </div>

        <div class="col-md-4">
          <select
            class="form-select"
            aria-label="Default select example"
            @change="selectState($event)"
          >
            <option selected>Select State</option>
            <option v-for="(state, index) in states" :key="index">{{
              state.state_name
            }}</option>
          </select>
        </div>

        <div class="col-md-4">
          <select
            class="form-select"
            aria-label="Default select example"
            @change="selectCity($event)"
            :disabled="!hasCity"
          >
            <option selected>Select City</option>
            <option v-for="(city, index) in cities" :key="index">{{
              city.city_name
            }}</option>
          </select>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      hasCity: true,
    };
  },

  async mounted() {
    try {
      const response = await fetch(
        "https://www.universal-tutorial.com/api/countries/",
        this.$requestOptions
      );
      this.countries = await response.json();
      console.log("countries", this.countries);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async selectCountry(event) {
      this.states = [];
      this.cities = [];
      this.selectedCountry = event.target.value;

      try {
        const response = await fetch(
          `https://www.universal-tutorial.com/api/states/${this.selectedCountry}`,
          this.$requestOptions
        );
        this.states = await response.json();
        console.log("states", this.states);
      } catch (error) {
        console.log(error);
      }
    },

    async selectState(event) {
      this.selectedState = event.target.value;
      this.cities=[]
      this.hasCity = true
      try {
        const response = await fetch(
          `https://www.universal-tutorial.com/api/cities/${this.selectedState}`,
          this.$requestOptions
        );
        this.cities = await response.json();

        if (this.cities.length < 1) {
          this.hasCity = false;
        }

        console.log("cities", this.cities);
  
      } catch (error) {
        console.log(error);
      }
    },

    selectCity(event) {
      this.selectedCity = event.target.value;
      console.log("The selected city is: ", this.selectedCity);
    },
  },
};
</script>

<style>
#app {
  margin-top: 100px;
}
</style>