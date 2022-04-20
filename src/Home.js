import { useState } from "react";


const Home = () => {
    
    //let name = "Mario";
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState("25");

    const handleClick = (e) => {
        setName("Luigi");
        setAge("30");
    }

    const handleClickAgain = (name, e) => {
        console.log(name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {/*<button onClick={(e) => handleClickAgain("Yoshi", e)}>Click me again</button>*/}
        </div>
    );
}
 
export default Home;