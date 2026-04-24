import React from "react";

export default React.memo(function InfoCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  console.log("Rendering InfoCard:", label);

  return (
    <div style={{ border: "1px solid gray", padding: 20, margin: 10 }}>
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
});