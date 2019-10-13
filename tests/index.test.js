describe('init([1, 2, 3])', () => {
    it('should be return undefined', () => {
        const arr = [1, 2, 3];
        const expected = undefined;
        const actual = arrList.init(arr);

        assert.deepEqual(actual, expected);
    });

    it('should be return size 3', () => {
        const expected = 3;
        const actual = arrList.getSize();

        assert.deepEqual(actual, expected);
    });
})

describe('clear', () => {
    it('should be return undefined', () => {
        const expected = undefined;
        const actual = arrList.clear();

        assert.deepEqual(actual, expected);
    });

    it('should be return size 0', () => {
        const expected = 0;
        const actual = arrList.getSize();

        assert.deepEqual(actual, expected);
    });
})

describe('toString', () => {
    it('should be return "1,2,3"', () => {
        arrList.init([1, 2, 3]);
        const expected = "1,2,3";
        const actual = arrList.toString();

        assert.deepEqual(actual, expected);
    });
})

describe('toArray', () => {
     it('should be return [1, 2, 3]', () => {
         const expected = [1, 2, 3];
         const actual = arrList.toArray();
 
         assert.deepEqual(actual, expected);
     });
 })

describe('push', () => {
    it('should be return size 4', () => {
        const expected = 4;
        const actual = arrList.push(5);

        assert.deepEqual(actual, expected);
    });

    it('should be return size 5', () => {
        const expected = 5;
        const actual = arrList.push(undefined);

        assert.deepEqual(actual, expected);
    });
})

describe('pop', () => {
    it('should be return last element is undefined', () => {
        const expected = undefined;
        const actual = arrList.pop();

        assert.deepEqual(actual, expected);
    });

    it('should be return last element is 5', () => {
        const expected = 5;
        const actual = arrList.pop();

        assert.deepEqual(actual, expected);
    });

    it('should be return last element is 3', () => {
        const expected = 3;
        const actual = arrList.pop();

        assert.deepEqual(actual, expected);
    });

    it('should be return last element is 2', () => {
        const expected = 2;
        const actual = arrList.pop();

        assert.deepEqual(actual, expected);
    });

    it('should be return last element is 1', () => {
        const expected = 1;
        const actual = arrList.pop();

        assert.deepEqual(actual, expected);
    });

    it('should be return undefined (not element)', () => {
        const expected = undefined;
        const actual = arrList.pop();

        assert.deepEqual(actual, expected);
    });
})