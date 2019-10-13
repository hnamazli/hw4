function ArrayList() {
    let size = 0;
    let arr = [];
    let str = '';

    this.init = array => {
        arr = array;
        size = arr.length;
    };

    this.clear = () => {
        arr.length = 0;
        size = 0;
    };

    this.getSize = () => {
        return size;
    }

    this.toString = () => {
        let result = '';
        result += arr;
        str = result;
        size = 0;

        return result;
    }

    this.toArray = () => {
        let result = [];
        
        result = str.split(',').map(Number);
        arr = result;
        size = result.length;

        return result;
    }

    this.push = number => {

        if (number || typeof number === 'undefined') {
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
        
        if (number || typeof number === 'undefined') {
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