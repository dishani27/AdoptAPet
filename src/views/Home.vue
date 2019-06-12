<template>
  <div class="home">

    <h1>Adopt a new Best Friend !</h1>
     <p class="explore" > <router-link to="/AdoptAPet/dogs">Explore Dogs</router-link></p>
     <p class="explore" > <router-link to="/AdoptAPet/cats">Explore Cats</router-link></p><br>
     <p> Pets For Adoption: {{ petsCount }} </p>
     <button class="btn btn-primary addB" @click="togglePetForm"> Add A Pet </button>

  <div id="form"> 
     <b-form @submit.prevent="onSubmit"  v-if="showPetForm"  >

      <b-form-group id="input-group-2" label="Name:" label-for="input-2" label-class="asd">
        <b-form-input type="text" id="input-2" v-model="formData.name" required placeholder="Enter Name" ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Breed:" label-for="input-4" label-class="asd">
        <b-form-input type="text" id="input-4" v-model="formData.breed" required placeholder="Enter Breed" ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3" label-class="asd">
        <b-form-select type="text" id="input-3" v-model="formData.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Gender:" label-for="input-5" label-class="asd">
        <b-form-select type="text" id="input-5" v-model="formData.gender" :options="['male', 'female']" required></b-form-select>
      </b-form-group>

       <b-form-group id="input-group-6" label="Age:" label-for="input-6" label-class="asd"> 
        <b-form-input type="number" id="input-6" v-model="formData.age" required placeholder="Enter Age" ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-7" label="Color:" label-for="input-7" label-class="asd">
        <b-form-input type="text" id="input-7" v-model="formData.color" required placeholder="Enter Color" ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-8" label="Weight:" label-for="input-8" label-class="asd">
        <b-form-input type="number" id="input-8" v-model="formData.weight" required placeholder="Enter Weight" ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-9" label="Location:" label-for="input-9" label-class="asd">
        <b-form-input type="text" id="input-9" v-model="formData.location" required placeholder="Enter Location" ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-10" label="Notes:" label-for="input-10" label-class="asd">
        <b-form-input type="text" id="input-10" v-model="formData.notes"  placeholder="Any Notes..." ></b-form-input>
      </b-form-group>

      <b-button class="fbtn" type="submit" >Submit</b-button>
      <b-button class="fbtn" type="reset"  @click="onReset" >Reset</b-button>
    </b-form>
  </div>  

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  beforeCreate: function() {
       document.body.className = 'homescreen'
    },
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: null,
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'petsCount'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
      var form = document.querySelector("#form");
      // console.log(form);
      form.style.display= form.style.display === 'block' ? 'none' : 'block';
    },
    onReset(evt) {
        evt.preventDefault()
        this.formData.age = 0
        this.formData.name = ''
        this.formData.species = null
        this.formData.breed = ''
        this.formData.gender = null
        this.formData.color = ''
        this.formData.weight = 0
        this.formData.location = ''
        this.formData.notes = ''

        
    },
    onSubmit() {
      const {name, age, breed, species, color, location, notes, gender, weight} = this.formData;
      const payload = {
        species,
        pet: {
          name,age, breed, species, color, location, notes, gender, weight
        }
      }
        this.addPet(payload);  
        this.formData.age = 0
        this.formData.name = ''
        this.formData.species = null
        this.formData.breed = ''
        this.formData.gender = null
        this.formData.color = ''
        this.formData.weight = 0
        this.formData.location = ''
        this.formData.notes = '' 
      
    }
  }
}
</script>

<style scoped>
form {
    text-align: left;
}
.fbtn{
   margin: 0% 3%;
   background-color: navajowhite;
   color: black;
}
.fbtn:hover{
  background-color: seagreen;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: black; 
    background-color: navajowhite; 
    border-color: black; 
}
.fbtn:focus{
  -webkit-box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
  box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.7);
}
.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
  box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.7);
}
.home{
    margin-left: 24%;
    height: 19vw;
    width: 54%;
    padding-top: 2%;
    margin-top: 4%;
    background-color: rgba(143, 188, 143, 0.8);
    border-radius: 2%;
  }
h1{
  text-transform: capitalize;
  font-family: 'Righteous', cursive;
  /* font-family: 'Permanent Marker', cursive; */
  text-align: center;
  font-size: 2.7rem;
  margin-bottom: 7%;
}
.addB{
  margin-left: 46%;
  color: black;
  background-color: navajowhite;
  border-color: black;
}
.addB:hover{
  background-color: seagreen;
  border-color: ghostwhite;
}
p {
  display: inline-block;
  margin-left: 6%;
  font-size: 1.3rem;
  color: black;
  
}
#form{
    height: 17vw;
    display: none;
    overflow-y: scroll;
    margin-top: 12%;
    background-color: ghostwhite;
    width: 79%;
    /* text-align: center; */
    border-radius: 3%;
    padding: 3%;
    margin-left: 11%;
}
.form-group {
    margin-bottom: 1rem;
    /* display: inline-block; */
    /* width: 61%; */
    display: flex;
}
.form-group.asd{
    width: 27% !important;
}
.form-control {
    /* display: inline-block; */
    width: 144%;
}
.custom-select{
  width: 350%;
}   
.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus{
  -webkit-box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
  box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
}
.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus{
  -webkit-box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle{
   background-color: navajowhite;
}
.btn-primary:focus, .btn-primary.focus{
  -webkit-box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
    box-shadow: 0 0 0 0.2rem rgba(46 , 139, 87, 0.5);
}
a {
    font-weight: bold;
    color: darkred;
}  
.router-link-exact-active {
       color: ghostwhite;  
}
a:hover{
  color: firebrick;
  text-decoration: none;
}
.explore{
  font-family: 'Lobster', cursive;
  font-size: 1.5rem;
  letter-spacing: .5px;
  color: firebrick;
}
.custom-select{
  text-transform: capitalize;
}
</style>

