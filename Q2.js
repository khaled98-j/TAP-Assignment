
var answer = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

//nums = [2, 7, 11, 15];
//target = 9;

//console.log(answer(nums,target));
