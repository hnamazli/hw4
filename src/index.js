function ArrayList() {
    let size = 0;
    let arr = [];
    let str = '';

    this.init = array => {
        arr = array;
        size = arr.length;
    };

    this.clear = () => {
        arr = [];
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

    this.push = (number) => {
        let result = size;

        if (number || typeof number === 'undefined') {
            arr[arr.length] = number;
            result = arr.length;
            size++;
        } else {
            return result;
        }

        return result;
    }

    this.pop = () => {
        let result = undefined;
        
        if (size > 0) {
            result = arr[arr.length - 1];
            arr[arr.length--];
            size--;                        
        }

        return result;
    }
}

let arrList = new ArrayList;