const numbers = [1, 3, 6, 7, 8, 12, 16, 17, 19, 25, 27, 29, 34, 35, 39, 42, 46, 49, 56, 59, 63, 68];

function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            console.log('Item Found in Position', mid);
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        }
        if (numbers[mid > target]) {
            end = mid - 1;
        }
    }
    return -1;
}

const index = binarySearch(numbers, 35);
console.log(index);