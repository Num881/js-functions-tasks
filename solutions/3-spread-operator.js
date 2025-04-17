// BEGIN
const convertDate = (...dateArr) => {
    const result = [];
    for ( let [year, month, day] of dateArr) {
        let newsDate = new Date(year, month, day);
        result.push(newsDate.toDateString());
    }
    return result;
}
export default convertDate
// END