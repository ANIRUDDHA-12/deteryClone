import Home from "./components/home";


function Contact(){
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return (
        <div>
            <Home />

            <form>
                <label>Enter your name
                    <input type="text" />
                </label>
                <button onClick={handleSubmit}> Submit</button>
            </form>
            
        </div>
    );
}

export default Contact;
