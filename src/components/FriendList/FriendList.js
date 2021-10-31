import PropTypes from 'prop-types';
import Friend from './Friend';

function FriendList({ data }) {
  return (
    <ul class='friend-list'>
      {data.map((item) => {
        return (
          <li className='item' id={item.id}>
            <Friend
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
