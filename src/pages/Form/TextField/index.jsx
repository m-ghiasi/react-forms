export default function TextField ({id, label}){
    return(
       <div>
           <label htmlFor={id}>
            <input type="text" name={id} id={id} />
            {label}
           </label>
       </div>
    )
}