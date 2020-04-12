const getLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);

        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

export default getLocalStorage;
