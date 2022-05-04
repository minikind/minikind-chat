import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Channel from "../Channel";
import Channels from "../Channels";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import SignIn from "../SignIn";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }

      setIsInitialized(true);
    });
  }, []);

  if (!isInitialized) {
    return <div>Authenticating user</div>;
  }

  return (
    <Routes>
      <Route
        path="signin"
        element={isSignedIn ? <Navigate to="/channels" /> : <SignIn />}
      />
      <Route
        path="channels"
        element={isSignedIn ? <Channels /> : <Navigate to="/signin" />}
      >
        <Route path=":channelId" element={<Channel />} />
        <Route index element={<div>Home</div>} />
      </Route>
      <Route path="/" element={<Navigate to="channels" />} />
    </Routes>
  );
}

export default App;
