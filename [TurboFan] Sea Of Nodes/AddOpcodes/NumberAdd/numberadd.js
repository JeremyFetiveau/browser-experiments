let opt_me = (x) => {
  let y = x ? 10 : 20;
  return y + 1000000000000;
}

opt_me(true);
%OptimizeFunctionOnNextCall(opt_me);
opt_me(false);
