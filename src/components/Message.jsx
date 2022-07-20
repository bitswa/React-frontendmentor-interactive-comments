export function Message({ data, handleScore, handleDelete }) {
  const { image, username } = data.user;
  return (
    <div className="p-3 border">
      <div className="flex items-center">
        <div>
          <img className="w-8" src={image.png} alt="user image" />
        </div>
        <div>
          <span className="px-2 font-medium">{username}</span>
          {username == "juliosomo" && <span>you</span>}
        </div>
        <span>{data?.createdAt}</span>
      </div>
      <div className="py-4">{data?.content}</div>
      <div className="flex justify-between items-center pt-2">
        <div className="rounded-lg border flex items-center">
          <button className="px-2" onClick={() => handleScore(data)}>
            <img src="./images/icon-plus.svg" alt="icon-plus" />
          </button>
          <span className="px-2 p-1 border-x font-medium">{data?.score}</span>
          <button className="px-2">
            <img src="./images/icon-minus.svg" alt="icon-minus" />
          </button>
        </div>
        {username != "juliusomo" ? (
          <div>
            <button className="flex items-center font-medium">
              <img
                className="px-1"
                src="./images/icon-reply.svg"
                alt="icon-reply"
              />
              Reply
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              className="flex items-center"
              onClick={() => handleDelete(data)}
            >
              <img
                className="px-1"
                src="./images/icon-delete.svg"
                alt="icon-delete"
              />
              Delete
            </button>
            <button className="flex items-center">
              <img
                className="px-1"
                src="./images/icon-edit.svg"
                alt="icon-edit"
              />
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
