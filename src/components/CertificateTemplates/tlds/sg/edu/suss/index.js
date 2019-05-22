import dynamic from "next/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const SUSSFT2019 = dynamic(() =>
  import("./2019-SUSS-FT-Template" /* webpackChunkName: "suss-Templates" */)
);

const templates = {
  "2019-SUSS-FT-Template": SUSSFT2019
};

export default addDirToTemplatePath("suss", templates);
