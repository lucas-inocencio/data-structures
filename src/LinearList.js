// Creating a LinearList class
class LinearList{

    // Functions to be implemented
    // init()
    // get(i)
    // set(i, x)
    // length()
    // insert(i, x)
    // delete(i)

    //
    constructor(){
        this.items = [];
    }

    //
    get(i){
        if(this.items.length < i) return "Out of Index"
        return this.items[i];
    }

    //
    set(i, x){
        return;
    }

    //
    length(){
        return this.items.length;
    }

    //
    insert(i, x){
        return;
    }

    //
    delete(i){
        this.items;
    }
}


//
var linearlist = new LinearList;

//
console.log(linearlist.length());

//
console.log(linearlist.set(1,3));

//
console.log(linearlist.insert(2));

//
console.log(linearlist.get(1));

//
console.log(linearlist.delete(1));

//
console.log(linearlist);