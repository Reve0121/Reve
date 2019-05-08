class Tools {
    random(minNum, maxNum) {
        return Math.floor(Math.random() * (maxNum - minNum) + minNum);
    }
}
export default  new Tools() 