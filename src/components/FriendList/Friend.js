import PropTypes from 'prop-types';

function Friend({ name, avatar, isOnline }) {
  return (
    <>
      <span className='status'></span>
      <img className='avatar' src={avatar} alt='' width='48' />
      <p className='name'>{name}</p>
    </>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
