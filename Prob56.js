var merge = function(intervals) {
  if (!intervals.length) return [];

  intervals.sort((c, d) => (c[0] - d[0]));

  var res = [intervals[0]];

  for (var i = 1; i < intervals.length; i++) {
    var a = res[res.length - 1];
    var b = intervals[i];
    if (overlap(a, b)) {
      a[0] = Math.min(a[0], b[0]);
      a[1] = Math.max(a[1], b[1]);
    } else {
      res.push(b);
    }
  }

  return res;
};

var overlap = function (a, b) {
  if (!a || !b) return false;
  return b[0] <= a[1];
};
