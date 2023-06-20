import { useAuthContext } from "../context/authContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  return <div>UserProfile of {user?.name}</div>;
};

export default UserProfile;
