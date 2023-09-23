import { useState } from "react";

function CompletedCV({ generalInfo, employmentInfo, educationInfo }) {
  return (
    <div>
      <section>
        <h2>ℹ️ General info</h2>
        <ul className="info-list">
          <li>
            {generalInfo.firstName} {generalInfo.lastName}
          </li>
          <li>{generalInfo.email}</li>
          <li>{generalInfo.phone}</li>
        </ul>
      </section>
      <section>
        <h2>💼 Work experience</h2>
        <ul className="info-list">
          <li>
            <b>{employmentInfo.companyName}</b>
          </li>
          <li>{employmentInfo.titleOfPosition}</li>
          <li>{employmentInfo.responsibilities}</li>
          <li>
            {" "}
            {employmentInfo.startDateOfEmployment}
            {" - "} {employmentInfo.endDateOfEmployment}
          </li>
        </ul>
      </section>
      <section>
        <h2>🎓 Education</h2>
        <ul className="info-list">
          <li>
            <b>{educationInfo.schoolName}</b>{" "}
          </li>
          <li>{educationInfo.titleOfStudy}</li>
          <li>
            {educationInfo.startDateOfStudy}
            {" - "}
            {educationInfo.endDateOfStudy}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CompletedCV;
