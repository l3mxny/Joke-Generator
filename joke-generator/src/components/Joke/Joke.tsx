// Props will need their own interface
// remember to import styles

interface JokeProps{
    text:string;
}

const Joke = ({text} : JokeProps) => {
    return <div>{text}</div>

};

export default Joke;
