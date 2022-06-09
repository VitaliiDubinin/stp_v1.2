import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { signOut } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState({});
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser({});
    }
  });
  const logout = async () => {
    await signOut(auth);
    setUser({});
  };
  return (
    <>
      <div className="pageContainer">
        <h4>{user.email} Logged In </h4>

        {(!user || !user.email) && <button>Login</button>}

        {user?.email && (
          <div>
            <button onClick={logout}> Sign Out </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
