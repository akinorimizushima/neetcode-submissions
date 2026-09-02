class MinStack {
    stack = [];
    minStack = [];
    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        const last = this.minStack.at(-1);
        if (last === undefined) {
            this.minStack.push(val)
        } else {
            this.minStack.push(last > val ? val : last)
        }
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
