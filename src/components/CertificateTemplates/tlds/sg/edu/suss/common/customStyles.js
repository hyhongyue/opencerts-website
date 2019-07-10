import { SUSS_CERT_BG } from "./images";

const styles = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Cardo"
      rel="stylesheet"
    />

    <style>{`
	.container{
	width: 794px;
	height: auto;
	}

	.certBgStyle{
	  background-repeat: no-repeat;
	  background-image: url(${SUSS_CERT_BG});
	  background-size: contain;
	  background-position: center;
	  min-width: 794px;
	  min-height: 1123px;
	}
	
	.logoStyle {
	  width: 309px;
	  height: 156px;
	  margin-top: 130px;
	}

      	.certTextStyle {
        font-family: Cardo, sans-serif;
        font-style: italic;
	font-size: 10pt;
	color: #003B5C;
	text-align: center;
      	}

	.stuNameProgNameTextStyle {
        font-family: Arial;
	font-weight: bold;
	font-size: 20pt;
	color: #003B5C;
	text-align: center;
      	}

	.degreeClassTextStyle {
        font-family: Arial;
	font-weight: bold;
	font-size: 12pt;
	color: #003B5C;
	text-align: center;
      	}

	.confDateTextStyle {
        font-family: Arial;
	font-weight: bold;
	font-size: 10pt;
	color: #003B5C;
	text-align: center;
      	}

	.signTextStyle{
	font-family: Cardo;
	font-size: 10pt;
	color: #003B5C;
	text-align: center;
	}

	.certNoTextStyle{
	font-family: Arial;
	font-weight: bold;
	font-size: 9pt;
	color: #003B5C;
	text-align: center;
	}

	.printerNoTextStyle{
	font-family: Arial;
	font-weight: bold;
	font-size: 9pt;
	color: #003B5C;
	text-align: left;
	}
	
	.signStyle {
	  width: 2.8cm;
	  height: 2.8cm;
	  align: left;
	}


    `}</style>
  </div>
);

export default styles;
