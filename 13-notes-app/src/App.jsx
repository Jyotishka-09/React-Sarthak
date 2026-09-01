import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });
    settask(copyTask);

    console.log(title, details);

    settitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-8 md:px-10">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My Notes App
      </h1>

      <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* Form */}
        <form
          className="w-full md:w-1/2"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Create a Note</h2>

            <div className="flex w-full gap-5 flex-col">
              <input
                type="text"
                placeholder="Enter Notes Heading"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                className="px-5 w-full py-3.5 bg-zinc-800 border border-zinc-700 rounded-xl outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition"
              />

              <textarea
                placeholder="Write details"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
                className="px-5 w-full py-3.5 bg-zinc-800 border border-zinc-700 rounded-xl h-44 outline-none resize-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition"
              />

              <button className="bg-white w-full text-black px-5 py-3.5 rounded-xl font-semibold hover:bg-zinc-200 active:scale-[0.98] transition">
                Add Note
              </button>
            </div>
          </div>
        </form>

        {/* Notes */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-6">Your Notes</h1>

          <div className="flex flex-wrap gap-6 overflow-y-auto h-[60vh] p-2">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className="h-56 w-44 rounded-2xl bg-[url('https://png.pngtree.com/png-clipart/20230120/original/pngtree-beautiful-aesthetic-pastel-sticky-notes-png-image_8924368.png')] bg-cover bg-center text-black p-5 flex flex-col"
                >
                  <div className="flex-1 overflow-y-auto pr-1">
                    <h3 className="mt-6 text-center leading-tight text-xl font-bold wrap-break-words">
                      {elem.title}
                    </h3>

                    <p className="leading-tight font-medium text-gray-700 wrap-break-word">
                      {elem.details}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteNote(idx)}
                    className="bg-red-500 text-white rounded-lg py-2 mt-3 hover:bg-red-600 transition shrink-0"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
