// BEGIN
const getGirlFriends = (users) => {
    let girlfriends = [];

    for (const user of users) {
        for (const friend of user.friends) {
            if (friend.gender === 'female'){
                girlfriends.push(friend);
            }
        }
    }
    return girlfriends;
};
export default getGirlFriends;
// END