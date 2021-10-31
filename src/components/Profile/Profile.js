import PropTypes from 'prop-types';

function Profile({ user }) {
  return (
    <div className='profile'>
      <div className='description'>
        <img src={user.avatar} alt='Аватар пользователя' className='avatar' />
        <p className='name'>{user.name}</p>
        <p className='tag'>@{user.tag}</p>
        <p className='location'>{user.location}</p>
      </div>

      <ul className='stats'>
        <li>
          <span className='label'>Followers</span>
          <span className='quantity'>{user.stats.followers}</span>
        </li>
        <li>
          <span className='label'>Views</span>
          <span className='quantity'>{user.stats.views}</span>
        </li>
        <li>
          <span className='label'>Likes</span>
          <span className='quantity'>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  },
};

export default Profile;
