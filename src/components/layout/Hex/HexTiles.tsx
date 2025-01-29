"use client"

import React from "react";
import { HexGrid, Layout, Hexagon } from "react-hexgrid";

const HexGridComponent = () => {
  const handleClick = (hex: {q: number, r: number}) => {
    alert(`Hex clicked at: ${hex.q}, ${hex.r}`);
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <HexGrid width="100%" height="100%" viewBox="120 0 100 100">
        <Layout size={{ x: 2, y: 2 }} flat={false} spacing={1.2} origin={{ x: 0, y: 0 }}>
          {Array.from({ length: 100 }, (_, q) =>
            Array.from({ length: 50 }, (_, r) => (
              <Hexagon key={`${q}-${r}`} q={q} r={r} s={-q - r} onClick={() => handleClick({ q, r })}>
                {/* <Text>{`${q}, ${r}`}</Text> */}
              </Hexagon>
            ))
          )}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default HexGridComponent;
