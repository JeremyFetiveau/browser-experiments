function opt_me(b) {
  let x = 10;
  if (b == "foo")
    x = 5;
  let y = x + 2;
  y = y + 1000; 
  y = y * 2;
  return y;
}
let main = () => {
  opt_me("bar");
  for (var i = 0; i < 0x10000; ++i)
    opt_me("foo");
}
main();
