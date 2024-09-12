import React from "react";

// Define keyframes and styles directly in the component
const styles = {
  container: {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "2rem",
    textAlign: "center",
    margin: "2rem",
    color: "#fff",
    position: "relative",
    display: "inline-block",
  },
  text: {
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRight: "0.15em solid #333",
    animation: "typing 3.5s steps(30, end), blink 0.75s step-end infinite",
  },
  "@keyframes typing": {
    from: { width: "0" },
    to: { width: "100%" },
  },
  "@keyframes blink": {
    from: { borderColor: "transparent" },
    to: { borderColor: "transparent" },
    "50%": { borderColor: "#333" },
  },
};

const Blog = () => {
  return (
    <div style={styles.container}>
      <div style={styles.text}>C o m i n g S o o n!</div>
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes blink {
            from, to { border-color: transparent; }
            50% { border-color: #333; }
          }
        `}
      </style>
    </div>
  );
};

export default Blog;
