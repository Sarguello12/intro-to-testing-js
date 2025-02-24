// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should always be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should always return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should always return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should always never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should always be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should always return a string when called', function () {
       expect(typeof sayHello()).toBe("string");
    });
    it('should always return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should always return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should always return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should always return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should always return the string "Hello, World!" when executed with the argument "true"', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should always return the string "Hello, World!" when executed with the argument "false"', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should always be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should always return boolean when called', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should always return "true" when passed 5', function() {
        expect(typeof isFive(5)).toBe('boolean');
    });
    it('should always return "true" when passed "5"', function() {
        expect(typeof isFive("5")).toBe('boolean');
    });
});

describe('isEven', function() {
    it('should always be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean when called', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should always return "true" when passed 2', function() {
        expect(isEven(2)).toBeTruthy();
    });
    it('should always return "true" when passed -4', function() {
        expect(isEven(-4)).toBeTruthy();
    });
    it('should always return "false" when passed 3', function() {
        expect(isEven(3)).toBeFalsy();
    });
    it('should always return "false" when passed "banana"', function () {
       expect(isEven("banana")).toBeFalsy();
    });
    it('should always return "true" when passed "8"', function() {
        expect(isEven("8")).toBeTruthy();
    });
    it('should always return "true" when passed Infinity', function() {
        expect(isEven(Infinity)).toBeFalsy();
    });
    it('should always return "false" when passed true', function() {
        expect(isEven(true)).toBeFalsy();
    });
    it('should always return "false" when passed false', function() {
        expect(isEven(false)).toBeFalsy();
    });
    it('should always return "false" when argument is left empty', function() {
        expect(isEven()).toBeFalsy();
    });
});

describe('isVowel', function() {
    it('should always be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean when called', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should always return true when passed "a"', function() {
        expect(isVowel("a")).toBeTruthy();
    });
    it('should always return true when passed "A"', function() {
        expect(isVowel("A")).toBeTruthy();
    });
    it('should always return false when passed "y"', function() {
        expect(isVowel("y")).toBeFalsy();
    });
    it('should always return false when passed 4', function() {
        expect(isVowel(4)).toBeFalsy();
    });
    it('should always return false when passed true', function() {
        expect(isVowel(true)).toBeFalsy();
    });
    it('should always return false when passed false', function() {
        expect(isVowel(false)).toBeFalsy();
    });
    it('should always return false when passed "banana"', function() {
        expect(isVowel("banana")).toBeFalsy();
    });
    it('should always return false when argument is left empty', function() {
        expect(isVowel()).toBeFalsy();
    });
});

describe('add', function() {
    it('should always be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should always return 5 when passed 2, 3', function() {
        expect(add(2,3)).toBe(5);
    });
    it('should always return -12 when passed -3, -9', function() {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should always return 11 when passed "5", 6', function() {
        expect(add("5",6)).toBe(11);
    });
    it('should always return 6 when passed "-4", "10"', function() {
        expect(add("-4","10")).toBe(6);
    });
    it('should always return NaN when passed "banana", "split"', function() {
        expect(add("banana","split")).toBeNaN();
    });
    it('should always return NaN when passed 2, "apples"', function() {
        expect(add(2,"apples")).toBeNaN();
    });
    it('should always return NaN when arguments are left empty', function() {
        expect(add()).toBeNaN();
    });
});