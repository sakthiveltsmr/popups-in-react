import create from "zustand";

// import { AppState } from "../types/general";
// import initialState from "./initialState";

const useStore = create((set) => ({
  Exit:false,
  
  setExit: (data) => {
    set({ Exit: data });
  }
  
}));

export default useStore;