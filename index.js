const login = function(user){
let message
const key = Object.values(user).join(', ');
message = `Your info: ${key}`;
return message;
}
console.log(
   login({
     name: 'Illia',
     surname: 'Bilishuk',
     email: 'nik333nik888@gmail.com'   
    }) 
)
// console.log('Hello!');






const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
  const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
  const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]