import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import CompletedCV from "./CompletedCV";
import EducationInfo from "./EducationInfo";
import EmploymentInfo from "./EmploymentInfo";

function Desktop() {
  // States for general info
  const [generalData, setGeneralData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com",
    phone: "+1 222 333 444",
  });

  const [lastSavedGeneralData, setLastSavedGeneralData] = useState({
    ...generalData,
  });
  const [isEditGeneralInfo, setIsEditGeneralInfo] = useState(false);

  // States for education info
  const [educationData, setEducationData] = useState({
    schoolName: "Awesome University",
    titleOfStudy: "Computer Science",
    startDateOfStudy: "2010",
    endDateOfStudy: "2014",
  });

  const [lastSavedEducationData, setLastSavedEducationData] = useState({
    ...educationData,
  });

  const [isEditEducationData, setIsEditEducationData] = useState(false);

  // States for work info
  const [employmentData, setEmploymentData] = useState({
    companyName: "Digital Corp Ltd.",
    titleOfPosition: "Software Developer",
    responsibilities: "Building cool stuff",
    startDateOfEmployment: "2015",
    endDateOfEmployment: "current",
  });

  const [lastSavedEmploymentData, setLastSavedEmploymentData] = useState({
    ...employmentData,
  });

  const [isEditEmploymentData, setIsEditEmploymentData] = useState(false);

  function loadSample(e) {
    setGeneralData({
      firstName: "James",
      lastName: "Jones",
      email: "james@example.com",
      phone: "+1 222 333 444",
    });
  }

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
        <footer></footer>
      </div>
    </>
  );
}

export default Desktop;
