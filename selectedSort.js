const numbers = [11,55,1,64,63,53,29,65,63,15,2];

function selectedSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) {   
                min = j;
            }
        }
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    } 
    return array;
}

const sorted = selectedSort(numbers);
console.log(sorted);
