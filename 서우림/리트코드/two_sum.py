"""
https://leetcode.com/problems/two-sum/description/
"""


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:

        for i in range(len(nums)):
            x = nums[i]
            for j in range(i + 1, len(nums)):
                y = nums[j]
                if x + y == target:
                    return [i, j]

