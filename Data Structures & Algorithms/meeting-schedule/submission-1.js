/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start)

        for (let i = 0; i < intervals.length; i++) {
            const mtg = intervals[i];
            for (let j = i + 1; j < intervals.length; j++) {
                const mtg2 = intervals[j];
                if (mtg.end > mtg2.start) {
                    return false;
                }
            }
        }

        return true;
    }
}
