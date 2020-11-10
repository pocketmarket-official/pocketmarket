export default (function() {
    const ls = localStorage || {};
    return {
        add: (key, obj) => {
            let old = ls.getItem(key);
            if(old === null) {
                old = '';
            }
            ls.setItem(key, old + ((typeof obj) === "string" ? obj : JSON.stringify(obj)));
        },
        get: (key) => {
            if(!ls[key]) {
                return null;
            }
            const value = ls[key];

            try {
                const parsed = JSON.parse(value);
                return parsed;
            } catch(e) {
                return value;
            }
        },
        set: (key, obj) => {
            const arr = [];
            arr.push(JSON.stringify(obj));
            ls[key] = arr;
        }
    };
})();
