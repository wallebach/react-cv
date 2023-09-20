import { useState } from "react";

function CompletedCV({ generalInfo, employmentInfo, educationInfo }) {
  return (
    <div>
      <h2>General information</h2>
      {generalInfo.firstName}
      <br />
      {generalInfo.lastName}
      <br />
      {generalInfo.email}
      <br />
      {generalInfo.phone}
      <br />
      <h2>Work experience</h2>
      {employmentInfo.companyName}
      <br />
      {employmentInfo.titleOfPosition}
      <br />
      {employmentInfo.responsibilities}
      <br />
      {employmentInfo.startDateOfEmployment}
      <br />
      {employmentInfo.endDateOfEmployment}
      <h2>Education</h2>
      {educationInfo.schoolName}
      <br />
      {educationInfo.titleOfStudy}
      <br />
      {educationInfo.startDateOfStudy}
      <br />
      {educationInfo.endDateOfStudy}
    </div>
  );
}

export default CompletedCV;
