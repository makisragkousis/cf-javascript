const arr = [2, 3, 4, 3, 5, 2];

const deleteBackwards = (arr, val) => {

    if (!Array.isArray(arr)) return;

    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] === val) {
            arr.splice(i, 1);
        }
    }
}