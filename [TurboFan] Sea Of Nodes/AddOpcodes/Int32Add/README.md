```javascript
let opt_me= (x) => {
  let y = x ? 10 : 20;
  return y + 100;
}

opt_me(true);
%OptimizeFunctionOnNextCall(opt_me);
opt_me(false);
```

# Before simplified lowering (typed lowering)

![graph](speculativesafeintegeradd_typed_lowering.png)

# Simplified lowering

![graph](int32add_simplified_lowering.png)
