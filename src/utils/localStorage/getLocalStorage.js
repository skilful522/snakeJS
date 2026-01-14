import localForage from 'localforage';

const getLocalStorage = async (key) => {
    try {
        const data = await localForage.getItem(key);

        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

export default getLocalStorage;
