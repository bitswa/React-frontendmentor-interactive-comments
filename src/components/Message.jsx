export function Message({ data }) {
  const { image, username } = data.user;
  return (
    <div>
      <div>
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
      <div>
        <div>
          <button>+</button>
          {data?.score}
          <button>-</button>
        </div>
        {username != "juliusomo" ? (
          <div>
            <button>
              <img src="" alt="" />
              Reply
            </button>
          </div>
        ) : (
          <div>
            <button>
              <img src="" alt="" />
              Delete
            </button>
            <button>
              <img src="" alt="" />
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
