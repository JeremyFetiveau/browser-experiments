```
function opt_me(b) {
  let x = 10;
  if (b == "foo")
    x = 5;
  let y = x + 2;
  y = y + 1000; 
  y = y * 2;
  return y;
}
```

![diagram](diagram.png)

![graph](turbofan_range.png)
