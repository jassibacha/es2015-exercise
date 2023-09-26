/* returns a randomly selected item from array of items */
function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

/* removes the first matching item from items, if item exists, and returns it. 
Otherwise returns undefined. */
function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            const leftArr = items.slice(0, i);
            const rightArr = items.slice(i + 1);
            const newArr = leftArr.concat(rightArr);
            return newArr;
        }
    }
}
// function remove(items, item) {
//     for (let i = 0; i < items.length; i++) {
//         if (items[i] === item) {
//             return items.splice(i, 1)[0];
//         }
//     }
//     return undefined;
// }

export { choice, remove };
