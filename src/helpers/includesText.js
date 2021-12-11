const includesText = (str1, str2) => {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  return str1.includes(str2);
};

export default includesText;
