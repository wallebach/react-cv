import { useState } from "react";
import Collapsible from "./Collapsible";

function GeneralInformation() {
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [editButtonText, setEditButtonText] = useState("Edit");

  const [isSectionOpen, setIsSectionOpen] = useState(false);

  function handleFirstNameChange(e) {
    setInformation({ ...information, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setInformation({ ...information, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    setInformation({ ...information, email: e.target.value });
  }

  function handlePhoneChange(e) {
    setInformation({ ...information, phone: e.target.value });
  }

  function handleEditToggle() {
    setIsEdit(!isEdit);
    setEditButtonText(isEdit ? "Edit" : "Save");
  }

  function handleSectionOpen() {
    setIsSectionOpen(!isSectionOpen);
  }

  if (isEdit) {
    return (
      <>
        <Collapsible>
          <label>
            First name:
            <input
              value={information.firstName}
              onChange={handleFirstNameChange}
            />
          </label>{" "}
          <label>
            Last name:
            <input
              value={information.lastName}
              onChange={handleLastNameChange}
            />
          </label>{" "}
          <label>
            Email:
            <input value={information.email} onChange={handleEmailChange} />
          </label>{" "}
          <label>
            Phone:
            <input value={information.phone} onChange={handlePhoneChange} />
          </label>{" "}
          <button type="submit" onClick={handleEditToggle}>
            {editButtonText}
          </button>
        </Collapsible>
      </>
    );
  }

  return (
    <>
      <Collapsible>
        <label>
          First name:
          <input value={information.firstName} readOnly={isEdit} />
        </label>{" "}
        <label>
          Last name:
          <input value={information.lastName} readOnly={isEdit} />
        </label>{" "}
        <label>
          Email:
          <input value={information.email} readOnly={isEdit} />
        </label>{" "}
        <label>
          Phone:
          <input value={information.phone} readOnly={isEdit} />
        </label>{" "}
        <button type="submit" onClick={handleEditToggle}>
          {editButtonText}
        </button>
      </Collapsible>
    </>
  );
}

export default GeneralInformation;
