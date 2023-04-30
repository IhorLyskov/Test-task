export const load = key => {
  try {
    let serializedState = localStorage.getItem(key);
    return (serializedState = JSON.parse(serializedState) || undefined);
  } catch (error) {
    console.log(error);
  }
};

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
  }
};
