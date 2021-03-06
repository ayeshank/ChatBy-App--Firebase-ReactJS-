import React,{useRef} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore';
import 'firebase/auth';


export default function ChatRoom() {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const dummy = useRef();
    const messagesRef = firestore.collection('messages').doc('room'+props.rname).collection('roommsgs');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault();
     const { uid, photoURL } = auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
    <>
      <main>
        <Head rname2={props.rname}/>
              {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message" />
        <button type="submit" disabled={!formValue}>Send</button>
      </form>
    </>
    )
}
