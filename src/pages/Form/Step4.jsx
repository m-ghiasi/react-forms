import { useFormStore } from "../../store"

export default function Step4(){
    const step1 = useFormStore((st)=>st.step1)
    const step2 = useFormStore((st)=>st.step2)
    const step3 = useFormStore((st)=>st.step3)
    return(
       <div className="bg-white rounded-xl w-full ">
           🎉your data :
            <p>First name:{step1.firstName} -- Last name:  {step1.lastName}</p>
            <p>father name: {step2.fatherName}-- mother name:  {step2.motherName}</p>
            <p>favorit color : {step3.color}-- age: {step3.age}</p>
       </div>
    )
} 