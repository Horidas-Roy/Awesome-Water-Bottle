import "./Bottle.css"

const Bottle = ({bottle,handleAddToCard}) => {
    const {name,img,price}=bottle
    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <img src={img}></img>
            <p>Price:{price}</p>
            <button onClick={()=>handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;