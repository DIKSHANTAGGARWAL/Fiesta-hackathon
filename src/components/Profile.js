import React, { useEffect, useState } from 'react'
import '../css/Profile.css'
import { useParams } from 'react-router-dom'
import LoadingPage from './LoadingPage'

function Profile() {
    const params = useParams()
    const [users, setUsers] = useState([])
    const [id, setId] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers();
        setId(params.id)
    }, []);

    const getUsers = async () => {
        setLoading(true)
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            console.log(result)
            setUsers(result)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {
                loading ? <LoadingPage /> :
                    <div className="user-details-container">
                        <h2>User Details</h2>
                        <div className="user-detail">
                            <strong>Name:</strong> <span>{users[id - 1].name}</span>
                        </div>
                        <div className="user-detail">
                            <strong>Username:</strong> <span>{users[id - 1].username}</span>
                        </div>
                        <div className="user-detail">
                            <strong>Email:</strong> <span>{users[id - 1].email}</span>
                        </div>
                        <div className="user-detail">
                            <h3>Address</h3>
                            <p><strong>Street:</strong> {users[id - 1].address.street}</p>
                            <p><strong>Suite:</strong> {users[id - 1].address.suite}</p>
                            <p><strong>City:</strong> {users[id - 1].address.city}</p>
                            <p><strong>Zipcode:</strong> {users[id - 1].address.zipcode}</p>
                            <p><strong>Geo:</strong> {users[id - 1].address.geo.lat}, {users[id - 1].address.geo.lng}</p>
                        </div>
                        <div className="user-detail">
                            <h3>Contact</h3>
                            <p><strong>Phone:</strong> {users[id - 1].phone}</p>
                            <p><strong>Website:</strong> {users[id - 1].website}</p>
                        </div>
                        <div className="user-detail">
                            <h3>Company</h3>
                            <p><strong>Name:</strong> {users[id - 1].company.name}</p>
                            <p><strong>Catch Phrase:</strong> {users[id - 1].company.catchPhrase}</p>
                            <p><strong>BS:</strong> {users[id - 1].company.bs}</p>
                        </div>
                    </div>

            }
        </div>

    )
}

export default Profile
