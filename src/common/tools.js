class Tools {
    //生成随机字符串，长度为len,默认长度为4
    randomStr(len = 4) {
        return len > 10 ? (this.randomStr(10) + this.randomStr(len - 10)) : Math.random().toString(36).substr(2, len);
    }
    //生成指定范围的随机整数
    randomNum(minNum, maxNum) {
        return Math.floor(Math.random() * (maxNum - minNum) + minNum);
    }
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
    replaceAll(source, target, replaceStr) {
        let reg = eval(`/${target}/g`);
        return JSON.parse(JSON.stringify(source).replace(reg, replaceStr));
    }
}
export default new Tools() 