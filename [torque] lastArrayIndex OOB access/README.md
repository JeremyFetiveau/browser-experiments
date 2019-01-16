```
commit b8a911314d00e5c866399b58533a79bddce45fb6
Author: Benedikt Meurer <bmeurer@chromium.org>
Date:   Fri Nov 2 08:00:28 2018 +0100

    [builtins] Fix out-of-bounds in Array#lastIndexOf().
    
    The fast-path in the `ArrayPrototypeLastIndexOf` torque implementation
    didn't check that the `fromIndex` is within the bounds of the JSArray
    _AFTER_ the call to ToInteger, which can have arbitrary side-effects,
    i.e. it can change the length of the array.
    
    R=yangguo@chromium.org
    
    Bug: chromium:898785
    Change-Id: I7ef84143ec8c33148f6e9d451bd52769d5074fb4
    Reviewed-on: https://chromium-review.googlesource.com/c/1314329
    Reviewed-by: Yang Guo <yangguo@chromium.org>
    Commit-Queue: Benedikt Meurer <bmeurer@chromium.org>
    Cr-Commit-Position: refs/heads/master@{#57204}
```
