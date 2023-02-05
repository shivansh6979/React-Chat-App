import { useRef, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Auth from "./components/Auth";
import Chat from "./components/Chat";

const cookies = new Cookies();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.get("Auth-Token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);
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
          <Chat />
        ) : (
          <div>
            <label>Enter your Chat room :</label>
            <input ref={roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
            </button>
          </div>
        )}
      </div>
    );
}

export default App;
