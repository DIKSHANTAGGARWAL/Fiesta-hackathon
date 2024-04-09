import '../css/Album.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import LoadingPage from './LoadingPage';

function Album() {
    const [album, setAlbum] = useState([])
    const [photos, setPhotos] = useState([])
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const params = useParams()


    useEffect(() => {
        getAlbum();
        getPhotos()
        const name = localStorage.getItem('name')
        setName(name)
        console.log(params.id)
    }, []);

    const navigate = useNavigate()

    const toPhotos = (id) => {
        navigate(`./${id}/photos`)
    }

    const getAlbum = async () => {
        setLoading(true)
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/albums",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setAlbum(result)
            setLoading(false)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const getPhotos = async () => {
        setLoading(true)
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/photos",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setLoading(false)
            setPhotos(result)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    function e(item, index) {
        var x = (item.id - 1) * 50
        let arr=[]
        
        if (item.userId == params.id) {
            return (
                <div onClick={() => toPhotos(item.id)} className="album-card">
                    <div className="album">
                        <div className="picture">
                            <img src={photos[x + 1].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 2].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 3].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 4].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 5].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 6].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 7].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 8].url} />
                        </div>
                        <div className="picture">
                            <img src={photos[x + 9].url} />
                        </div>
                    </div>
                    <p className="album-title">{item.title  }</p>
                </div>
            )
        }
    }
    return (
        <div>
            {
                loading ? <LoadingPage />
                    :
                    <div>
                        <h1>{name}</h1>
                        <div className='album-cover'>
                            {
                                album.map(e)
                            }
                        </div>
                    </div>
            }

        </div>
    )
}

export default Album
