import PropTypes from "prop-types";
import * as consts from "../common/transcripStyle"

const transInfo = () => (
  <div className="container" style={consts.transContainerStyle}>
    <div className="row">
      <div className="col d-flex justify-content-center">
        <h1 style={consts.boldLabels}>Transcript Information</h1>
      </div>
    </div>

    <div className="row" style={consts.topBuffer}>
      <div className="col">
        <h2 style={consts.boldLabels}>Credit units and levels</h2>
        <p>
          The University uses a credit unit (cu) system. The credit unit
          requirements are:
        </p>

        <table className="w-100" border="1">
          <tbody>
            <tr>
              <td />
              <td style={consts.tdStyleHeader}>
                <p>
                  <b>Basic Degree</b>
                  <br />
                  (Stduents admitted prior 2007)
                </p>
              </td>
              <td style={consts.tdStyleHeader}>
                <p>
                  <b>Basic Degree</b>
                  <br />
                  (Stduents admitted from 2007)
                </p>
              </td>
              <td style={consts.tdStyleHeader}>
                <p>
                  <b>Honours Degree</b>
                  <br />
                  (Stduents admitted prior 2007)
                </p>
              </td>
              <td style={consts.tdStyleHeader}>
                <p>
                  <b>Honours Degree</b>
                  <br />
                  (Stduents admitted from 2007)
                </p>
              </td>
            </tr>

            <tr>
              <td style={consts.tdStyle}>
                <b>Full time programmes</b>
              </td>
              <td style={consts.tdStyle}>NA</td>
              <td style={consts.tdStyle}>NA</td>
              <td style={consts.tdStyle}>NA</td>
              <td style={consts.tdStyle}>200 cu</td>
            </tr>

            <tr>
              <td style={consts.tdStyle}>
                <b>Part time programmes</b>
              </td>
              <td style={consts.tdStyle}>120 cu</td>
              <td style={consts.tdStyle}>130 cu</td>
              <td style={consts.tdStyle}>160 cu</td>
              <td style={consts.tdStyle}>170 cu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="row" style={consts.topBuffer}>
      <div className="col">
        <h2 style={consts.boldLabels}>Total number of units</h2>
        <p>
          This includes all the credit units that have been counted towards this
          qualification, including any credit transfer, subordinate award, and
          collaborative courses from approved institutions.
        </p>
      </div>
    </div>

    <div className="row" style={consts.topBuffer}>
      <div className="col">
        <h2 style={consts.boldLabels}>Grade Point Average</h2>
        <p>
          The GPA is the average grade point of all courses taken by the
          student.
        </p>
      </div>
    </div>

    <div className="row" style={consts.topBuffer}>
      <div className="col">
        <h2 style={consts.boldLabels}>Grade Legend</h2>
        <table className="w-100" border="1">
          <tbody>
            <tr>
              <th colSpan="2" style={consts.tdStyle}>
                <center>Grading System</center>
              </th>
              <th className="text-center" style={consts.tdStyle}>
                Grade Point
              </th>
            </tr>
            <tr>
              <td width="50%" style={consts.tdStyle}>85 - 100 marks</td>
              <td width="25%" className="text-center" style={consts.tdStyle}>
                A+
              </td>
              <td width="25%" className="text-center" style={consts.tdStyle}>
                5.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>80 - 84 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                A
              </td>
              <td className="text-center" style={consts.tdStyle}>
                5.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>75 - 79 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                A-
              </td>

              <td className="text-center" style={consts.tdStyle}>
                4.5
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>70 - 74 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                B+
              </td>
              <td className="text-center" style={consts.tdStyle}>
                4.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>65 - 69 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                B
              </td>
              <td className="text-center" style={consts.tdStyle}>
                3.5
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>60 - 64 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                B-
              </td>
              <td className="text-center" style={consts.tdStyle}>
                3.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>55 - 59 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                C+
              </td>
              <td className="text-center" style={consts.tdStyle}>
                2.5
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>50 - 54 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                C
              </td>
              <td className="text-center" style={consts.tdStyle}>
                2.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>45 - 49 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                D+
              </td>
              <td className="text-center" style={consts.tdStyle}>
                1.5
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>40 - 44 marks</td>
              <td className="text-center" style={consts.tdStyle}>
                D
              </td>
              <td className="text-center" style={consts.tdStyle}>
                1.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}> {"<"} 40 marks/Fail</td>
              <td className="text-center" style={consts.tdStyle}>
                F
              </td>
              <td className="text-center" style={consts.tdStyle}>
                0.0
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>Withdrawal</td>
              <td className="text-center" style={consts.tdStyle}>
                W
              </td>
              <td className="text-center" style={consts.tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>Pass with Distinction</td>
              <td className="text-center" style={consts.tdStyle}>
                PD
              </td>
              <td className="text-center" style={consts.tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>Pass</td>
              <td className="text-center" style={consts.tdStyle}>
                P
              </td>
              <td className="text-center" style={consts.tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>Two semesters Project/Capstone courses</td>
              <td className="text-center" style={consts.tdStyle}>
                -
              </td>
              <td className="text-center" style={consts.tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={consts.tdStyle}>
                This is applicable only for Capstone Courses where and extension
                (IP) is granted
              </td>

              <td className="text-center" style={consts.tdStyle}>
                IP
              </td>
              <td className="text-center" style={consts.tdStyle}>
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="row" style={{ marginTop: "45px" }}>
      <div className="col">
        <hr />
        <p>
          You may request additional academic transcript(s) online via
          www.suss.edu.sg
        </p>
      </div>
    </div>
  </div >
);

transInfo.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default transInfo;
