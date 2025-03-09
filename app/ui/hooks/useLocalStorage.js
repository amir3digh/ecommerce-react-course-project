const useLocalStorage = () => {
  return {
    getItem(key) {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    },
    setItem(key, value) {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
    },
    clear() {
      localStorage.clear();
    },
  };
};

export default useLocalStorage;
