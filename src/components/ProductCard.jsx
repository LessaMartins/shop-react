import Stars from "./Stars";

const ProductCard = ({ image, description, category, price, rating }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" className="image-card" />
        <div className="product-name">{description}</div>
        <div className="type">{category}</div>
        <div className="price">{price}</div>
        {rating && <Stars rating={rating}></Stars>}
      </div>
    </>
  );
};

export default ProductCard;
