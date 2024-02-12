import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/authSelectors';
import { Link } from 'react-router-dom';

const Profile = () => {
  const userData = useSelector(selectUserData);
  console.log(userData);

  const isAvatar = userData.avatarURL.includes('gravatar')
    ? userData.avatarURL
    : `http://localhost:8000/${userData.avatarURL}`;

  return (
    <div style={{ marginTop: 60 }}>
      <Link to="update">Update</Link>
      <h2> {userData.name}</h2>
      <p>{userData.email}</p>
      <img src={isAvatar} alt={''} />
    </div>
  );
};

export default Profile;
