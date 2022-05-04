import React from 'react'

const Gallery = ({ data }) => {
    return (
        <div className="row">
            {data.map((item) => <div key={item.id}>
                <div className="col-md-4">
                    <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                        height="200" width="250" alt={item.title} />
                </div>
            </div>)}
        </div>
    )
}

export default Gallery