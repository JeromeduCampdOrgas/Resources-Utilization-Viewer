require("dotenv").config();
export const URL =
  "http://localhost/resources-utilization-viewer/app/index.php";
export const user = process.env.true_userId;
export const MDPP = process.env.true_userPwd;
export const newResource = {
  id: process.env.newUserId,
  password: process.env.newUserPass,
};
