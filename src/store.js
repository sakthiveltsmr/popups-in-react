import create from "zustand";

// import { AppState } from "../types/general";
// import initialState from "./initialState";

const useStore = create((set) => ({
  Exit:false,
  Entry:false,
  
  setExit: (data) => {
    set({ Exit: data });
  },
  setEntry:(data)=>{
    set({ Entry:data}  
    )
  }
  
}));

export default useStore;