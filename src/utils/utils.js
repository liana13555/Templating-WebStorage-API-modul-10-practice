export const setLocalStorage = (name) => {
  localStorage.setItem("userName", name);

  try {
    localStorage.setItem("userName", name);
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = () => {
  try {
    const isNameExists = localStorage.getItem("userName");
    if (!isNameExists) return false;
    } catch (error) {
    console.log(error);
  }
}
