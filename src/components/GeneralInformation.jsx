import { useState } from "react";
import Collapsible from "./Collapsible";

function GeneralInfo({
  info,
  setInfo,
  lastInfo,
  setLastInfo,
  isEdit,
  setIsEdit,
}) {
  const [editButtonText, setEditButtonText] = useState("Edit");

  function handleFirstNameChange(e) {
    setInfo({ ...info, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setInfo({ ...info, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    setInfo({ ...info, email: e.target.value });
  }

  function handlePhoneChange(e) {
    setInfo({ ...info, phone: e.target.value });
  }

  function handleEditToggle() {
    isEdit ? setLastInfo({ ...info }) : setLastInfo({ ...lastInfo });
    setIsEdit(!isEdit);
    setEditButtonText(isEdit ? "Edit" : "Save");
  }

  if (isEdit) {
    return (
      <>
        <Collapsible sectionName="General info">
          <label>
            First name:
            <input value={info.firstName} onChange={handleFirstNameChange} />
          </label>{" "}
          <label>
            Last name:
            <input value={info.lastName} onChange={handleLastNameChange} />
          </label>{" "}
          <label>
            Email:
            <input value={info.email} onChange={handleEmailChange} />
          </label>{" "}
          <label>
            Phone:
            <input value={info.phone} onChange={handlePhoneChange} />
          </label>{" "}
          <button type="submit" onClick={() => handleEditToggle(isEdit)}>
            {editButtonText}
          </button>
        </Collapsible>
      </>
    );
  }

  return (
    <>
      <Collapsible sectionName="General info">
        <label>
          First name:
          <input value={info.firstName} readOnly={isEdit} />
        </label>{" "}
        <label>
          Last name:
          <input value={info.lastName} readOnly={isEdit} />
        </label>{" "}
        <label>
          Email:
          <input value={info.email} readOnly={isEdit} />
        </label>{" "}
        <label>
          Phone:
          <input value={info.phone} readOnly={isEdit} />
        </label>{" "}
        <button type="submit" onClick={() => handleEditToggle(isEdit)}>
          {editButtonText}
        </button>
      </Collapsible>
    </>
  );
}

export default GeneralInfo;
