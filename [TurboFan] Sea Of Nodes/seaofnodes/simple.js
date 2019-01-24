let opt_me = (o) => {
  var a = o.x;
  o.y = a + 1;
}

let obj = {
  x:1,
  y:2
}

opt_me(obj);
%OptimizeFunctionOnNextCall(opt_me);
opt_me(obj);
