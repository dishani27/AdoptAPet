export default{
    petsCount: (state) => {
       return state.cats.length + state.dogs.length
    }
}