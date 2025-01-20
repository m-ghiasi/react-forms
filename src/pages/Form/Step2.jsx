import { useFormStore } from "../../store";
import TextField from "./TextField";

export default function Step2() {
  const setStep2 = useFormStore((st)=>st.setStep2)
  const step2 = useFormStore((st)=>st.step2)


const handelfatherName = (e)=>{
  console.log(e.target.value)
  setStep2({fatherName: e.target.value, motherName: step2.motherName })
}
const handelMotherName = (e)=> {
  console.log(e.target.value)
  setStep2({fatherName: step2.fatherName, motherName: e.target.value})
}
console.log(step2)


  return (
    <div className="bg-white rounded-xl w-full ">
      step2
      <TextField id="fathername" label={"Father Name"} handelChange={handelfatherName}/>
      <TextField id="mothername" label={"Mother Name"} handelChange={handelMotherName} />
    </div>
  );
}
