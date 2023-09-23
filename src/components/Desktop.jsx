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
      <div class="container">
        <header>
          <h1>Curriculum Vitae</h1>
        </header>
        <div class="panels">
          <section>
            <CompletedCV
              generalInfo={lastSavedGeneralData}
              employmentInfo={lastSavedEmploymentData}
              educationInfo={lastSavedEducationData}
            ></CompletedCV>
          </section>
        </div>
        <aside>
          <div class="edit-container">
            <section class="edit-section">
              <GeneralInfo
                info={generalData}
                setInfo={setGeneralData}
                lastInfo={lastSavedGeneralData}
                setLastInfo={setLastSavedGeneralData}
                isEdit={isEditGeneralInfo}
                setIsEdit={setIsEditGeneralInfo}
              ></GeneralInfo>
            </section>
            <section class="edit-section">
              <EmploymentInfo
                info={employmentData}
                setInfo={setEmploymentData}
                lastInfo={lastSavedEmploymentData}
                setLastInfo={setLastSavedEmploymentData}
                isEdit={isEditEmploymentData}
                setIsEdit={setIsEditEmploymentData}
              ></EmploymentInfo>
            </section>
            <section class="edit-section">
              <EducationInfo
                info={educationData}
                setInfo={setEducationData}
                lastInfo={lastSavedEducationData}
                setLastInfo={setLastSavedEducationData}
                isEdit={isEditEducationData}
                setIsEdit={setIsEditEducationData}
              ></EducationInfo>
            </section>
          </div>
        </aside>
        <footer>
          <a href="https://github.com/wallebach/react-cv">source code</a>
        </footer>
      </div>
    </>
  );
}

export default Desktop;
