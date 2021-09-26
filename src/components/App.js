// create your App component here
import React, { useEffect, useState } from 'react'
const BASE_URL = 'https://dog.ceo/api/breeds/image/random'
function App() {
    const [message, setMessage] = useState(null)

    useEffect(() => {
        fetch(BASE_URL)
        .then(r => r.json())
        .then(data => setMessage(data.message))
    }, [])

    if (!message) return <p>Loading...</p> 

    return (
        <div>
            <img src={message} alt="A Random Dog"></img>
        </div>
    )
}

export default App

