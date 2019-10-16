const ArrayList = function() {
    let size = 0;
    let array = [];

    this.clear = () => {
        array.length = 0;
        size = 0;
    };

    this.init = arr => {
        this.clear();

        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                array[i] = arr[i];
                size++;
            }            
        }
    };

    this.getSize = () => size;

    this.toString = () => {
        let result = '';

        result += '[';
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            
            if (i < array.length - 1) {
                result += ', ';
            }
        }
        result += ']';

        return result;
    }

    this.toArray = () => {
        let result = [];

        return result;
    }

    this.push = number => {
        if (number) {
            arr[arr.length] = number;
            size++;
        }

        return size;
    }

    this.pop = () => {
        let result = undefined;
        
        if (size) {
            result = arr[arr.length - 1];
            arr[arr.length--];
            size--;                        
        }

        return result;
    }

    this.unshift = number => {
        let tempArr = arr;
        let tempArr2 = [];
        let len = tempArr.length + 1;
        
        if (number) {
            for (let i = 0; i < len; i++) {
                if (!i) {
                    tempArr2[i] = number;
                    size++;                  
                } else {
                    tempArr2[i] = tempArr[i - 1];
                }
            }
            arr = tempArr2;
        }

        return size;
    }

    this.shift = () => {
        let result = undefined;
        let tempArr = arr;
        let tempArr2 = [];
        
        if (size) {
            for (let i = 0; i < tempArr.length; i++) {
                if (i) {
                    tempArr2[i - 1] = tempArr[i];
                } else {
                    result = tempArr[i];
                }
            }
            
            arr = tempArr2;
        }

        return result;
    }
}

let arrList = new ArrayList;