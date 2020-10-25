export default class Storage {

    static set(key, obj) {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(obj));
    }

    static get(key, defaultValue = null) {
        let data = defaultValue;
        const objJSON = window.localStorage && window.localStorage.getItem(key);
        if (typeof objJSON === 'string') {
            try {
                data = JSON.parse(objJSON)
            } catch (e) {
            }
        }
        return data;
    }

    static remove(key) {
        window.localStorage && window.localStorage.removeItem(key)
    }
}