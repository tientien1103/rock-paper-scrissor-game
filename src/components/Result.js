import React from "react";

// props (properties)
function Result(props) {
  const { user1GameItem, user2GameItem, result } = props;

  return (
    <div>
      <h1 className="result-header">Result</h1>
      <div className="result-wrapper">
        {/* conditional rendering */}
        {user1GameItem && <span>{user1GameItem.name}</span>}
        <span className="result">{result}</span>
        {user2GameItem && <span>{user2GameItem.name}</span>}
      </div>
    </div>
  );
}

export default Result;
