import React from "react";

interface ResultsProps {
  info: any;
}

export const Results: React.FC<ResultsProps> = ({ info }) => {
  if (!info) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h3>Results:</h3>

      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};
