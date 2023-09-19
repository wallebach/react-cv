import { useState } from "react";

function Collapsible({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle}>toggle</button>
      {isOpen && children}
    </div>
  );
}

export default Collapsible;
