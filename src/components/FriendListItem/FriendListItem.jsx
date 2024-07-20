import css from './FriendListItem.module.css'
const FriendListItem = ({ avatar, friends: { name, isOnline } }) => (
  <div>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p className={isOnline ? css.isOnline : css.isOffline}>{isOnline ? 'Online' : 'Offline'}</p>
  </div>
);

export default FriendListItem;
