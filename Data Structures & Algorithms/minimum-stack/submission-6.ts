class MinStack {
    stack = [];
    minStack = [];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        this.minStack.push(this.minStack.at(-1) === undefined ? val : this.minStack.at(-1) > val ? val : this.minStack.at(-1))
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1);
    }
}
