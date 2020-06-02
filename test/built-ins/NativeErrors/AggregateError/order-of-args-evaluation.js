// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error
description: >
  Process arguments in superclass-then-subclass order
info: |
  AggregateError ( errors, message )

  TODO: get updated prose

features: [AggregateError, Symbol.iterator]
---*/

let count = 0;
const message = {
  toString() {
    assert.sameValue(count, 0);
    count++;
    return '';
  }
};
const errors = {
  [Symbol.iterator]() {
    assert.sameValue(count, 1);
    count++;
    return {
      next() {
        assert.sameValue(count, 2);
        count++;
        return {
          done: true
        };
      }
    };
  }
};

new AggregateError(errors, message);

assert.sameValue(count, 3);
