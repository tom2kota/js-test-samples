var profile = {
    username: "Tom",
    age: 10,
    coords: {
        lat: 10,
        long: 20
    },
    setAge: function (age) {
        this.age = age;
    }
};
var logProfile = "\n    Name: " + profile.username + ",\n    Age: " + profile.age + ",\n    Coords: (" + profile.coords.lat + ", " + profile.coords.long + ")\n";
console.log(logProfile);
console.log('-----------------------------');
var username = profile.username, age = profile.age;
var _a = profile.coords, lat = _a.lat, long = _a.long;
var logProfileDestructuring = "\n    Name: " + username + ", \n    Age: " + age + ", \n    Coords: (" + lat + ", " + long + ")\n";
console.log(logProfileDestructuring);
