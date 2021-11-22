const setThemeColor = (newTheme: string, oldTheme: string) => {
  localStorage.setItem("Theme", newTheme);
  document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
  return newTheme;
};

const initThemeColor = (localStorageName: string) => { 
  return document.body.classList.add(localStorageName);
};

export { setThemeColor, initThemeColor };
