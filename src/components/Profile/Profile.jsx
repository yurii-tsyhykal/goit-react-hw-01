import css from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => (
  <div className={css.card}>
    <div className={css.userInfo}>
      <img
        src={image}
        alt="User avatar"
        className={css.cardAvatar}
        width="100"
      />
      <p className={css.userName}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={css.userStatsList}>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
