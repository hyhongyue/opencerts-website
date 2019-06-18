import dynamic from "next/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const SUSSFT2019 = dynamic(() =>
  import("./2019-SUSS-FT-Template" /* webpackChunkName: "suss-Templates" */)
);

const SUSSFT2019TS = dynamic(() =>
  import("./2019-SUSS-FT-Transcript" /* webpackChunkName: "suss-Templates" */)
);

const templates = {
  "2019-SUSS-FT-Template": SUSSFT2019,
  "2019-SUSS-FT-Transcript": SUSSFT2019TS
};

export default addDirToTemplatePath("suss", templates);
