import '../css/Photos.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Photos() {
    const [photos, setPhotos] = useState([])
    const params = useParams()
    const [name,setName]=useState('')


    useEffect(() => {
        getPhotos();
        const name = localStorage.getItem('name')
        setName(name)
        console.log(params.id)
    }, []);

    const getPhotos = async () => {
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/photos",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setPhotos(result)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    function e(item, index) {
        if (item.albumId == params.id) {
            return (
                <div className='photo-div'>
                    <img src={item.thumbnailUrl} />
                    <p>{item.title}</p>
                </div>
            )
        }
    }

    return (

        <div>
            <h1>{name}</h1>
            <h2>Photos</h2>
            <div className='photos'>
                {
                    photos.map(e)
                }

            </div>
        </div>
    )
}

export default Photos

