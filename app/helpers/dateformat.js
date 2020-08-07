import { helper } from "@ember/component/helper";

export default helper(function dateformat(params /*, hash*/) {
  const date = new Date(params);
  const year = date.getFullYear();
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  const month =
    date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);

  return `${month}/${day}/${year}`;
});
