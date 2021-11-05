import Card from "./Card";
import Products from '../Products';

function Store() {
    return (
        <div className="container flex flex-col flex-ai-c">
            <div className="box">
                <h1>Tech</h1>
            </div>
            <div className="box flex flex-row flex-wrap">
                {Products.map(product => {
                    return <Card key={Date.now()} product={product}/>
                })}
            </div>
        </div>
    )
}

export default Store;