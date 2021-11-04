import Card from "./Card";

function Store() {
    return (
        <div className="container flex flex-col flex-ai-c">
            <div className="box">
                <h1>Tech</h1>
            </div>
            <div className="box flex flex-row flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Store;