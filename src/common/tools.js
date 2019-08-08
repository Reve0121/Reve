class Tools {
    random(minNum, maxNum) {
        return Math.floor(Math.random() * (maxNum - minNum) + minNum);
    };
    trimString(val) {
        if (typeof val === "string") {
            if (typeof val.trim === "function") {
                return val.trim();
            } else {
                return val.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            }
        } else if (typeof val !== "undefined" && val !== null) {
            return trimString(val.toString());
        } else {
            return "";
        }
    }
}
export default new Tools() 