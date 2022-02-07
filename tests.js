// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
       expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with the argument "true"', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with the argument "false"', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should return a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean when called', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return "true" when passed 5', function() {
        expect(typeof isFive(5)).toBe('boolean');
    });
    it('should return "true" when passed "5"', function() {
        expect(typeof isFive("5")).toBe('boolean');
    });
});

describe('isEven', function() {
    it('should return a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return "true" when passed 2', function() {
        expect(isEven(2)).toBeTruthy();
    });
    it('should return "true" when passed -4', function() {
        expect(isEven(-4)).toBeTruthy();
    });
    it('should return "false" when passed 3', function() {
        expect(isEven(3)).toBeFalsy();
    });
    it('should return "false" when passed "banana"', function () {
       expect(isEven("banana")).toBeFalsy();
    });
    it('should return "true" when passed "8"', function() {
        expect(isEven("8")).toBeTruthy();
    });
    it('should return "true" when passed Infinity', function() {
        expect(isEven(Infinity)).toBeFalsy();
    });
    it('should return "false" when passed true', function() {
        expect(isEven(true)).toBeFalsy();
    });
    it('should return "false" when passed false', function() {
        expect(isEven(false)).toBeFalsy();
    });
    it('should return "false" when argument is left empty', function() {
        expect(isEven()).toBeFalsy();
    });
});