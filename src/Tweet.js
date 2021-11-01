import { useState } from "react/cjs/react.development";

const Tweet = ({ name, status }) => {

    const [likes, setLikes] = useState(0);
    const [isRed, setRed] = useState(false);

    const increment = () => {
        setLikes(likes+1);
        setRed(!isRed);
    }
    return (
        <div className='tweet'>
            <h3 className= {isRed ? 'red' :'' }>{name}</h3>
            <p className= {isRed ? 'red' :'' }>{status}</p>
            <p><button onClick={increment}>Likes</button> {likes}</p>
        </div>
    );
}

export default Tweet;