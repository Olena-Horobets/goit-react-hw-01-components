import PropTypes from 'prop-types';
import defaultImage from './default-img.jpg';

function Painting({ url = defaultImage, title, price, isOnline }) {
  return (
    <div>
      <img src={url} alt={title}></img>
      <h2>{title}</h2>
      <p>Price: {price} money</p>
      <button>{isOnline ? 'ORDER!!' : 'Sorry((('}</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  isOnline: PropTypes.bool,
};

export default Painting;
