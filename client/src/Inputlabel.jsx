import React from 'react'

// export default function Inputlabel(props, ref) {
    const Inputlabel = React.forwardRef((props, ref) => {
        // ... Votre code pour Inputlabel
        // return <input ref={ref} {...props} />;
      
    return (
        <div className='grid'>
            
            <label className={props.style} htmlFor="form_element">{props.name} </label>
            {
                props.erreur && <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold border border-red-400' value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.types} ref={ref} />
            }
            {
                !props.erreur && <input className='w-96 mt-2 p-3 rounded-xl h-12 text-black font-bold' value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.types} ref={ref} />
            }
            <span className={props.span} >{props.erreur}</span>
        </div>
    )
// }
});

export default Inputlabel;