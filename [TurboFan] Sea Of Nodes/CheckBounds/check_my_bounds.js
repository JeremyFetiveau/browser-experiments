let f = function(ta) {
  let idx = Math.floor(Math.random());
  return ta[idx];
}

for (var i = 0; i < 0x10000; ++i) {
  f(new Float64Array([i,i,i,i]));
}
