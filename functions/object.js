export default obj => {
    return {
        hasKey: (key) => {
            return obj ? {}.hasOwnProperty.call(obj, key) : false
        },
        getKeyByValue: (value) => {
            return Object.keys(object).find(key => object[key] == value)
        },
        hasOwnProperty: (dot_path) => {
            var arr = dot_path.split(".");
            while(arr.length && (obj = obj[arr.shift()]));
            return obj;
        }
    }
}
