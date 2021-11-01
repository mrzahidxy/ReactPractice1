import React, { useState } from 'react';
import Tweet from './Tweet';
import './App.css';



const App = () => {

    const [users, Setusers] = useState([
        { name: 'Zahid', status: 'Hey, wassup! A good day to all.' },
        { name: 'Ismail', status: 'Hey, Good Morning! Good Luck!' },
        { name: 'Ashraful', status: 'Hey, Good Luck! Stay Safe' },
    ])

    const [likes, setLikes] = useState(0);


    return (


        <div >
            <h1>Twitter</h1>

            <div className='tweeter'>{users.map(user => (
                <Tweet name={user.name} status={user.status} />
            ))}
            </div>

        </div>
    );

}

export default App;