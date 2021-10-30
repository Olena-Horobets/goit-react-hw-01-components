import PropTypes from 'prop-types';
import Painting from './Painting';

function PaintigsList({ list }) {
  return (
    <ul>
      {list.map((painting) => (
        <li key={painting.id}>
          <Painting
            url={painting.original}
            title={painting.description}
            price={painting.price}
            isOnline={painting.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

PaintigsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintigsList;
