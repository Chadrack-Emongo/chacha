import React from 'react'

// export default function Inputlabel(props, ref) {
export default function Inputlabel({name, style, value, onChange, placeholder, types, ref, span, erreur}) {
        // ... Votre code pour Inputlabel
        // return <input ref={ref} {...props} />;
      
    return (
        <div className='grid'>
            
            {/* <label className={style} htmlFor="form_element">{name} </label>
            {
                erreur && <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' value={value} onChange={onChange} placeholder={placeholder} type={types} ref={inputref} />
            }
            {
                !erreur && <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold' value={value} onChange={onChange} placeholder={placeholder} type={types} ref={ref} />
            }
            <span className={span} >{erreur}</span> */}
        </div>
    )
// }
};