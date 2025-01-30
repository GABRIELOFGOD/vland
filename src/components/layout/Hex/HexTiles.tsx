// "use client";

// import React, { useState, useCallback, useRef } from "react";
// import { useSpring, animated } from "react-spring";
// import { HexGrid, Layout, Hexagon } from "react-hexgrid";

// const AnimatedHexGrid = animated(HexGrid);

// const HexGridComponent = () => {
//   const [{ x, y, width, height }, setSpring] = useSpring(() => ({
//     x: 120,
//     y: 0,
//     width: 100,
//     height: 100,
//     config: { tension: 200, friction: 20 },
//   }));

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [hexHovered, setHexHovered] = useState<{ q: number; r: number } | null>(null);
//   const [selectedHex, setSelectedHex] = useState<{ q: number; r: number } | null>(null);

//   // Simulating sold properties from backend
//   const soldProperties = new Set(["2-3", "5-8", "10-15"]); // Example sold properties

//   // Handle Zoom with Animation
//   const handleZoom = (event: React.WheelEvent) => {
//     event.preventDefault();
//     const zoomFactor = event.deltaY > 0 ? 1.1 : 0.9;
//     setSpring.start({
//       width: Math.max(50, Math.min(300, width.get() * zoomFactor)),
//       height: Math.max(50, Math.min(300, height.get() * zoomFactor)),
//     });
//   };

//   // Handle Drag Panning
//   const handleMouseDown = () => setIsDragging(true);
//   const handleMouseUp = () => setIsDragging(false);
//   const handleMouseMove = (event: React.MouseEvent) => {
//     if (!isDragging) return;
//     setSpring.start({
//       x: x.get() - event.movementX * (width.get() / 200),
//       y: y.get() - event.movementY * (height.get() / 200),
//     });
//   };

//   // Reset View to Default
//   const resetView = () => {
//     setSpring.start({ x: 120, y: 0, width: 100, height: 100 });
//     setSelectedHex(null);
//   };

//   // Handle Hex Click
//   const handleHexClick = (q: number, r: number) => {
//     const key = `${q}-${r}`;
//     if (soldProperties.has(key)) return; // Prevent click on sold properties
//     setSelectedHex(selectedHex?.q === q && selectedHex?.r === r ? null : { q, r });
//   };

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",
//         cursor: isDragging ? "grabbing" : "grab",
//         position: "relative",
//       }}
//       onWheel={handleZoom}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Reset Zoom Button */}
//       <button
//         onClick={resetView}
//         style={{
//           position: "absolute",
//           top: 10,
//           right: 10,
//           padding: "8px 12px",
//           background: "#5dd9d1",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//           zIndex: 10,
//         }}
//       >
//         Reset View
//       </button>

//       {/* Animated HexGrid */}
//       <AnimatedHexGrid
//         width="100%"
//         height="100%"
//         viewBox={x.to((xVal) => `${xVal} ${y.get()} ${width.get()} ${height.get()}`)}
//       >
//         <Layout size={{ x: 4, y: 4 }} flat={false} spacing={1.15} origin={{ x: 0, y: 0 }}>
//           {Array.from({ length: 10 }, (_, q) =>
//             Array.from({ length: 10 }, (_, r) => {
//               const key = `${q}-${r}`;
//               const isSold = soldProperties.has(key);
//               const isSelected = selectedHex?.q === q && selectedHex?.r === r;
//               const isHovered = hexHovered?.q === q && hexHovered?.r === r;

//               let fillColor = "gray"; // Default color
//               if (isSold) fillColor = "#ff4d4d"; // Red for sold
//               else if (isSelected) fillColor = "#008CBA"; // Blue for selected
//               else if (isHovered) fillColor = "lightblue"; // Hover color

//               return (
//                 <Hexagon
//                   key={key}
//                   q={q}
//                   r={r}
//                   s={-q - r}
//                   onClick={() => handleHexClick(q, r)}
//                   onMouseEnter={() => setHexHovered({ q, r })}
//                   onMouseLeave={() => setHexHovered(null)}
//                   fill={fillColor}
//                   style={{ pointerEvents: isSold ? "none" : "auto" }} // Disable clicks on sold tiles
//                 />
//               );
//             })
//           )}
//         </Layout>
//       </AnimatedHexGrid>
//     </div>
//   );
// };

// export default HexGridComponent;

"use client";

import React, { useState, useCallback } from "react";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";

const HexGridComponent = () => {
  const [viewBox, setViewBox] = useState({ x: 120, y: 0, width: 100, height: 100 });

  const handleZoom = (event: React.WheelEvent) => {
    event.preventDefault();
    const zoomFactor = event.deltaY > 0 ? 1.1 : 0.9; // Zoom in or out
    setViewBox((prev) => ({
      ...prev,
      width: Math.max(50, Math.min(300, prev.width * zoomFactor)),
      height: Math.max(50, Math.min(300, prev.height * zoomFactor)),
    }));
  };

  const handlePan = useCallback((event: React.MouseEvent) => {
    if (event.buttons !== 1) return; // Only pan on left mouse click
    const { movementX, movementY } = event;
    setViewBox((prev) => ({
      ...prev,
      x: prev.x - movementX * (prev.width / 200),
      y: prev.y - movementY * (prev.height / 200),
    }));
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "hidden", cursor: "grab" }}
      onWheel={handleZoom}
      onMouseMove={handlePan}
    >
      <HexGrid width="100%" height="100%" viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}>
        <Layout size={{ x: 4, y: 4 }} flat={false} spacing={1.15} origin={{ x: 0, y: 0 }}>
          {Array.from({ length: 100 }, (_, q) =>
            Array.from({ length: 50 }, (_, r) => (
              <Hexagon key={`${q}-${r}`} q={q} r={r} s={-q - r} onClick={() => alert(`Hex clicked at: ${q}, ${r}`)} />
            ))
          )}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default HexGridComponent;
