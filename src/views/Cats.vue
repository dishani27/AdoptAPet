<template>
    <div>
        <h1>Cats For Adoption</h1>
        <div id="table">
          <b-table class="table-dark" striped hover :items="cats">
            <template slot="name" slot-scope="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <router-link :to="`pets/cats/${data.index}`">{{ data.value }}</router-link>
            </template>
          </b-table>
        </div>
    </div>    
</template>

<script>

import { mapState } from 'vuex'

export default {
    beforeCreate: function() {
       document.body.className = 'cats'
    },
    data() {
        return{}
    },
    computed: {
      ...mapState([
        'cats'
      ])
    }
}
</script>

<style scoped>

h1{
    text-align: center;
    color: ghostwhite;
    font-weight: bolder;
    margin: 2% 0%;
    font-family: 'Righteous', cursive;
}
a {
    font-weight: bold;
    color: lightgreen;
} 
a:hover{
  color: mediumspringgreen;
  text-decoration: none;
}
</style>
