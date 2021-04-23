class Stack{
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add('Rahman');
guest.add('Jaman');
guest.add('Kaman');
guest.add('Raman');
guest.add('Saman');

console.log('All Guest Who will Speak : ',guest);

const doneSpeech = guest.remove();

console.log('Speech Done : ', doneSpeech);

console.log('After Speech', guest);