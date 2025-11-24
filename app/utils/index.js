// app/utils/index.js
export const getFormattedDate = (dateString) => {
  if (!dateString) return "Unknown date";

  const date = new Date(dateString);
  if (isNaN(date)) return "Invalid date";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
};
