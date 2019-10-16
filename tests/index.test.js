describe('ArrayList instance', () => {
    it('should be an Object', () => {
        const alist = new ArrayList();
        
        assert.isObject(alist);
    });
});

describe('ArrayList.clear', () => {
    it('should be return size = 0 (undefined)', () => {
        const alist = new ArrayList();
        const expectedSize = 0;

        alist.clear();
        
        assert.deepEqual(alist.getSize(), expectedSize);
    });

    it('should be return size = 0 ([])', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expectedSize = 0;
        const expectedString = '[]';

        alist.clear();
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1])', () => {
        const alist = new ArrayList();
        const arr = [1];
        alist.init(arr);
        const expectedSize = 0;
        const expectedString = '[]';

        alist.clear();
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1, 2])', () => {
        const alist = new ArrayList();
        const arr = [1, 2];
        alist.init(arr);
        const expectedSize = 0;
        const expectedString = '[]';

        alist.clear();
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1, 2, 3, 4, 5])', () => {
        const alist = new ArrayList();
        const arr = [1, 2, 3, 4, 5];
        alist.init(arr);
        const expectedSize = 0;
        const expectedString = '[]';

        alist.clear();
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1, 2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const arr = [1, 2, 3, 4, 5, 6];
        alist.init(arr);
        const expectedSize = 0;
        const expectedString = '[]';

        alist.clear();
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });
});

describe('ArrayList.init', () => {
    it('should be return size = 0 (undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        const expectedSize = 0;
        const expectedString = '[]';

        alist.init(arr);
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([])', () => {
        const alist = new ArrayList();
        const expectedSize = 0;
        const expectedString = '[]';
        const arr = [];

        alist.init(arr);
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1])', () => {
        const alist = new ArrayList();
        const expectedSize = 1;
        const expectedString = '[1]';
        const arr = [1];

        alist.init(arr);
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1, 2])', () => {
        const alist = new ArrayList();
        const expectedSize = 2;
        const expectedString = '[1, 2]';
        const arr = [1, 2];

        alist.init(arr);
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1, 2, 3, 4, 5])', () => {
        const alist = new ArrayList();
        const expectedSize = 5;
        const expectedString = '[1, 2, 3, 4, 5]';
        const arr = [1, 2, 3, 4, 5];
        
        alist.init(arr);
        
        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ([1, 2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const expectedSize = 6;
        const expectedString = '[1, 2, 3, 4, 5, 6]';
        const arr = [1, 2, 3, 4, 5, 6];

        alist.init(arr);

        assert.deepEqual(alist.getSize(), expectedSize);
        assert.deepEqual(alist.toString(), expectedString);
    });
});

describe('ArrayList.toString', () => {
    it('should be return \'[]\' (undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        alist.init(arr);
        const expectedString = '[]';

        const actual = alist.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should be return \'[]\' (0)', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expectedString = '[]';

        const actual = alist.toString();

        assert.deepEqual(actual, expectedString);
    });

    it('should be return \'[1]\' ([1])', () => {
        const alist = new ArrayList();
        const expectedString = '[1]';
        const arr = [1];
        alist.init(arr);

        const actual = alist.toString();
        
        assert.deepEqual(actual, expectedString);
    });

    it('should be return \'[1, 2]\' ([1, 2])', () => {
        const alist = new ArrayList();
        const expectedString = '[1, 2]';
        const arr = [1, 2];
        alist.init(arr);

        const actual = alist.toString();
        
        assert.deepEqual(actual, expectedString);
    });

    it('should be return \'[1, 2, 3, 4, 5]\' ([1, 2, 3, 4, 5])', () => {
        const alist = new ArrayList();
        const expectedString = '[1, 2, 3, 4, 5]';
        const arr = [1, 2, 3, 4, 5];
        alist.init(arr);

        const actual = alist.toString();
        
        assert.deepEqual(actual, expectedString);
    });

    it('should be return \'[1, 2, 3, 4, 5, 6]\' ([1, 2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const expectedString = '[1, 2, 3, 4, 5, 6]';
        const arr = [1, 2, 3, 4, 5, 6];
        alist.init(arr);

        const actual = alist.toString();

        assert.deepEqual(actual, expectedString);
    });
});

