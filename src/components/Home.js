import '../css/Home.css'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Home() {

    useEffect(() => {
        getUsers();
    }, []);

    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const toUser = (id,name) => {
        localStorage.setItem("name",name)
        navigate(`./${id}`)
    }
    const image1='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1712661355~exp=1712661955~hmac=975384cbea5ed1c242a59a6b72737898dd892f790c118f26129f4cd26f5c7b41'
    const image2='https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1712661292~exp=1712661892~hmac=2874e0c904ff7018da867984cea1b1283284f4843cad6ec007af000e68c6ba66'
    const image3='https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1712661396~exp=1712661996~hmac=17489ffe5a6670bae565c81d236b8022d4c6c07b50eb30a61c5d672dba76f3f6'
    const image4='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1712661423~exp=1712662023~hmac=a7abc9e3414c1edd6ab2acb5ed4bcc42f66b7ac5f1d7cb068883e761ab78561a'
    const image5='https://img.freepik.com/premium-vector/woman-sign-icon-comic-style-female-avatar-vector-cartoon-illustration-white-isolated-background-girl-face-business-concept-splash-effect_157943-11277.jpg?w=740'
    const image6='https://img.freepik.com/premium-vector/customer-service-agent-icon-vector-image-can-be-used-digital-nomad_120816-85794.jpg?w=740'
    const image7='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?w=740&t=st=1712661497~exp=1712662097~hmac=1f86a6e43c8f45151e1262f16d1c87dd37359f8dcc4a6ccdadfe27390cd7838a'
    const image8='https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg?w=740'
    const image9='https://img.freepik.com/premium-vector/internship-manager-icon-flat-illustration-internship-manager-vector-icon-web-design_98396-26728.jpg?w=740'
    const image10='https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=740&t=st=1712661576~exp=1712662176~hmac=5011208fac44c8d7b7f40f0ceb0221493d3c8a1d3beab8b8bde063d7dd5341d0'
    const images=[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10    ]

    const getUsers = async () => {
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setUsers(result)
        } catch (error) {
            console.log(error);
        }
    };

    function e(item, index) {
        localStorage.setItem('user',item)
        return (
                <div onClick={() => toUser(item.id,item.name)} className="card-container">
                    <div className="user-card">
                        <div className="front">
                            <div className="img-container">
                                <img src={images[index]} alt="User Image" className="img" />
                            </div>
                            <div className="info-container">
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Website: {item.website}</p>
                                <p>Company: {item.company.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    return (
        <div className=''>
            <h1>Users</h1>
            <div className='user-card-container'>
            {
                users.map(e)
            }
            </div>
        </div>
    )
}

export default Home
