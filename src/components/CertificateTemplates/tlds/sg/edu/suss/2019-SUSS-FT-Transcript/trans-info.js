import PropTypes from "prop-types";

const topBuffer = {
  marginTop: "25px"
};

const tdStyle = {
  paddingLeft: "35px",
  paddingRight: "35px",
  paddingBottom: "10px",
  paddingTop: "10px"
};

const blueFont = {
  color: "#003B5C"
}

const heading = {
  fontWeight: "bold"
}

const boldHeading = {
  fontWeight: "bold"
}

const transInfo = ({ certificate }) => (
  <div className="container" style={blueFont}>
    <div className="row">
      <div className="col d-flex justify-content-center">
        <h1 style={heading}>Transcript Information</h1>
      </div>
    </div>

    <div className="row" style={topBuffer}>
      <div className="col">
        <h2 style={heading}>Credit units and levels</h2>
        <p>
          The University uses a credit unit (cu) system. The credit unit
          requirements are:
        </p>

        <table className="w-100" border="1">
          <tbody>
            <tr>
              <td />
              <td style={tdStyle}>
                <p>
                  <b>Basic Degree</b>
                  <br />
                  (Stduents admitted prior 2007)
                </p>
              </td>
              <td style={tdStyle}>
                <p>
                  <b>Basic Degree</b>
                  <br />
                  (Stduents admitted from 2007)
                </p>
              </td>
              <td style={tdStyle}>
                <p>
                  <b>Honours Degree</b>
                  <br />
                  (Stduents admitted prior 2007)
                </p>
              </td>
              <td style={tdStyle}>
                <p>
                  <b>Honours Degree</b>
                  <br />
                  (Stduents admitted from 2007)
                </p>
              </td>
            </tr>

            <tr>
              <td style={tdStyle}><b>Full time programmes</b></td>
              <td style={tdStyle}>NA</td>
              <td style={tdStyle}>NA</td>
              <td style={tdStyle}>NA</td>
              <td style={tdStyle}>200 cu</td>
            </tr>

            <tr>
              <td style={tdStyle}><b>Part time programmes</b></td>
              <td style={tdStyle}>120 cu</td>
              <td style={tdStyle}>130 cu</td>
              <td style={tdStyle}>160 cu</td>
              <td style={tdStyle}>170 cu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="row" style={topBuffer}>
      <div className="col">
        <h2 style={heading}>Total number of units</h2>
        <p>
          This includes all the credit units that have been counted towards this
          qualification, including any credit transfer, subordinate award, and
          collaborative courses from approved institutions.
        </p>
      </div>
    </div>

    <div className="row" style={topBuffer}>
      <div className="col">
        <h2 style={heading}>Grade Point Average</h2>
        <p>
          The GPA is the average grade point of all courses taken by the
          student.
        </p>
      </div>
    </div>

    <div className="row" style={topBuffer}>
      <div className="col">
        <h2 style={heading}>Grade Legend</h2>
        <table className="w-100" border="1">
          <tbody>
            <tr>
              <th colSpan="2" style={tdStyle}>
                Grading System
              </th>
              <th className="text-center" style={tdStyle}>
                Grade Point
              </th>
            </tr>
            <tr>
              <td style={tdStyle}>85 - 100 marks</td>
              <td className="text-center" style={tdStyle}>
                A+
              </td>
              <td className="text-center" style={tdStyle}>
                5.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>80 - 84 marks</td>
              <td className="text-center" style={tdStyle}>
                A
              </td>
              <td className="text-center" style={tdStyle}>
                5.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>75 - 79 marks</td>
              <td className="text-center" style={tdStyle}>
                A-
              </td>

              <td className="text-center" style={tdStyle}>
                4.5
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>70 - 74 marks</td>
              <td className="text-center" style={tdStyle}>
                B+
              </td>
              <td className="text-center" style={tdStyle}>
                4.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>65 - 69 marks</td>
              <td className="text-center" style={tdStyle}>
                B
              </td>
              <td className="text-center" style={tdStyle}>
                3.5
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>60 - 64 marks</td>
              <td className="text-center" style={tdStyle}>
                B-
              </td>
              <td className="text-center" style={tdStyle}>
                3.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>55 - 59 marks</td>
              <td className="text-center" style={tdStyle}>
                C+
              </td>
              <td className="text-center" style={tdStyle}>
                2.5
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>50 - 54 marks</td>
              <td className="text-center" style={tdStyle}>
                C
              </td>
              <td className="text-center" style={tdStyle}>
                2.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>45 - 49 marks</td>
              <td className="text-center" style={tdStyle}>
                D+
              </td>
              <td className="text-center" style={tdStyle}>
                1.5
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>40 - 44 marks</td>
              <td className="text-center" style={tdStyle}>
                D
              </td>
              <td className="text-center" style={tdStyle}>
                1.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}> {"<"} 40 marks/Fail</td>
              <td className="text-center" style={tdStyle}>
                F
              </td>
              <td className="text-center" style={tdStyle}>
                0.0
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Withdrawal</td>
              <td className="text-center" style={tdStyle}>
                W
              </td>
              <td className="text-center" style={tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Pass with Distinction</td>
              <td className="text-center" style={tdStyle}>
                PD
              </td>
              <td className="text-center" style={tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Pass</td>
              <td className="text-center" style={tdStyle}>
                P
              </td>
              <td className="text-center" style={tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Two semesters Project/Capstone courses</td>
              <td className="text-center" style={tdStyle}>
                -
              </td>
              <td className="text-center" style={tdStyle}>
                -
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                This is applicable only for Capstone Courses where and extension
                (IP) is granted
              </td>

              <td className="text-center" style={tdStyle}>
                IP
              </td>
              <td className="text-center" style={tdStyle}>
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
