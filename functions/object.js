export default obj => {
    return {
        hasKey: (key) => {
            return obj ? {}.hasOwnProperty.call(obj, key) : false
        },
        getKeyByValue: (value) => {
            return Object.keys(object).find(key => object[key] == value)
        },
        hasOwnProperty: (propertyPathDoted) => {
            if (!propertyPathDoted)
                return false;

            var properties = propertyPathDoted.split('.');

            for (var i = 0; i < properties.length; i++) {
                var prop = properties[i];

                if (!obj || !obj.hasOwnProperty(prop)) {
                    return false;
                } else {
                    obj = obj[prop];
                }
            }
            return true;
        },
        get: (dot_path, _default) => {
            var arr = dot_path.split(".");
            while(arr.length && (obj = obj[arr.shift()]));
            return obj || _default;
        }
    }
}
