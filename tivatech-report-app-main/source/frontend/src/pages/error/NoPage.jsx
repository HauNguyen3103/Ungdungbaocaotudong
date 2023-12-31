import './NoPage.css';

const NoPage = () => {
    return <div>
        <div className="box">
            <div className="box-bg">
                <div className="noise" ></div>
                <div className="overlay" ></div>
                <div className="terminal" >
                    <h1>Error <span className="errorcode" >404</span></h1>
                    <p className="output" >The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                    <p className="output" >Please try <a href="#1">return to the homepage</a>.</p>
                    <p className="output" >Good luck.</p>
                </div>
            </div>
        </div>
    </div>
}

export default NoPage;
