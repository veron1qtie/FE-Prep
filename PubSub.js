// event emitter using Map

class PubSub {
    constructor() {
        this.dict = new Map(); 
    }

    subscribe(event, func) {
        if(!this.dict.has(event)) {
            this.dict.set(event, [func]);
        }
        // arr with 2 vals: old and new, adding new func to the arr of existing funcs
        else this.dict.set(event, [...this.dict.get(event), func]);

        return this.dict.get(event);
    }

    //can't use Map method delete because it will delete ALL event funcs
    unsubscribe(event, func) {
        if(this.dict.has(event)) {
            this.dict.set(event, this.dict.get(event).filter( foo => {
                if(foo.toString() !== func.toString()) {
                    return foo;
                }
                })
        )}
        return console.log('this func is deleted', func);
    }

    trigger(event) {
        if(this.dict.has(event)) {
            this.dict.get(event).forEach( fn => fn());
        }
        return this.dict.get(event);
    }
}

const mapOfEvents = new PubSub();

mapOfEvents.subscribe('click', function changeColor(){console.log('color should change')});
mapOfEvents.subscribe('click', function reverseColor() {console.log('color should reverse to initial')});
mapOfEvents.subscribe('mouseOver', function() {console.log('mouse over')});

console.log(mapOfEvents);

console.log(mapOfEvents.trigger('click'));
console.log(mapOfEvents.trigger('mouseOver'));

console.log(mapOfEvents.unsubscribe('mouseOver', function() {console.log('mouse over')}));

console.log(mapOfEvents);
console.log(mapOfEvents.trigger('mouseOver')); // [] 

