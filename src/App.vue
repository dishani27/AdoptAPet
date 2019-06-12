<template>
  <div id="app">
    <div id="nav">
      <router-link to="/AdoptAPet">Home</router-link> |
      <!-- <router-link to="/pets">Pets</router-link> | -->
      <router-link to="/AdoptAPet/dogs">Dogs</router-link> |
      <router-link to="/AdoptAPet/cats">Cats</router-link>
    </div>

    <b-container>
       <router-view/>
    </b-container>   
  </div>
</template>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
    padding: 1%; 
    font-size: 1.3rem;
    color: black;
    text-transform: capitalize;
    text-align: center;
    background-color: seagreen;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;
    &.router-link-exact-active {
       color: ghostwhite;    }
  }
  a:hover{
    color: white;
  }
}

</style>
