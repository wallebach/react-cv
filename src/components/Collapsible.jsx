import { useState } from "react";

function Collapsible({ children, sectionName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle}>{sectionName}</button>
      {isOpen && children}
    </div>
  );
}

export default Collapsible;
