export function DeleteAlert({data,  handleDelete, setShowModal }) {
  return (
    <div className="w-[90vw] shadow-md bg-white rounded-lg p-6 px-5 absolute left-0 top-0 translate-x-[5vw] translate-y-[50vh]">
      <h1 className="text-lg font-bold">Delete comment</h1>
      <p className="py-3">
        Are you sure you want delete this comment? This will remove the comment
        and can't be undone.
      </p>
      <span className="flex gap-2 text-white font-sm">
        <button className="p-3 w-[50%] rounded-md bg-gray-500" onClick={() => setShowModal(false)}>NO, CANCEL</button>
        <button className="p-3 w-[50%] rounded-md bg-red-600" onClick={() => handleDelete(data)}>YES, DELETE</button>
      </span>
    </div>
  );
}
