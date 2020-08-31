let obj = {
    name: 'Tommy',
    printName() {
        console.log(this.name)
    }
}

let printName = obj.printName

printName()