describe('ArrayList.toArray', () => {
    it('should be return [] (undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        alist.init(arr);
        const expected = [];

        const actual = alist.toArray();

        assert.deepEqual(actual, expected);
    });

    it('should be return [] (0)', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expected = [];

        const actual = alist.toArray();

        assert.deepEqual(actual, expected);
    });

    it('should be return [1] ([1])', () => {
        const alist = new ArrayList();
        const expected = [1];
        const arr = [1];
        alist.init(arr);

        const actual = alist.toArray();
        
        assert.deepEqual(actual, expected);
    });

    it('should be return [1, 2] ([1, 2])', () => {
        const alist = new ArrayList();
        const expected = [1, 2];
        const arr = [1, 2];
        alist.init(arr);

        const actual = alist.toArray();
        
        assert.deepEqual(actual, expected);
    });

    it('should be return [1, 2, 3, 4, 5] ([1, 2, 3, 4, 5])', () => {
        const alist = new ArrayList();
        const expected = [1, 2, 3, 4, 5];
        const arr = [1, 2, 3, 4, 5];
        alist.init(arr);

        const actual = alist.toArray();
        
        assert.deepEqual(actual, expected);
    });

    it('should be return [1, 2, 3, 4, 5, 6] ([1, 2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const expected = [1, 2, 3, 4, 5, 6];
        const arr = [1, 2, 3, 4, 5, 6];
        alist.init(arr);

        const actual = alist.toArray();

        assert.deepEqual(actual, expected);
    });
});

describe('ArrayList.push', () => {
    it('should be return size = 0 (undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        alist.init(arr);
        const expected = 0;
        const expectedString = '[]';

        const actual = alist.push(undefined);

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 0 ()', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expected = 0;
        const expectedString = '[]';

        const actual = alist.push();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 2 (2)', () => {
        const alist = new ArrayList();
        const expected = 2;
        const expectedString = '[1, 2]';
        const arr = [1];
        alist.init(arr);

        const actual = alist.push(2);
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 3 (3)', () => {
        const alist = new ArrayList();
        const expected = 3;
        const expectedString = '[1, 2, 3]';
        const arr = [1, 2];
        alist.init(arr);

        const actual = alist.push(3);
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 6 (6)', () => {
        const alist = new ArrayList();
        const expected = 6;
        const expectedString = '[1, 2, 3, 4, 5, 6]';
        const arr = [1, 2, 3, 4, 5];
        alist.init(arr);

        const actual = alist.push(6);
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 7 (7)', () => {
        const alist = new ArrayList();
        const expected = 7;
        const expectedString = '[1, 2, 3, 4, 5, 6, 7]';
        const arr = [1, 2, 3, 4, 5, 6];
        alist.init(arr);

        const actual = alist.push(7);

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });
});

