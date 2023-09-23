import { useState } from "react";

function EmploymentInfo({
  info,
  setInfo,
  lastInfo,
  setLastInfo,
  isEdit,
  setIsEdit,
}) {
  const [editButtonText, setEditButtonText] = useState("Edit");

  function handleCompanyNameChange(e) {
    setInfo({ ...info, companyName: e.target.value });
  }

  function handleTitleOfPosition(e) {
    setInfo({ ...info, titleOfPosition: e.target.value });
  }

  function handleResponsibilities(e) {
    setInfo({ ...info, responsibilities: e.target.value });
  }

  function handleStartDateOfEmployment(e) {
    setInfo({ ...info, startDateOfEmployment: e.target.value });
  }

  function handleEndDateOfEmployment(e) {
    setInfo({ ...info, endDateOfEmployment: e.target.value });
  }

  function handleEditToggle() {
    isEdit ? setLastInfo({ ...info }) : setLastInfo({ ...lastInfo });
    setIsEdit(!isEdit);
    setEditButtonText(isEdit ? "Edit" : "Save");
  }

  if (isEdit) {
    return (
      <>
        <h1 class="edit-section-header">Work experience</h1>
        <form>
          <ul class="info-list">
            <li>
              <label>
                Company name:
                <input
                  type="text"
                  value={info.companyName}
                  onChange={handleCompanyNameChange}
                />
              </label>
            </li>
            <li>
              <label>
                Position:
                <input
                  type="text"
                  value={info.titleOfPosition}
                  onChange={handleTitleOfPosition}
                />
              </label>
            </li>
            <li>
              <label>
                Responsibilities:
                <input
                  type="text"
                  value={info.responsibilities}
                  onChange={handleResponsibilities}
                />
              </label>
            </li>
            <li>
              <label>
                Start date:
                <input
                  type="text"
                  value={info.startDateOfEmployment}
                  onChange={handleStartDateOfEmployment}
                />
              </label>
            </li>
            <li>
              <label>
                End date:
                <input
                  type="text"
                  value={info.endDateOfEmployment}
                  onChange={handleEndDateOfEmployment}
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
      <h1 class="edit-section-header">Work experience</h1>
      <ul class="info-list">
        <li>
          <label>
            Company name:
            <input type="text" value={info.companyName} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Position:
            <input type="text" value={info.titleOfPosition} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Responsibilities:
            <input
              type="text"
              value={info.responsibilities}
              readOnly={isEdit}
            />
          </label>
        </li>
        <li>
          <label>
            Start date:
            <input
              type="text"
              value={info.startDateOfEmployment}
              readOnly={isEdit}
            />
          </label>
        </li>
        <li>
          <label>
            End date:
            <input
              type="text"
              value={info.endDateOfEmployment}
              readOnly={isEdit}
            />
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

export default EmploymentInfo;
