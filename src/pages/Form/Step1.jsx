import { useFormStore } from "../../store";
import TextField from "./TextField";

export default function Step1(){
    const setStep1 = useFormStore((st)=>st.setStep1)
    const step1 = useFormStore((st)=>st.step1)

    const handelFirstName = (e)=>{
        console.log(e.target.value)
        setStep1({firstName: e.target.value, lastName: step1.lastName})
    }
    const handelLastName =(e)=>{
        console.log(e.target.value),
        setStep1({firstName:step1.firstName, lastName: e.target.value})
    }
    console.log(step1)





     return(
        <div className="bg-white rounded-xl w-full ">
            <h1 className="text-4xl p-2">step 1</h1>
            <TextField id="firstName" label={"First Name"} handelChange={handelFirstName}/>

            <TextField id="lastName" label={"Last Name"} handelChange={handelLastName}/>
        </div>
     )
}