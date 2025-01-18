import { create } from "zustand";

export const useDataStore = create((set) => ({
  data: null,
  setData: (input)=> set({data: input})
   
}));


// const [data, setData]=useState(null) 