class Stack {
    constructor(data) {
        this.stack = [data]
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }
}


s = new Stack(10);
s.push(20);
s.push(30);
s.push(40);
s.pop();
s.push(60);
const z = s.size();
console.log(s,z);

