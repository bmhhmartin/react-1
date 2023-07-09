import { useState } from "react";


const Content = () => {
    const [someText, setSomeText] = useState('');
    const [show, setShow] = useState('');

    const areaFunction =(e)=>{
        setSomeText(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setShow(someText);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Write Here" onChange={areaFunction}></textarea>
                <button >Submit</button>
                <p>{show}</p>
            </form>
        </div>
    );
};

export default Content;