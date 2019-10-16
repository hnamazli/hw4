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

    this.toArray = () => array;

    this.push = number => {
        if (number) {
            array[array.length] = number;
            size++;
        }

        return size;
    }

    this.pop = () => {
        let result = undefined;
        
        if (size) {
            result = array[array.length - 1];
            array[array.length--];
            size--;
        }

        return result;
    }

    this.unshift = number => {       
        if (number) {
            let tempArr = [];

            for (let i = 0; i <= array.length; i++) {
                if (i) {
                    tempArr[i] = array[i - 1];       
                } else {
                    tempArr[i] = number;
                }
            }

            array = tempArr;
            size++;
        }

        return size;
    }

    this.shift = () => {
        let result = undefined;
        let tempArr = [];
        
        if (size) {
            for (let i = 0; i < array.length; i++) {
                if (i) {
                    tempArr[i - 1] = array[i];
                } else {
                    result = array[i];
                }
            }
            
            array = tempArr;
            size--;
        }

        return result;
    }
}