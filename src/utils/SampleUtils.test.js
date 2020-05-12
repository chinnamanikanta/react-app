/*global expect*/;
import {add} from '.';

describe("add test",() => {
    it("should return sum of two numbers", ()=> {
        expect(add(1,2)).toBe(3);
    });
    it("should not add three numbers", () => {
    expect(add(2, 3, 5)).toEqual(add(2, 3));

  });

    
    
});