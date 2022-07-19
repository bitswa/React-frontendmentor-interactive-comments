export function Message({ data }) {
  const { image, username } = data.user;
  return (
    <div className="p-2">
      <div className="flex items-center">
        <div>
          <img src={image.png} alt="" />
        </div>
        <div>
          <span>{username}</span>
          {username == "juliosomo" && <span>you</span>}
        </div>
        <span>{data?.createdAt}</span>
      </div>
      <div>{data?.content}</div>
      <div className="flex justify-between items-center">
        <div>
          <button>+</button>
          {data?.score}
          <button>-</button>
        </div>
        {username != "juliusomo" ? (
          <div>
            <button className="flex items-center">
              <img className="px-1" src="./images/icon-reply.svg" alt="" />
              Reply
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="flex items-center">
              <img className="px-1" src="./images/icon-delete.svg" alt="" />
              Delete
            </button>
            <button className="flex items-center">
              <img className="px-1" src="./images/icon-edit.svg" alt="" />
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
