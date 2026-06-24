const getStoredBook = () => {
  const storedBookStr = localStorage.getItem("readList");

  if (storedBookStr) {
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("This id already exist");
    return false;
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    return true;
  }
};

export { addToStoredDB, getStoredBook };
