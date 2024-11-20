const GoodsCard = ({ photo, name, price }) => (
    <div className='goods-card'>
        <img
            src={photo}
            alt={name}
            className='goods-card-photo'
        />
        <h3 className="goods-card-name">{name}</h3>
        <p className="goods-card-price">${price.toFixed(2)}</p>
    </div>
);


export default GoodsCard;
