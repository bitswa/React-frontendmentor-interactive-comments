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
    <div className="p-2">
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
          className="w-full p-2 rounded-lg border h-16"
          placeholder="Add a comment..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <img className="w-[35px]" src="./images/avatars/image-juliusomo.png" alt="avatar" />
          <button className="p-4 bg-blue-500 text-white rounded-lg" type="submit" >SEND</button>
        </div>
      </form>
    </div>
  );
}

export default App;
