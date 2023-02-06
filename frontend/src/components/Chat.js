import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Chat = (props) => {
  const [newMessages, setNewMessages] = useState("");
  const { room } = props;
  const messagesRef = collection(db, "messages");
  const [messageUpdate, setMessageUpdate] = useState([]);

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessageUpdate(messages);
    });

    return () => unsubscribe();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (newMessages === "") return;
    await addDoc(messagesRef, {
      text: newMessages,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    });
    setNewMessages("");
  };

  return (
    <div className="chat">
      <h1>{room.toUpperCase()}</h1>
      <div>
        {messageUpdate.map((msg, index) => {
          return (
            <div key={index}>
              <h2>{msg.user}</h2>
              <h5>{msg.text}</h5>
            </div>
          );
        })}
      </div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setNewMessages(e.target.value)}
          placeholder="Enter your message here"
          value={newMessages}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
