import localForage from 'localforage';

const setLocalStorage = (key, value) => localForage.setItem(key, JSON.stringify(value));

export default setLocalStorage;
