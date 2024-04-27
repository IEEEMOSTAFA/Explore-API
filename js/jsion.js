const user = { id: 1,name: 'mostafa',job : 'engineer'};
// JavaScript Object Notation(JSON)
 const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
const shop = {
    owner : 'Alia',
    address: {
        street: 'Kashmir restaurant',
        city: 'Islamabad',
        country : 'BD'
    },
    products: ['laptop','mic','monitor','keyboard'],
    revenur : 45000,
    isOpen : true,
    isNew : false
}
// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);