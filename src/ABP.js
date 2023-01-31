class ABP {

    // init(v) all elements of 𝐴 are defined to be v
    // get(i) return the value of 𝐴[𝑖], where 1 ≤ 𝑖 ≤ n
    // set(i, x) set 𝐴[𝑖] = 𝑥, where 1 ≤ 𝑖 ≤ n
    // isDefined() verify if element of 𝐴 are defined

    // The command init(𝑣) saves the value of 𝑣 and sets the stack empty (𝑡op ← 0)
    constructor(v = -1, n = 2**8) {
        this.A = new Int32Array(n); // Array for Busy People
        this.B = new Int32Array(n); // Maintain a parallel array 𝐵[1, … , 𝑛], where 𝐵[𝑖] indicates the element of the stack that witnesses that 𝐴[𝑖] is defined
        this.S = []; // Maintain a stack 𝑆 containing the indices of defined elements
        this.v = v; // Standard value
        this.n = n; // Length of array
        this.top = 0; // Length of the stack
    }

    // The command set(𝑖, 𝑥) applies Step 3 to test whether 𝐴[𝑖] is already defined
    // If not, we apply Step 2 to define it. If it was defined, we set 𝐴[𝑖] ← x
    set(i, x) {
        if (this.isDefined(i)) this.A[i] = x;
        else {
            this.S.push(i); // When an entry 𝐴[𝑖] is first defined a value 𝑥, we push index 𝑖 onto the stack, signaling that this entry has been initialized
            this.B[i] = this.top; // We set 𝐵[𝑖] ← 𝑡op, which validates this entry
            this.top++;
            this.A[i] = x; // Finally, we set 𝐴[𝑖] ← x
        }
    }

    // get(𝑖) ∶= (isDefined[𝑖] ? 𝐴[𝑖] ∶ 𝑣)
    // The command get(𝑥) applies Step 3 to test whether 𝐴[𝑖] is defined. If so, it returns 𝐴[𝑖]. Otherwise it returns the default value 𝑣
    get(i) {
        return (this.isDefined(i) ? this.A[i] : this.v);
    }

    // To test whether 𝐴[𝑖] is defined, test whether 0 ≤ 𝐵[𝑖] ≤ 𝑡op and 𝑆[𝐵[𝑖]] = i
    isDefined(i) {
        return (i < this.n && 0 <= this.B[i] && this.B[i] <= this.top && this.S[this.B[i]] == i)
    }
}