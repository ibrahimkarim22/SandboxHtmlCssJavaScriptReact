//https://leetcode.com/problems/two-sum/


var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];

        }
        map[nums[i]] = i;
    }
}

console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([3, 2, 4], 6)); 
