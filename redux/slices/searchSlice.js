import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
      query:"", //what user will search
      activeTab:"photos",
      results:[],
      loading:false,
      error:null
    },

    reducers:{
      setQuery:(state,action)=>{
      },

      setActiveTab:(state,action)=>{
      },

      setLoading:(state,action)=>{
      },

      setError:(state,action)=>{
      },

      setResults:(state,action)=>{
      }
    }
})

export default searchSlice.reducer; 