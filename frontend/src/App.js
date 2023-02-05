import { signOut } from "firebase/auth";
import { useRef, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import { auth } from "./firebase-config";

const cookies = new Cookies();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.get("Auth-Token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signOutHandler = async () => {
    await signOut(auth);
    cookies.remove("Auth-token");
    setIsLoggedIn(false);
    setRoom(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <Auth setIsLoggedIn={setIsLoggedIn} />
      </div>
    );
  } else
    return (
      <div>
        {room ? (
          <Chat room={room} />
        ) : (
          <div>
            <label>Enter your Chat room :</label>
            <input ref={roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
            </button>
          </div>
        )}
        <div>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
      </div>
    );
}

export default App;
