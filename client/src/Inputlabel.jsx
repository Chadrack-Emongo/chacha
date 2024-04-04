import React from 'react'

export default function InputLabel({ name, style, value, onChange, placeholder, types, inputRef, span, erreur }) {      
    return (
        <div className='grid'>
            
            <label className={style} htmlFor="form_element">{name} </label>
            {
                erreur && <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' value={value} onChange={onChange} placeholder={placeholder} type={types} ref={inputRef} />
            }
            {
                !erreur && <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold' value={value} onChange={onChange} placeholder={placeholder} type={types} ref={inputRef} />
            }
            <span className={span} >{erreur}</span>
        </div>
    )
// }
};