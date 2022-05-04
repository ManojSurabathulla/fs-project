import React, { useState } from 'react'
import ImagePresentational from './ImagePresentational'
import axios from 'axios'
import Gallery from './Gallery';

const ImageFunctional = () => {
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
            res => setData(res?.data?.photos?.photo)
        )
        console.log('first', search)
    }
    return (
        <>
            <ImagePresentational {...{ search, changeHandler, submitHandler }} />
             {data.length>=1 ? <Gallery data={data} />: <h2>No data... </h2>}
        </>
    )
}

export default ImageFunctional