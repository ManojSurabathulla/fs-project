import React, { useState } from 'react'

const Count = () => {
    const [value, setValue] = useState(0);

    const incriment = () => {
        setValue(value <=34 ? value + 1 : 35)
    }

    const decrement = () => {
        setValue(value >=1 ? value - 1 : 0)
        //monthState?.months <= 11 ? monthState?.months + 1 : 12,
    }

    const reset = () => {
        setValue(0)
    }
    return (
        <>
            <div className='container' style={{ textAlign: 'center', width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', height:'50%' }}>
                <h1>{value}</h1>
                <button style={{ margin: '10px', border: 'none', padding: '5px 20px', backgroundColor: 'purple', color: 'white', fontSize:'16px', borderRadius:'10px' }} onClick={incriment} >+</button>
                <button style={{ margin: '10px', border: 'none', padding: '5px 20px', backgroundColor: 'purple', color: 'white', fontSize:'16px', borderRadius:'10px' }} onClick={decrement} >-</button>
                <button style={{ margin: '10px', border: 'none', padding: '5px 20px', backgroundColor: 'purple', color: 'white', fontSize:'16px', borderRadius:'10px' }} onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Count
