import { useEffect, useRef, useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(null); // Track the index of the note being dragged
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 }); // Offset when dragging starts
  const divRefs = useRef({}); // Store references to each note div

  // Add a new note with a random position
  const addValue = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const randomX = Math.floor(Math.random() * window.innerWidth * 0.8); // Random X within 80% of the window width
      const randomY = Math.floor(Math.random() * window.innerHeight * 0.8); // Random Y within 80% of the window height

      const newNote = { text: input, position: { x: randomX, y: randomY } }; // Initialize with random position
      const store = [...data, newNote];
      setData(store);
      setInput('');
      localStorage.setItem('note', JSON.stringify(store)); // Save to localStorage
    }
  };

  // Load stored notes from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('note'));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    }
  }, []);

  // Handle mouse down (start dragging)
  const handleMouseDown = (event, index) => {
    const divRef = divRefs.current[index];
    const rect = divRef.getBoundingClientRect();
    setIsDragging(true);
    setDraggingIndex(index);
    setStartOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // Handle mouse up (stop dragging and save the new position)
  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingIndex(null); // Reset dragging index after dragging
    // Save the updated position in localStorage after the drag ends
    localStorage.setItem('note', JSON.stringify(data));
  };

  // Handle dragging movement
  const handleMouseMove = (event) => {
    if (isDragging && draggingIndex !== null && divRefs.current[draggingIndex]) {
      const newX = event.clientX - startOffset.x;
      const newY = event.clientY - startOffset.y;

      // Update the position of the specific note being dragged
      const updatedData = data.map((note, index) =>
        index === draggingIndex
          ? { ...note, position: { x: newX, y: newY } }
          : note
      );
      setData(updatedData);
    }
  };

  // Attach the mousemove and mouseup event to the window for tracking the dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, draggingIndex]);

  return (
    <div className="w-screen h-screen grid place-content-center">
      <div>
        <input
          className="border-solid border-[1px] border-black outline-none mb-3 w-[300px] h-10 pl-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your notes"
        />
        <button className="p-2 bg-[#2ad12f] font-medium" onClick={addValue}>
          Add
        </button>
      </div>

      {data.map((note, index) => {
        const displayStyle = {
          position: 'absolute',
          left: `${note.position?.x ?? 0}px`,
          top: `${note.position?.y ?? 0}px`,
          cursor: 'grab',
        };

        return (
          <div
            key={index}
            style={displayStyle}
            ref={(el) => (divRefs.current[index] = el)} // Store the reference to each div
            onMouseDown={(e) => handleMouseDown(e, index)}
            className="w-[300px] h-auto p-2 border-solid border-[1px] border-black mb-3 flex text-center bg-[#f5d98c] font-medium"
          >
            <img
              className="w-7 h-7 mr-3"
              src="https://static.vecteezy.com/system/resources/previews/011/421/304/original/glossy-red-push-pin-png.png"
              alt="Push pin"
            />
            {note.text}
          </div>
        );
      })}
    </div>
  );
}

export default App;



