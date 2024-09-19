import React from "react";

interface PromptProps {
  directory?: string;
  branch?: boolean;
  content: string;
}

const Prompt = ({ directory, branch = false, content }: PromptProps) => {
  return (
    <p>
      <span className="text-blue-800 font-semibold">
        ~/shobhit-singh{directory}
        <span className="text-success">{branch && " (main)"}</span> $
      </span>{" "}
      {content}
    </p>
  );
};

export default Prompt;
