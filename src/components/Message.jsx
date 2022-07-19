export function Message({ data }) {
  const { image, username } = data.user;
  return (
    <div className="p-2">
      <div className="flex items-center">
        <div>
          <img className="w-[35px]" src={image.png} alt="" />
        </div>
        <div>
          <span className="px-2 font-medium">{username}</span>
          {username == "juliosomo" && <span>you</span>}
        </div>
        <span>{data?.createdAt}</span>
      </div>
      <div className="py-4">{data?.content}</div>
      <div className="flex justify-between items-center">
        <div className="rounded-lg border flex items-center">
          <button className="px-2">
            <img src="./images/icon-plus.svg" alt="plus" />
          </button>
          <span className="px-2 p-1 border-x font-medium">{data?.score}</span>
          <button className="px-2">
            <img src="./images/icon-minus.svg" alt="minus" />
          </button>
        </div>
        {username != "juliusomo" ? (
          <div>
            <button className="flex items-center font-medium">
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
