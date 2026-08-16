class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort(([a], [b]) => b - a);
        let stack = [];

        for (let [p, s] of pair) {
            console.log("pos", p, "speed", s)
            console.log(stack)
            stack.push((target - p) / s);
            if(stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }
        }

        return stack.length;

    }
}

// target = 10
// pos = [1, 4]
// speed = [3, 2]
// 1: fleet = [4, 6]
// 2: fleet = [7, 7]
// 3: fleet = [10, 9]
// output: 1

// target = 10, 
// pos = [4,1,0,7]
// speed = [2,2,1,1]
// 1: fleet = [6, 3, 1, 8]
// 2: fleet = [8, 5, 2, 9]
// 3: fleet = [10, 7, 3, 10]
// output: 3
