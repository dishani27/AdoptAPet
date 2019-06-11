<template>
  <div id="stuff">  
    <div class="info desc">
      <h1> {{ animal.name }}  </h1>
      <p> Age: {{ animal.age }} </p>
      <p> Breed: {{ animal.breed }} </p>
      <p> Gender: {{ animal.gender }} </p>
      <p> Color: {{ animal.color }} </p>
      <p> Weight: {{ animal.weight }} </p>
      <p> Location: {{ animal.location }} </p>
      <p> Notes: {{ animal.notes }} </p>
    </div>   
   <!-- <transition name="img_trans">  -->
    <div class="info img"> 
          <!-- {{animal.img}} -->
          <img v-bind:src=" animal.img ">
     </div>
   <!-- </transition>   -->
  </div>     
</template>

<script>
import { mapState } from 'vuex'
export default {
    beforeCreate: function() {
       document.body.className = 'pets';
    },
    data(){
        return{
            animal: {}
        }
    },
    computed:{
        ...mapState([
            'dogs',
            'cats'
        ])
        //  same as
        // dogs{
        //     return this.$store.state.dogs
        // }
    },
    mounted(){
             const animal = this[this.$route.params.species][this.$route.params.id];
            //  same as this.cats , this['cats']
            this.animal =  animal;
    }
}
</script>

<style scoped>
#stuff {
    display: -webkit-box;
    display: -ms-flexbox;
    margin-top: 9%;
}
h1 {
    margin-bottom: 8%;
    margin-left: -2%;
    font-weight: 600;
    font-family: 'Righteous', cursive;
    letter-spacing: 1px;
}
p{
    margin-bottom: 3%;
    text-transform: capitalize;
    font-size: 1.15rem;
}
.img{ 
   margin-left: 14%;
    width: 55%;
    animation: bounce-data-v-85612724 2s infinite;
}
@keyframes bounce {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.05);
    }
    100%{
        transform: scale(1);
    }  
}
img{
    width: 100%;
    border-radius: 5%;
}
.desc {
    background-color: aliceblue;
    width: 28%;
    height: 29vw;
    line-height: 27px;
    padding: 1% 3% 3%;
    border-radius: 5%;
}
</style>
