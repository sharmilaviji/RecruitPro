import firebase from 'boot/firebase'
const state = {

}
const mutations = {
    
}
const actions = {
    
}
const getters = {
    registerUser( {},payload){
       
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
   .then(Response =>{
console.log('response:',response)
   })
   .catch(error =>{
       console.log('error.message:',error.message
       )
   })
    }
    
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}