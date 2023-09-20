import { useState } from "react";
import GeneralInfo from "./GeneralInformation";
import CompletedCV from "./CompletedCV";
import EducationInfo from "./EducationInfo";
import EmploymentInfo from "./EmploymentInfo";

function Desktop() {
  // States for general info
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [lastSavedGeneralData, setLastSavedGeneralData] = useState({
    ...generalData,
  });
  const [isEditGeneralInfo, setIsEditGeneralInfo] = useState(false);

  // States for education info
  const [educationData, setEducationData] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDateOfStudy: "",
    endDateOfStudy: "",
  });

  const [lastSavedEducationData, setLastSavedEducationData] = useState({
    ...educationData,
  });

  const [isEditEducationData, setIsEditEducationData] = useState(false);

  // States for work info
  const [employmentData, setEmploymentData] = useState({
    companyName: "",
    titleOfPosition: "",
    responsibilities: "",
    startDateOfEmployment: "",
    endDateOfEmployment: "",
  });

  const [lastSavedEmploymentData, setLastSavedEmploymentData] = useState({
    ...employmentData,
  });

  const [isEditEmploymentData, setIsEditEmploymentData] = useState(false);

  return (
    <>
      <GeneralInfo
        info={generalData}
        setInfo={setGeneralData}
        lastInfo={lastSavedGeneralData}
        setLastInfo={setLastSavedGeneralData}
        isEdit={isEditGeneralInfo}
        setIsEdit={setIsEditGeneralInfo}
      ></GeneralInfo>
      <EmploymentInfo
        info={employmentData}
        setInfo={setEmploymentData}
        lastInfo={lastSavedEmploymentData}
        setLastInfo={setLastSavedEmploymentData}
        isEdit={isEditEmploymentData}
        setIsEdit={setIsEditEmploymentData}
      ></EmploymentInfo>
      <EducationInfo
        info={educationData}
        setInfo={setEducationData}
        lastInfo={lastSavedEducationData}
        setLastInfo={setLastSavedEducationData}
        isEdit={isEditEducationData}
        setIsEdit={setIsEditEducationData}
      ></EducationInfo>
      <CompletedCV
        generalInfo={lastSavedGeneralData}
        employmentInfo={lastSavedEmploymentData}
        educationInfo={lastSavedEducationData}
      ></CompletedCV>
    </>
  );
}

export default Desktop;
