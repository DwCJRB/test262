// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise reaction jobs have predictable environment
    'this' is global object in sloppy mode,
    undefined in strict mode
es6id: S25.4.2.1_A3.2_T1
author: Sam Mikes
description: onRejected gets default 'this'
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

var expectedThis = fnGlobalObject(),
    obj = {};

var p = Promise.reject(obj).then(function () {
    $DONE("Unexpected fulfillment; expected rejection.");
}, function(arg) {
    if (this !== expectedThis) {
        $DONE("'this' must be global object, got " + this);
        return;
    }

    if (arg !== obj) {
        $DONE("Expected promise to be rejected with obj, actually " + arg);
        return;
    }

    $DONE();
});
