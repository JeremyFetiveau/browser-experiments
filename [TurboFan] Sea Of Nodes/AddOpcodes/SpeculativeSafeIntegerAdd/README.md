```javascript
let opt_me = (x) => {
  return x + 1;
}

opt_me(42);
%OptimizeFunctionOnNextCall(opt_me);
opt_me(4242);
```

![graph](speculativesafeintegeradd_typed_lowering.png)
