import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import np from "./np";
import singaporetech from "./singaporetech";
import suss from "./suss";

export default addDirToTemplatePath("edu", { ...np, ...singaporetech, ...suss });