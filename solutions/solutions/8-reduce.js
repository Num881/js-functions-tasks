// BEGIN
const groupBy = (items, property) => {
    return items.reduce((acc, item) => {
        const key = item[property];
        if (!(key in acc)) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};
export default groupBy;
// END