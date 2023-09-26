const getStoredData = (key) => {
    const storedData = localStorage.getItem(key);
    if(storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveDataToLocalStorage = (key, value) => {
    const idStringified = JSON.stringify(value);
    localStorage.setItem(key, idStringified)
}

const addToLocalStorage = (key, value) => {
    const dataFromLocalStorage = getStoredData(key);
    dataFromLocalStorage.push(value);
    saveDataToLocalStorage(key, value);
}

export {saveDataToLocalStorage, addToLocalStorage};