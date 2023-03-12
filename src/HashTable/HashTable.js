class LinkedListNode {

    constructor(key, value) {
        [this.key, this.value, this.next] = [key, value, undefined]
    }
}

class ValuePair {

    constructor(key, value) {
        [this.key, this.value] = [key, value]
    }
}

class LinkedList {
    
    constructor() {
        [this.count, this.head] = [0, undefined]
    }

    insert(x, v) {
        const node = new LinkedListNode(x, v)
        let current
        if (this.head == null) this.head = node
        else {
            current = this.head
            while (current.next != null) current = current.next
            current.next = node
        }
        this.count++
        return this
    }

    find(x) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (x == current.key) return current.value
            else current = current.next
        }
        throw `Key ${x} does not exist`
    }

    delete(x) {
        let current = this.head
        let index = -1
        for (let i = 0; i < this.count && current != null; i++) {
            if (x == current.key) index = i
            else current = current.next
        }
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index == 0) this.head = current.next
            else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            return current.key
        }
        throw `Key ${x} does not exist`
    }
}

class HashTable {

    constructor(minLoadFactor = 0.25, maxLoadFactor = 0.75, hashType = 'universal', collisionHandler = "doubleHash", tableSize = 3, a_largePrime = 2699, b_largePrime = 3499, p_largePrime = 7547, n_entries = 0, allEntries = []) {
        this.minLoadFactor = minLoadFactor
        this.maxLoadFactor = maxLoadFactor
        if (this.minLoadFactor < 0 || this.minLoadFactor > this.maxLoadFactor || this.maxLoadFactor > 1) throw "0 < 𝜆min < 𝜆max < 1"
        this.hashType = hashType
        this.collisionHandler = collisionHandler
        this.table = new Array(tableSize)
        this.m = tableSize
        this.a = a_largePrime
        this.b = b_largePrime
        this.p = p_largePrime
        this.n = n_entries
        this.allEntries = allEntries
        if (this.hashType == 'universal') {
            this.a = Math.floor(Math.random() * (this.p - 2)) + 1
            this.b = Math.floor(Math.random() * (this.p - 1))
        }
    }

    divisionHash(x) {
        return x % this.m
    }

    muliplicativetHash(x) {
        return ((this.a * x) % this.p) % this.m
    }

    linearHash(x) {
        return ((this.a * x + this.b) % this.p) % this.m
    }

    polynomialHash(c) { // polynomial hash of a string
        let P = 37 // replace this with whatever you like
        let hashValue = 0
        for (let i = c.length - 1; i >= 0; i--) hashValue = P * hashValue + parseInt(c.charAt(i)) // Horner's rule
        return hashValue % this.m // take the final result mod m
    }

    universalHash(x) {
        return ((this.a * x + this.b) % this.p) % this.m
    }

    chosenHash(x, hashType = this.hashType) {
       if (hashType == 'division') return this.divisionHash(x)
        else if (hashType == 'multiplicative') return this.muliplicativetHash(x)
        else if (hashType == 'linear') return this.linearHash(x)
        else if (hashType == 'polynomial') return this.polynomialHash(x)
        else return this.universalHash(x)
    }

    rehash() {
        if (this.minLoadFactor > (this.n / this.m) || this.maxLoadFactor < (this.n / this.m)) {
            let newM = this.n / ((this.minLoadFactor + this.maxLoadFactor) / 2)
            newM = this.nearestPrime(newM)
            let newTable = new HashTable(this.minLoadFactor, this.maxLoadFactor, this.hashType, this.collisionHandler, newM)
            for (let i = 0; i < this.allEntries.length; i++) newTable.insert(this.allEntries[i][0], this.allEntries[i][1])
            return newTable
        }
        else return this
    }

    separateChainInsert(x, v) {
        const i = this.chosenHash(x)
        if (this.table[i] == null) this.table[i] = new LinkedList()
        this.table[i].insert(x, v)
        return this.rehash()
    }

    separateChainFind(x) {
        const i = this.chosenHash(x)
        const linkedList = this.table[i]
        if (linkedList != null && !linkedList.count == 0) {
            let current = linkedList.head
            while (current != null) {
                if (current.key == x) return current.value
                current = current.next
            }
        }
        else throw `Key ${x} does not exist`
    }

    separateChainDelete(x) {
        const i = this.chosenHash(x)
        const linkedList = this.table[i]
        if (linkedList != null && !linkedList.count == 0) {
            let current = linkedList.head
            while (current != null) {
                if (current.key == x) {
                    linkedList.delete(current.key)
                    if (linkedList.count == 0) delete this.table[i]
                    this.n--
                    return this.rehash()
                }
                current = current.next
            }
        }
        else throw `Key ${x} does not exist`
    }

