const getStoredData = () => {
    const storedData = localStorage.getItem("donateKey");
    if(storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveDataToLocalStorage = (value) => {
    const idStringified = JSON.stringify(value);
    localStorage.setItem("donateKey", idStringified)
}

const addToLocalStorage = (value) => {
    const dataFromLocalStorage = getStoredData();
    dataFromLocalStorage.push(value);
    saveDataToLocalStorage(dataFromLocalStorage);
}

export {saveDataToLocalStorage, addToLocalStorage, getStoredData};