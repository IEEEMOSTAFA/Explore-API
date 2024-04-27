// alert('index is running');
function loadUsers2(){
    // console.log('button handler');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data));
}
// function displayUsers2(users){
//     // alert('you go wrong approach');
//     // console.log(data)
//     for(const user of users){
//         // console.log(user);
//         // console.log(user.name);
//         // console.log(user.email);
//         // console.log(user.id);
//         console.log(user.username);
//     }

// }
function displayUsers2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = 'Mostafa';
        li.innerText = user.name;
        ul.appendChild(li);
    }
}