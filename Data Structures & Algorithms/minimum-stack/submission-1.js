class MinStack {
    stack = [];
    min = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      this.stack.push(val);

      const m = this.min.at(-1);
      if(m === undefined) {
        this.min.push(val);
      } else {
        this.min.push(Math.min(m, val));
      }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log(this.min)
        return this.min.at(-1);
    }
}
