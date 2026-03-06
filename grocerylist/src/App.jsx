import { useState } from "react";

function App() {

  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item === "") return;

    const newList = [...list, item];
    setList(newList);
    setItem("");
  };

  const deleteItem = (index) => {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-4">Grocery List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add item..."
          className="border p-2 rounded"
        />

        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul className="w-64">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex justify-between bg-white p-2 mb-2 rounded"
          >
            {item}

            <button
              onClick={() => deleteItem(index)}
              className="text-red-500"
            >
              X
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;