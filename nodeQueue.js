class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const lifeLine = new Queue();
lifeLine.enqueue('Rahim');
lifeLine.enqueue('Kahim');
lifeLine.enqueue('Sahim');
lifeLine.enqueue('Jahim');
lifeLine.enqueue('Fahim');

console.log('Queue:', lifeLine);

const winnerLifeline = lifeLine.dequeue();
console.log('Removing Life Line is: ', winnerLifeline);

console.log('After Removing Life Line : ', lifeLine);
