import { useState } from "react";

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
        <h1 class="edit-section-header">General information</h1>
        <form>
          <ul class="info-list">
            <li>
              <label>
                First name:
                <input
                  type="text"
                  value={info.firstName}
                  onChange={handleFirstNameChange}
                />
              </label>
            </li>
            <li>
              <label>
                Last name:
                <input
                  type="text"
                  value={info.lastName}
                  onChange={handleLastNameChange}
                />
              </label>
            </li>
            <li>
              <label>
                Email:
                <input
                  type="text"
                  value={info.email}
                  onChange={handleEmailChange}
                />
              </label>
            </li>
            <li>
              <label>
                Phone:
                <input
                  type="text"
                  value={info.phone}
                  onChange={handlePhoneChange}
                />
              </label>
            </li>
            <li>
              <button type="submit" onClick={() => handleEditToggle(isEdit)}>
                {editButtonText}
              </button>
            </li>
          </ul>
        </form>
      </>
    );
  }

  return (
    <>
      <h1 class="edit-section-header">General information</h1>
      <ul class="info-list">
        <li>
          <label>
            First name:
            <input type="text" value={info.firstName} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Last name:
            <input type="text" value={info.lastName} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Email:
            <input type="text" value={info.email} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Phone:
            <input type="text" value={info.phone} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <button type="submit" onClick={() => handleEditToggle(isEdit)}>
            {editButtonText}
          </button>
        </li>
      </ul>
    </>
  );
}

export default GeneralInfo;
