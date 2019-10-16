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