describe('ArrayList.pop', () => {
    it('should be return undefined (arr = undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        alist.init(arr);
        const expected = undefined;
        const expectedString = '[]';

        const actual = alist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return undefined ([])', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expected = undefined;
        const expectedString = '[]';

        const actual = alist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return last element 1 ([1])', () => {
        const alist = new ArrayList();
        const expected = 1;
        const expectedString = '[]';
        const arr = [1];
        alist.init(arr);

        const actual = alist.pop();
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return last element 2 ([1, 2])', () => {
        const alist = new ArrayList();
        const expected = 2;
        const expectedString = '[1]';
        const arr = [1, 2];
        alist.init(arr);

        const actual = alist.pop();
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return last element 5 ([1, 2, 3, 4, 5])', () => {
        const alist = new ArrayList();
        const expected = 5;
        const expectedString = '[1, 2, 3, 4]';
        const arr = [1, 2, 3, 4, 5];
        alist.init(arr);

        const actual = alist.pop();
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return last elemnt 6 ([1, 2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const expected = 6;
        const expectedString = '[1, 2, 3, 4, 5]';
        const arr = [1, 2, 3, 4, 5, 6];
        alist.init(arr);

        const actual = alist.pop();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });
});

describe('ArrayList.unshift', () => {
    it('should be return size = 0 (arr = undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        alist.init(arr);
        const expected = 0;
        const expectedString = '[]';

        const actual = alist.unshift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size 1 ([])', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expected = 1;
        const expectedString = '[1]';

        const actual = alist.unshift(1);

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 2 ([1])', () => {
        const alist = new ArrayList();
        const expected = 2;
        const expectedString = '[2, 1]';
        const arr = [1];
        alist.init(arr);

        const actual = alist.unshift(2);
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 3 ([1, 2])', () => {
        const alist = new ArrayList();
        const expected = 3;
        const expectedString = '[3, 1, 2]';
        const arr = [1, 2];
        alist.init(arr);

        const actual = alist.unshift(3);
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 5 ([1, 2, 3, 4])', () => {
        const alist = new ArrayList();
        const expected = 5;
        const expectedString = '[5, 1, 2, 3, 4]';
        const arr = [1, 2, 3, 4];
        alist.init(arr);

        const actual = alist.unshift(5);
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });

    it('should be return size = 6 ([1, 2, 3, 4, 5])', () => {
        const alist = new ArrayList();
        const expected = 6;
        const expectedString = '[6, 1, 2, 3, 4, 5]';
        const arr = [1, 2, 3, 4, 5];
        alist.init(arr);

        const actual = alist.unshift(6);

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
    });
});

describe('ArrayList.shift', () => {
    it('should be return undefined (arr = undefined)', () => {
        const alist = new ArrayList();
        const arr = undefined;
        alist.init(arr);
        const expected = undefined;
        const expectedSize = 0;
        const expectedString = '[]';

        const actual = alist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
        assert.deepEqual(alist.getSize(), expectedSize);
    });

    it('should be return undefined ([])', () => {
        const alist = new ArrayList();
        const arr = [];
        alist.init(arr);
        const expected = undefined;
        const expectedSize = 0;
        const expectedString = '[]';

        const actual = alist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
        assert.deepEqual(alist.getSize(), expectedSize);
    });

    it('should be return first element 5 ([5])', () => {
        const alist = new ArrayList();
        const expected = 5;
        const expectedString = '[]';
        const expectedSize = 0;
        const arr = [5];
        alist.init(arr);

        const actual = alist.shift();
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
        assert.deepEqual(alist.getSize(), expectedSize);
    });

    it('should be return first element 3 ([3, 1])', () => {
        const alist = new ArrayList();
        const expected = 3;
        const expectedString = '[1]';
        const expectedSize = 1;
        const arr = [3, 1];
        alist.init(arr);

        const actual = alist.shift();
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
        assert.deepEqual(alist.getSize(), expectedSize);
    });

    it('should be return first element 2 ([2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const expected = 2;
        const expectedString = '[3, 4, 5, 6]';
        const expectedSize = 4;
        const arr = [2, 3, 4, 5, 6];
        alist.init(arr);

        const actual = alist.shift();
        
        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
        assert.deepEqual(alist.getSize(), expectedSize);
    });

    it('should be return first element 1 ([1, 2, 3, 4, 5, 6])', () => {
        const alist = new ArrayList();
        const expected = 1;
        const expectedString = '[2, 3, 4, 5, 6]';
        const expectedSize = 5;
        const arr = [1, 2, 3, 4, 5, 6];
        alist.init(arr);

        const actual = alist.shift();

        assert.deepEqual(actual, expected);
        assert.deepEqual(alist.toString(), expectedString);
        assert.deepEqual(alist.getSize(), expectedSize);
    });
});