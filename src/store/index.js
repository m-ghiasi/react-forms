import { create } from "zustand";

export const useDataStore = create((set) => ({
  data: null,
  setData: (input) => set({ data: input }),
}));


export const useFormStore = create((set) => ({ 

  step1: { firstName: "", lastName: "" },
  step2: { fatherName: "", motherName: "" },
  step3: { color: "", age: 0 },
  
  setStep1: (input) => set({ step1: input }),
  setStep2: (input) => set({ step2: input }),
  setStep3: (input) => set({ step3: input }),
}));

// const [data, setData]=useState(null)
