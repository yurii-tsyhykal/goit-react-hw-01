import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => (
  <ul className={styles.friendsList}>
    {friends.map(({ id, avatar, ...friends }) => (
      <li key={id} className={styles.friendsListItem}>
            <FriendListItem avatar={avatar} friends={friends} />
        
      </li>
    ))}
  </ul>
);

export default FriendList;
