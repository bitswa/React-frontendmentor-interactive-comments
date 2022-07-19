import { useState } from "react";
import { Message } from "./components/Message";
import data from "./data.json";

function App() {

  const {image, username} = data.currentUser

  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(data.comments);

  const handleSubmit = () => {
    setComments((oldComments) => [
      ...oldComments,
      {
        content: message,
        score: 0,
        user: {
          image,
          username,
        },
      },
    ]);
  };

  return (
    <div className="App">
      {comments?.map((comment) => {
        return <Message key={comment.id} data={comment} />;
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <img src="./images/avatars/image-juliusomo.png" alt="avatar" />
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
}

export default App;
