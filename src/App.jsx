import { useState } from "react";
import { Message } from "./components/Message";
import data from "./data.json";

export function App() {
  const { image, username } = data.currentUser;

  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(data.comments);

  const handleSubmit = () => {
    setComments((oldComments) => [
      ...oldComments,
      {
        id: comments.length + 1,
        createdAt: "Now",
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

  const handleScore = (target, data) => {
    comments.map((comment) => {
      if (comment.id != data.id) return;

      if (target) return ++comment.score;

      return --comment.score;
    });
    setComments([...comments]);
  };

  return (
    <div className="p-3 h-full">
      {comments?.map((comment) => {
        return (
          <>
            <Message
              key={comment.id}
              className={"p-3"}
              handleScore={handleScore}
              handleDelete={handleDelete}
              data={comment}
            />
            {comment?.replies?.map((reply) => {
              return (
                <Message
                  key={reply.id}
                  className={"p-3 border-l"}
                  handleDelete={handleDelete}
                  handleScore={handleScore}
                  data={reply}
                />
              );
            })}
          </>
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
          className="w-full p-2 px-4 rounded-lg border h-16"
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
            className="px-6 py-3 bg-mBlue text-white rounded-lg"
            type="submit"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
