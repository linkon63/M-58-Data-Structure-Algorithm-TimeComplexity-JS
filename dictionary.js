class Dictionary{
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Mahi', '0171703030303');
phoneBook.add('PoriMoni', '0171703030505');
phoneBook.add('Nusrat', '01717030303361');
phoneBook.add('Purnima', '01717562030303');
phoneBook.add('Shabnur', '0171703030303');

console.log('PhoneBook :', phoneBook);

const mahiKey = phoneBook.get("Mahi");
console.log(mahiKey);

