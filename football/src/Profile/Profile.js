import React, { useEffect, useState, } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [userProfile, setUserProfile] = useState(null);
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`https://${domain}/userinfo`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const userData = await response.json();
        setUserProfile(userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [getAccessTokenSilently, domain]);

  return (
    <div>
      {userProfile ? (
        <div>
          <p>User Profile</p>
          <img src={userProfile.picture} alt={userProfile.name} />
          <h2>{userProfile.name}</h2>
          <p>{userProfile.email}</p>
        </div>
      ) : (
        <div>Loading user profile...</div>
      )}
    </div>
  );
};

export default Profile;