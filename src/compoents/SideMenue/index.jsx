import { NavLink } from "react-router";

export default function SideMenue(){
    return(
        <div className="bg-red-400 w-60 h-full p-4 flex flex-col gap-4">

            <NavLink className={({isActive})=>(isActive?"text-green-700":"")} to={"/Home"}>Home Page</NavLink>
            <NavLink className={({isActive})=>(isActive?"text-green-700":"")} to={"/About"}>About</NavLink>
            <NavLink className={({isActive})=>(isActive?"text-green-700":"")} to={"/Contact"}>Contacts</NavLink>
            <NavLink className={({isActive})=>(isActive?"text-green-700":"")} to={"/Form"}>Form</NavLink>
        </div>
    )
}