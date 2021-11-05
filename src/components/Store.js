import Card from "./Card";
import Products from '../Products';

function Store() {
    
    // TODO: add useEffect

    return (
        <div className="container flex flex-col flex-ai-c">
            <div className="box">
                <h1>Latest Tech</h1>
            </div>
            <div className="box flex flex-row flex-wrap">
                {Products.map(product => {
                    return <Card key={product.name} product={product}/>
                })}
            </div>
        </div>
    )
}

export default Store;