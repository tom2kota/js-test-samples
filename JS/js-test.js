let obj = {
    name: 'Tommy',
    printName() {
        console.log(this.name)
    }
}

let printName = obj.printName
console.log(obj)
// let printName = obj.printName.bind(obj)

printName()
