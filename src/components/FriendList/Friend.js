import s from 'components/FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

function Friend({ name, avatar, isOnline }) {
  return (
    <>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt='' width='48' />
      <p className={s.name}>{name}</p>
    </>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
