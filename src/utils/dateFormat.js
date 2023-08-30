export const dateFormat = time => {
  let date = new Date(time);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  return year + "년 " + month + "월 " + day + "일";
};
