import PropTypes from "prop-types";
import { get } from "lodash";
import { format } from "date-fns";
import { SUSS_LOGO } from "../common/images";
import * as consts from "../common/transcripStyle";
import * as functions from "../common/functions"

const engLocale = require("date-fns/locale/en");

const Template = ({ certificate }) => {
  // Declare what will be needed in the Transcript
  const transcriptData = get(certificate, "transcript", []);
  const recipientName = get(certificate, "recipient.name").toUpperCase();
  const recipientAdd = get(certificate, "recipient.address").toUpperCase();
  const recipientAdd2 = get(certificate, "recipient.address2").toUpperCase();
  const postalCode = get(certificate, "recipient.postalCode");

  const recipientNRIC = get(certificate, "recipient.nric");
  const issuedOn = format(get(certificate, "issuedOn"), "DD MMMM YYYY", { locale: engLocale });
  const studentId = get(certificate, "recipient.studentId");

  const creditRecog = get(certificate, "additionalData.numOfCreditRecognition");
  const creditExempted = get(certificate, "additionalData.numOfCreditExempted");

  const totalCreditUnits = get(certificate, "additionalData.totalCreditUnits");
  const cGPA = get(certificate, "additionalData.cgpa");

  const degreeType = get(certificate, "additionalData.degreeType");
  const degreeClass = get(certificate, "additionalData.degreeClass");
  const confermentDate = get(certificate, "additionalData.dateOfConferment");

  const signature = get(certificate, "additionalData.signatories.0.signature");
  const position = get(certificate, "additionalData.signatories.0.position");

  // Rendering an array of transcript data
  const transcriptSection = transcriptData.map((t, i) => (
    <tr key={i}>
      <td>{t.year}</td>
      <td style={consts.centerTransData}>{t.semester}</td>
      <td>{t.courseCode}</td>
      <td>{t.name}</td>
      <td style={consts.centerTransData}>{t.creditUnits}</td>
      <td style={consts.centerTransData}>{t.result}</td>
      <td style={consts.centerTransData}>{t.gradePoint}</td>
    </tr>
  ));

  return (
    <div className="container" style={consts.containerStyle}>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img src={SUSS_LOGO} style={consts.logoStyle} />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex justify-content-center">
          <h1 style={consts.officialTransStyle}>OFFICIAL TRANSCRIPT</h1>
        </div>
      </div>

      <div className="row" style={consts.topBuffer}>
        <div className="col">
          {recipientName} <br />
          {recipientAdd} <br />
          {// Only display recipientAdd2 when it is not empty.
            recipientAdd2 !== "" && (recipientAdd2)} <br />
          SINGAPORE {postalCode} <br />
        </div>
      </div>

      <div className="row" style={consts.topBuffer}>
        <div className="col">
          <table className="w-120">
            <tbody>
              <tr>
                <th valign="top" style={consts.headerWidth}>Name</th>
                <td width="52%">: {recipientName}</td>
                <th valign="top" style={consts.headerWidth}>NRIC/FIN/PP No.</th>
                <td valign="top">: {recipientNRIC}</td>
              </tr>
              <tr>
                <th valign="top" style={consts.headerWidth}>Personal Identifier</th>
                <td valign="top">: {studentId}</td>
                <th style={consts.headerWidth}>Date of Issue</th>
                <td style={consts.dateStyle}>
                  :{" "}
                  {issuedOn}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row" style={consts.topBuffer}>
        <div className="col">
          <p>
            This transcript confirms that the student named above has
            succesfully completed the listed courses leading to the
            qualification shown below. For an explanation of the terms and
            symbols used, please see the other side of this transcript.
          </p>
        </div>
      </div>

      {transcriptData !== [] && (
        <div className="row">
          <div className="col">
            <table className="w-100">
              <tbody>
                <tr>
                  <th>Year</th>
                  <th style={consts.centerTransData}>Semester</th>
                  <th>Course</th>
                  <th>Title</th>
                  <th style={consts.centerTransData}>Credit Units</th>
                  <th style={consts.centerTransData}>Result</th>
                  <th style={consts.centerTransData}>Grade Point</th>
                </tr>

                {transcriptSection}

                {// Only display creditExempted when the field is in the JSON/Opencert file
                  creditExempted !== undefined && (
                    <tr>
                      <td style={consts.boldLabels} colSpan="4">
                        Credit Exemption:{" "}
                      </td>
                      <td style={consts.centerTransData}>
                        <b>{creditExempted}</b>
                      </td>
                    </tr>
                  )}

                {// Only display creditRecog when the field is in the JSON/Opencert file
                  creditRecog !== undefined && (
                    <tr>
                      <td style={consts.boldLabels} colSpan="4">
                        Credit Recognition taken from approved institutions:{" "}
                      </td>
                      <td style={consts.centerTransData}>
                        <b>{creditRecog}</b>
                      </td>
                    </tr>
                  )}

                <tr>
                  <td style={consts.boldLabels} colSpan="4">
                    Total number of credit units counted towards this award:{" "}
                  </td>
                  <td style={consts.centerTransData}>
                    <b>{totalCreditUnits}</b>
                  </td>
                </tr>

                <tr>
                  <td style={consts.boldLabels} colSpan="6">
                    Culmulative Grade Point Average:{" "}
                  </td>
                  <td style={consts.centerTransData}>
                    <b>{cGPA}</b>
                  </td>
                </tr>

                {functions.displayHexSectionMod(certificate.transcript)}
                {functions.displayStarSectionMod(certificate.transcript)}

                <tr>
                  <td colSpan="7">
                    <b>Degree Conferred By:</b> Singapore University of Social
                    Science{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-4" style={consts.boldLabels}>
          Title
        </div>
        <div className="col-4" style={consts.boldLabels}>
          Classification
        </div>
        <div className="col-4" style={consts.boldLabels}>
          Date of Conferment
        </div>
      </div>

      <div className="row">
        <div className="col-4">{degreeType}</div>
        <div className="col-4">
          {degreeClass}
        </div>
        <div className="col-4">
          {confermentDate}
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <img src={signature} />
          <hr />
          <div> {position} </div>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          --------------- End of Transcript ---------------
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default Template;
