import { useState } from "react";
import { DeleteAlert } from "./DeleteAlert";

export function Message({ data, handleScore, handleDelete, className }) {
  const { image, username } = data.user;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={className}>
      <div className="flex items-center">
        <div>
          <img className="w-8" src={image.png} alt="user image" />
        </div>
        <div>
          <span className="px-3 font-medium">{username}</span>
          {username == "juliusomo" && (
            <span className=" px-2 mr-3 bg-mBlue text-white">you</span>
          )}
        </div>
        <span className="text-gBlue">{data?.createdAt}</span>
      </div>
      <div className="py-4 text-gBlue">
        {data?.replyingTo && (
          <span className="text-mBlue font-medium">@{data?.replyingTo} </span>
        )}
        {data?.content}
      </div>
      <div className="flex justify-between items-center pt-2">
        <div className="rounded-lg border flex items-center">
          <button className="px-3" onClick={() => handleScore(true, data)}>
            <img src="./images/icon-plus.svg" alt="icon-plus" />
          </button>
          <span className="px-3 p-1 font-medium text-mBlue">{data?.score}</span>
          <button className="px-3" onClick={() => handleScore(false, data)}>
            <img src="./images/icon-minus.svg" alt="icon-minus" />
          </button>
        </div>
        {username != "juliusomo" ? (
          <div>
            <button className="flex items-center font-medium text-mBlue">
              <img
                className="px-2"
                src="./images/icon-reply.svg"
                alt="icon-reply"
              />
              Reply
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            {showModal && (
              <DeleteAlert
                data={data}
                setShowModal={setShowModal}
                handleDelete={handleDelete}
              />
            )}
            <button
              className="flex items-center text-sRed"
              onClick={() => setShowModal(true)}
            >
              <img
                className="px-2"
                src="./images/icon-delete.svg"
                alt="icon-delete"
              />
              Delete
            </button>
            <button className="flex items-center text-mBlue">
              <img
                className="px-2"
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
