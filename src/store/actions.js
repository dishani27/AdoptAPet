export default{
    addPet: ( {commit}, payload ) =>{
       commit('appendPet', payload);   //will call mutation
    }
}