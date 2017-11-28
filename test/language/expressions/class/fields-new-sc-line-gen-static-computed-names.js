// This file was procedurally generated from the following sources:
// - src/class-fields/static-computed-names.case
// - src/class-fields/productions/cls-expr-new-sc-line-generator.template
/*---
description: Static Computed property names (field definitions followed by a method in a new line with a semicolon)
esid: prod-FieldDefinition
features: [computed-property-names, class-fields, generators]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;
      static FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


var C = class {
  static ["a"] = 42; ["a"] = 39;
  *m() { return 42; }

}

var c = new C();

assert.sameValue(c.m().next().value, 42);
assert.sameValue(c.m, C.prototype.m);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);

verifyProperty(C, "a", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});

verifyProperty(c, "a", {
  value: 39,
  enumerable: true,
  writable: true,
  configurable: true
});
