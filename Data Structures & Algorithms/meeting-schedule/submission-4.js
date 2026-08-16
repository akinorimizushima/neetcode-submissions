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

        for (let i = 1; i < intervals.length; i++) {
            const mtg = intervals[i];
            const mtg2 = intervals[i - 1];
            if (Math.min(mtg.end, mtg2.end) > Math.max(mtg.start, mtg2.start)) {
                return false;
            }
        }

        return true;
    }
}
