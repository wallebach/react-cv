import { useState } from "react";
import Collapsible from "./Collapsible";

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
        <Collapsible sectionName="Education">
          <label>
            School name:
            <input value={info.schoolName} onChange={handleSchoolNameChange} />
          </label>{" "}
          <label>
            Title of study:
            <input value={info.titleOfStudy} onChange={handleTitleOfStudy} />
          </label>{" "}
          <label>
            Start date:
            <input
              value={info.startDateOfStudy}
              onChange={handleStartDateOfStudy}
            />
          </label>{" "}
          <label>
            End date:
            <input
              value={info.endDateOfStudy}
              onChange={handleEndDateOfStudy}
            />
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
      <Collapsible sectionName="Education">
        <label>
          School name:
          <input value={info.schoolName} readOnly={isEdit} />
        </label>{" "}
        <label>
          Title of study:
          <input value={info.titleOfStudy} readOnly={isEdit} />
        </label>{" "}
        <label>
          Start date:
          <input value={info.startDateOfStudy} readOnly={isEdit} />
        </label>{" "}
        <label>
          End date:
          <input value={info.endDateOfStudy} readOnly={isEdit} />
        </label>{" "}
        <button type="submit" onClick={() => handleEditToggle(isEdit)}>
          {editButtonText}
        </button>
      </Collapsible>
    </>
  );
}

export default EducationInfo;
