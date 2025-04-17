// BEGIN
const getChildren = (entries) => {
    let allChildren = [];
    for (const entry of entries) {
        allChildren.push(entry.children);
    }
    return allChildren.flat();
}
export default getChildren;
// END