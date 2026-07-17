const jsObject = {
    id: 1,
    hobbies: [{id: 1, title: "gym"}, {id: 2, title: "music"}]
}

// Serialization
const jsonString = JSON.stringify(jsObject);
console.log(jsonString);

// Deserialize
const jsObject2 = JSON.parse(jsonString);
console.log(jsObject2);


const jsStr = ` [
{"id": "pro1"}, {"id": "pro2"}, {"id": "pro3"}, {"id": "pro4"}]`

console.log(JSON.parse(jsStr));