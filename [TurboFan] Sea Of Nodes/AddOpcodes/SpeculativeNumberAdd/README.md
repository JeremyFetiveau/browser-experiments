```javascript
let opt_me = (x) => {
  return x + 1000000000000;
}

opt_me(42);
%OptimizeFunctionOnNextCall(opt_me);
opt_me(4242);
```

![graph](numberadd_typed_lowering.png)
