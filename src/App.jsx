import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (!item.trim()) return; 
    setList([...list, item]);
    setItem("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <h1 className="text-4xl font-bold mb-6">Grocery List</h1>

      <div className="flex gap-3 mb-6">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter an item..."
          className="border px-3 py-2 rounded-lg shadow-sm"
        />

        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          +
        </button>
      </div>

      <ul className="w-64 space-y-2">
        {list.map((entry, index) => (
          <li
             key={index}
            className="bg-white p-3 rounded-lg shadow flex justify-between items-center"
          >
            <span>{entry}</span>
  
            <button
             onClick={() => setList(list.filter((_, i) => i !== index))}
            className="text-red-500 hover:text-red-700"
            >
               x
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;