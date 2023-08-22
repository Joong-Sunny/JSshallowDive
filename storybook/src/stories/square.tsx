import {useEffect, useState} from 'react';

const White = () => {
  const [drawing, setIsDrawing] = useState(false);
  const [anchor, setAnchor] = useState({x: 0, y: 0});
  const [box, setBox] = useState({x: 0, y: 0, width: 0, height: 0});


  const [isShiftPressed, setIsShiftPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'Shift') setIsShiftPressed(true);
    };

    const handleKeyUp = (e: any) => {
      if (e.key === 'Shift') setIsShiftPressed(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      console.log("종료됨")
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);


  const handleMouseDown = (e: any) => {
    if (!isShiftPressed) return;
    setAnchor({x: e.clientX, y: e.clientY})
    setIsDrawing(true);
  };

  const handleMouseMove = (e: any) => {
    if (!drawing || !isShiftPressed) return;
    const width = anchor.x - e.clientX;
    const height = anchor.y - e.clientY;

    const x = width >= 0 ? e.clientX : anchor.x;
    const y = height >= 0 ? e.clientY : anchor.y;

    setBox({x, y, width, height});

  }

  const handleMouseUp = () => {
    if (!isShiftPressed) return;
    setBox({x: 0, y: 0, width: 0, height: 0})
    setIsDrawing(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "25%",
        top: "25%",
        width: "50%",
        height: "50%",
        backgroundColor: "red",
        cursor: "crosshair"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {drawing &&
        <div
          style={{
            position: "fixed",
            left: box.x - box.width > 0 ? box.x : box.x - box.width,
            top: box.y - box.height > 0 ? box.y : box.y - box.height,
            width: Math.abs(box.width),
            height: Math.abs(box.height),
            backgroundColor: "blue"
          }}
        />
      }
    </div>
  );
}

export default White;
