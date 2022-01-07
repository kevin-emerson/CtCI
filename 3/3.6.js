let Queue = require('../utilityClasses/Queue.js');

class Animal {
    constructor(animal) {
        this.type = animal.type;
        this.name = animal.name;
        this.order;
    }
}

class AnimalShelter {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();
        this.count = 0;
    }

    enqueue(animal) {
        this.count++;
        animal.order = this.count;

        if (animal.type === 'dog') {
            this.dogs.enqueue(animal)
        } else if (animal.type === 'cat') {
            this.cats.enqueue(animal)
        }
    }

    dequeueAny() {
        this.count--;
        if (this.dogs.peek().order < this.cats.peek().order) return this.dogs.dequeue();
        else return this.cats.dequeue();

    }

    dequeueDog() {
        this.count--;
        return this.dogs.dequeue();
    }
    dequeueCat() {
        this.count--;
        return this.cats.dequeue();
    }
}


/* TESTS */
var a = new AnimalShelter();
a.enqueue({type:'dog', name:'machi'});
a.enqueue({type:'dog', name:'daisy'});
a.enqueue({type:'cat', name:'peanuts'});
a.enqueue({type:'dog', name:'miso'});
a.enqueue({type:'cat', name:'dada'});
a.enqueue({type:'cat', name:'xiaoxiao'});

console.log(a.dequeueAny(), 'dog machi');
console.log(a.dequeueCat(), 'cat peanuts');
console.log(a.dequeueDog(), 'dog daisy');
console.log(a.dequeueAny(), 'dog miso');
