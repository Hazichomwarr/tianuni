export const checkIsOldEnough = (dateString): boolean => {
  const birthDate = new Date(dateString);
  const today = new Date();

  //16 years ago from today
  const minAgeDate = new Date(
    today.getFullYear() - 16,
    today.getMonth(),
    today.getDate(),
  );

  return birthDate <= minAgeDate;
};
