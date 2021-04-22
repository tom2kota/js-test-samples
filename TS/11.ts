const profile = {
    username: "Tom",
    age: 10,
    coords: {
        lat: 10,
        long: 20
    },
    setAge(age: number): void {
        this.age = age
    }
}

let logProfile = `
    Name: ${profile.username},
    Age: ${profile.age},
    Coords: (${profile.coords.lat}, ${profile.coords.long})
`
console.log(logProfile)
console.log('-----------------------------')

let {username, age}: { username: string; age: number } = profile
let {coords: {lat, long}}: { coords: { lat: number; long: number } } = profile
let logProfileDestructuring = `
    Name: ${username}, 
    Age: ${age}, 
    Coords: (${lat}, ${long})
`
console.log(logProfileDestructuring)
