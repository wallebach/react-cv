import { useState } from "react";

function EducationInfo({
  info,
  setInfo,
  lastInfo,
  setLastInfo,
  isEdit,
  setIsEdit,
}) {
  const [editButtonText, setEditButtonText] = useState("Edit");

  function handleSchoolNameChange(e) {
    setInfo({ ...info, schoolName: e.target.value });
  }

  function handleTitleOfStudy(e) {
    setInfo({ ...info, titleOfStudy: e.target.value });
  }

  function handleStartDateOfStudy(e) {
    setInfo({ ...info, startDateOfStudy: e.target.value });
  }

  function handleEndDateOfStudy(e) {
    setInfo({ ...info, endDateOfStudy: e.target.value });
  }

  function handleEditToggle() {
    isEdit ? setLastInfo({ ...info }) : setLastInfo({ ...lastInfo });
    setIsEdit(!isEdit);
    setEditButtonText(isEdit ? "Edit" : "Save");
  }

  if (isEdit) {
    return (
      <>
        <h1 class="edit-section-header">Education</h1>
        <form>
          <ul class="info-list">
            <li>
              <label>
                School name:
                <input
                  type="text"
                  value={info.schoolName}
                  onChange={handleSchoolNameChange}
                />
              </label>
            </li>
            <li>
              <label>
                Title of study:
                <input
                  type="text"
                  value={info.titleOfStudy}
                  onChange={handleTitleOfStudy}
                />
              </label>
            </li>
            <li>
              <label>
                Start date:
                <input
                  type="text"
                  value={info.startDateOfStudy}
                  onChange={handleStartDateOfStudy}
                />
              </label>
            </li>
            <li>
              <label>
                End date:
                <input
                  type="text"
                  value={info.endDateOfStudy}
                  onChange={handleEndDateOfStudy}
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
      <h1 class="edit-section-header">Education</h1>
      <ul class="info-list">
        <li>
          <label>
            School name:
            <input type="text" value={info.schoolName} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Title of study:
            <input type="text" value={info.titleOfStudy} readOnly={isEdit} />
          </label>
        </li>
        <li>
          <label>
            Start date:
            <input
              type="text"
              value={info.startDateOfStudy}
              readOnly={isEdit}
            />
          </label>
        </li>
        <li>
          <label>
            End date:
            <input type="text" value={info.endDateOfStudy} readOnly={isEdit} />
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

export default EducationInfo;