    linearProbInsert(x, v) {
        const i = this.chosenHash(x);
        if (this.table[i] == null) this.table[i] = new ValuePair(x, v)
        else {
            let index = i + 1;
            while (this.table[index] != null) index++;
            this.table[index] = new ValuePair(x, v);
        }
        return this.rehash()
    }

    linearProbFind(x) {
        const i = this.chosenHash(x);
        if (this.table[i] != null) {
            if (this.table[i].key == x) return this.table[i].value;
            let index = i + 1;
            while (this.table[index] != null && this.table[index].key !== x) index++;
            if (this.table[index] != null && this.table[index].key == x) return this.table[i].value;
        }
        else throw `Key ${x} does not exist`
    }

    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.chosenHash(key)
        let index = removedPosition + 1
        while (this.table[index] != null) {
            const posHash = this.chosenHash(this.table[index].key)
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index]
                delete this.table[index]
                removedPosition = index
            }
        index++
        }
    }

    linearProbDelete(x) {
        const i = this.chosenHash(x)
        if (this.table[i] != null) {
            if (this.table[i].key == x) {
                delete this.table[i]
                this.verifyRemoveSideEffect(x, i)
                this.n--
                return this.rehash()
            }
            else { 
                let index = i + 1;
                while (this.table[index] != null && this.table[index].key !== x ) index++
                if (this.table[index] != null && this.table[index].key == x) {
                    delete this.table[index]
                    this.verifyRemoveSideEffect(x, index)
                    this.n--
                    return this.rehash()
                }
            }
        }
        else throw `Key ${x} does not exist`
    }

    isPrime(value) {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }

    nearestPrime(x){
        let lowerPrime, higherPrime;
        let counter = 1;
        if(this.isPrime(x)) return x
        while(!(lowerPrime && higherPrime)){
            if(!higherPrime) {
                if(this.isPrime(x + counter)) higherPrime = x + counter
            }
            if(!lowerPrime) {
                if(this.isPrime(x - counter)) lowerPrime = x - counter
            }

            counter++
        }
        return higherPrime
    }

    secondHash(x) {
        return (this.m - 2 - x%(this.m-2))
    }

    doubleHashInsert(x, v) {
        let h = this.chosenHash(x)
        let g = this.secondHash(x)
        if (this.table[h] == null || this.table[h] == 'deleted') this.table[h] = new ValuePair(x, v)
        else {
            let index = h + g
            let k = 0
            while (this.table[index] != null && this.table[index] != 'deleted' && k < this.m) {
                index = ((h + k * g) % this.m)
                k++
            }
            if (this.table[index] == null || this.table[index] == 'deleted') this.table[index] = new ValuePair(x, v)
            else throw 'deu rium'
        }
        return this.rehash()
    }

    doubleHashFind(x) {
        const h = this.chosenHash(x)
        const g = this.secondHash(x)
        if (this.table[h] != null || this.table[h] != 'deleted') {
            if (this.table[h].key == x) return this.table[h].value;
            let index = h + g;
            while (this.table[index] != null && this.table[index].key != x || this.table[index] != 'deleted') index += g
            if (this.table[index] != null && this.table[index].key == x) return this.table[index].value;
        }
        else throw `Key ${x} does not exist`
    }

    doubleHashDelete(x) {
        const h = this.chosenHash(x)
        const g = this.secondHash(x)
        if (this.table[h] != null || this.table[h] != 'deleted') {
            if (this.table[h].key == x) {
                this.table[h] = 'deleted'
                this.n--
                return this.rehash()
            }
            else { 
                let index = h + g;
                while (this.table[index] != null && this.table[index].key !== x ) index += g
                if (this.table[index] != null && this.table[index].key == x) {
                    this.table[index] = 'deleted'
                    this.n--
                    return this.rehash()
                }
            }
        }
        else throw `Key ${x} does not exist`
    }

    insert(x, v) {
        this.allEntries = this.allEntries.concat([[x, v]])
        this.n++
        if (this.collisionHandler == 'separateChain') return this.separateChainInsert(x, v)
        else if (this.collisionHandler == 'linearProb') return this.linearProbInsert(x, v)
        else return this.doubleHashInsert(x, v)
    }

    find(x) {
        if (this.collisionHandler == 'separateChain') return this.separateChainFind(x)
        else if (this.collisionHandler == 'linearProb') return this.linearProbFind(x)
        else return this.doubleHashFind(x)
    }

    delete(x) {
        for(let i = 0; i < this.allEntries.length; i++) {
            if (this.allEntries[i][0] === x) this.allEntries.splice(i, 1)
        }
        if (this.collisionHandler == 'separateChain') return this.separateChainDelete(x)
        else if (this.collisionHandler == 'linearProb') return this.linearProbDelete(x)
        else return this.doubleHashDelete(x)
    }
}