//Objective is to design a class that can flatten a 2D array and has 2 methods:
//next: returns the next element in the flattened array
//hasNext: returns if there is a following element


//Design that uses dfs to create the flattened array

class Flatten {
    constructor() {
        this.arr = []
        this.index = 0

        const dfs = (list) => {
            for (let element of list) {
                if (Array.isArray(element)) {
                    dfs(element)
                } else {
                    this.arr.push(element)
                }
            }
        }
        dfs(v)
    }

    next() {
        return this.arr[this.index++]
    }

    hasNext() {
        return this.arr.length > this.index
    }
}

let iterator = new Flatten([[1,2],[3],[4]])
iterator.next() 
iterator.next() 
iterator.next()
iterator.hasNext()
iterator.hasNext()
iterator.next()
iterator.hasNext()