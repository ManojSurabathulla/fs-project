import React from 'react'
import styledComponents from 'styled-components'

const ImagePresentational = ({changeHandler,submitHandler,search}) => {
    
    return (
        <>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='eg@cars...' onChange={changeHandler} value={search} />
            <input type='submit' name='search' />
            {/* <button type='submit' onSubmit={submitHandler}>Submit</button> */}
            </form>
        </>
    )
}

export default ImagePresentational