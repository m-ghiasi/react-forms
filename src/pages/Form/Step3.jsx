import { useFormStore } from "../../store";
export default function Step3() {
  const setStep3 = useFormStore((st) => st.setStep3);
  const step3 = useFormStore((st) => st.step3);

  


  const handelColor = (e)=>{
    console.log(e.target.value)

    setStep3({color: e.target.value, age: step3.age })

  }
  const handelAge = (e)=>{
    console.log(e.target.value)
    setStep3({color: step3.color , age: e.target.value })
  }
  console.log(step3)

  return (
    <div className="bg-white rounded-xl w-full  p-3 flex flex-col gap-4 ">
      <label htmlFor="color">
        Favorit Color:
        <input
          className="bg-slate-200 px-2 rounded-xl border-none focus:outline-none"
          type="color"
          id="color"
          name="color"
          onChange={handelColor}
        />
      </label>

      <label htmlFor="age">
        Age:
        <input
          className="bg-slate-200 px-2 rounded-xl border-none focus:outline-none"
          type="number"
          id="age"
          name="age"
          max={90}
          onChange={handelAge}
        />
      </label>
    </div>
  );
}
