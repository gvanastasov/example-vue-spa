const formatDate = function (date) {
  if (!date) {
    return "";
  }
  let dateInternal = date;
  if (typeof date === "string") {
    dateInternal = new Date(date);
  }
  const opts = { month: "long", day: "numeric", year: "numeric" };
  return dateInternal.toLocaleDateString("en-US", opts);
};

export default { formatDate };
