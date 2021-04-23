const numbers = [21,23,5,2,16,4,65,34,35,63,465,65,32];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
           if (array[j] > array[j+1]) {{
               const temp = array[j];
               array[j] = array[j+1];
               array[j+1] = temp;
           }
               
           }           
       }
        
    }
    return array;    
}

const sorted = bubbleSort(numbers);
console.log(sorted);