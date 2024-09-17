var findMedianSortedArrays = function (nums1, nums2) {
  const totalElement = nums1.length + nums2.length;
  const NewArray = nums1.concat(nums2);
  let total = 0;
  for (const num of NewArray) {
    total += num;
  }
  return total / totalElement;
};

const nums1 = [2, 2, 4, 4],
  nums2 = [2, 2, 2, 4, 4];
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);
