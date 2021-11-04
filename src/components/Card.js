function Card() {
    return (
        <div className="card flex flex-col flex-jc-se flex-ai-c">
            <img src="/images/ipad.jpg"></img>
            <form className="flex flex-row flex-jc-sb flex-ai-c">
                <label for="qty">
                    <span>Qty: </span>
                    <input type="number" name="qty" defaultValue="1" min='1'></input>
                </label>
                <input type="submit" value="Add to Cart"></input>
            </form>
        </div>
    )
}

export default Card;