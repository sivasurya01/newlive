import {createSlice } from "@reduxjs/toolkit";
const intialstatevalue =[{id:1,name:'sivasurya',email:'sivasuryapgm@gmail.com'},{id:2,name:'siva',email:'sivasurya@gmail.com'}]
export const Userslice = createSlice({
    name:'users',
    initialState: {value: intialstatevalue},
    reducers:{
        user:(state,action)=>{
      state.value = action.payload
        },
        adduser:(state,action)=>{
             state.value.push(action.payload)
             console.log(action)
        },
        updateuser:(state,action)=>{
      console.log(action)
      const {id,name,email} = action.payload
      const uu = state.value.find(user=>user.id==id)
      if(uu){
        uu.name=name
        uu.email=email
      }
        },
        deleteuser:(state,action)=>{
            console.log(action)
        const {id} = action.payload
        state.value =  state.value.filter(us=>us.id !== id)
        
         }
    }
})
export const {user,adduser,deleteuser,updateuser} = Userslice.actions
export default Userslice.reducer