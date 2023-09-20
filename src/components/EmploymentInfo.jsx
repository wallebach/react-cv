import { useState } from "react";
import Collapsible from "./Collapsible";

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
        <Collapsible sectionName="Employment">
          <label>
            Company name:
            <input
              value={info.companyName}
              onChange={handleCompanyNameChange}
            />
          </label>{" "}
          <label>
            Position:
            <input
              value={info.titleOfPosition}
              onChange={handleTitleOfPosition}
            />
          </label>{" "}
          <label>
            Responsibilities:
            <input
              value={info.responsibilities}
              onChange={handleResponsibilities}
            />
          </label>{" "}
          <label>
            Start date:
            <input
              value={info.startDateOfEmployment}
              onChange={handleStartDateOfEmployment}
            />
          </label>{" "}
          <label>
            End date:
            <input
              value={info.endDateOfEmployment}
              onChange={handleEndDateOfEmployment}
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
      <Collapsible sectionName="Employment">
        <label>
          Company name:
          <input value={info.companyName} readOnly={isEdit} />
        </label>{" "}
        <label>
          Position:
          <input value={info.titleOfPosition} readOnly={isEdit} />
        </label>{" "}
        <label>
          Responsibilities:
          <input value={info.responsibilities} readOnly={isEdit} />
        </label>{" "}
        <label>
          Start date:
          <input value={info.startDateOfEmployment} readOnly={isEdit} />
        </label>{" "}
        <label>
          End date:
          <input value={info.endDateOfEmployment} readOnly={isEdit} />
        </label>{" "}
        <button type="submit" onClick={() => handleEditToggle(isEdit)}>
          {editButtonText}
        </button>
      </Collapsible>
    </>
  );
}

export default EmploymentInfo;
