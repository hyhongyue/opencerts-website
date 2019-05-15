import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import edu from "./edu";
import gov from "./gov";

export default addDirToTemplatePath("sg", { ...edu, ...gov });