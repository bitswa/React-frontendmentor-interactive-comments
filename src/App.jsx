import { useState } from "react";
import { Message } from "./components/Message";
import data from "./data.json";

function App() {
  const { image, username } = data.currentUser;

  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(data.comments);

  const handleSubmit = () => {
    setComments((oldComments) => [
      ...oldComments,
      {
        id: comments.length + 1,
        content: message,
        score: 0,
        user: {
          image,
          username,
        },
      },
    ]);
  };

  const handleDelete = (data) => {
    const newData = comments.filter((prev) => prev.id != data.id);
    setComments(newData);
  };

  const handleScore = (data) => {
    const newData = comments.map(comment => {
      if (comment.id == data.id) {
        comment.score++
      }
    })
    setComments(newData)
  };

  return (
    <div className="p-3 overflow-scroll">
      {comments?.map((comment) => {
        return (
          <Message
            key={comment.id}
            handleScore={handleScore}
            handleDelete={handleDelete}
            data={comment}
          />
        );
      })}
      <form
        className="p-3"
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
        <div className="flex justify-between items-center pt-4">
          <img
            className="w-8"
            src="./images/avatars/image-juliusomo.png"
            alt="avatar-image"
          />
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg"
            type="submit"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
