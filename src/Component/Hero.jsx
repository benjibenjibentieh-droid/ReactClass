import "./Hero.css";

function hero ({ pagename }) {
    return (
        <div className="hero">
            <h1>{pagename}</h1>
        </div>
    )
}
export default hero;