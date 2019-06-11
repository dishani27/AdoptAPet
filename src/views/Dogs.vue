<template>
    <div id="container">
        <h1>Dogs For Adoption</h1>
        <div id="table">
          <b-table class="table-dark" striped hover :items="dogs">
            <template slot="name" slot-scope="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <router-link :to="`pets/dogs/${data.index}`">{{ data.value }}</router-link>
            </template>
          </b-table>
        </div>
    </div>    
</template>

<script>
import { mapState } from 'vuex'
export default {
    beforeCreate: function() {
       document.body.className = 'dogs';
    },
    data() {
        return{}
    },
    computed: {
    ...mapState([
        'dogs'
    ])
    }
}
</script>

<style scoped>

h1{
    text-align: center;
    color: black;
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
