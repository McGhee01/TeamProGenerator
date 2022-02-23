module.exports = function generateHTML(data) {
    var teammembersHtml="";

    for( let i=0;i< data.length; i++){ 
  var cardtext =`<div class="card" style="width: 18rem;">
  <img> class="card-img-top" src="..." alt="Card image cap"</img>
  <div class="card-body">
    <h5 class="Manager">Manager</h5>
    <p class="card-text">${data[i].name}</p>
    <p class="card-text">${data[i].id}</p>
    <p class="card-text">${data[i].email}</p>
    <p class="card-text">${data[i].getName}</p>
    <p class="card-text">${data[i].getId}</p>
    <p class="card-text">${data[i].getEmail}</p>
    <p class="card-text">${data[i].getRole}</p>
  </div>
</div>`
teammembersHtml+=cardtext
    }
    return teammembersHtml
  }
// `<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="Engineer">Engineer</h5>
//     <p class="card-text">${/* put variable inside from data for each}a>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`

// `<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="Engineer">Engineer</h5>
//     <p class="card-text">${/* put variable inside from data for each}</*/a>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// `<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="Engineer">Engineer</h5>
//     <p class="card-text">${/* put variable inside from data for each}</*/a>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`

// `<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="Intern">Intern</h5>
//     <p class="card-text">${/* put variable inside from data for each}</*/a>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`

//     }


//     return `


//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <title>Team Profile</title>
// </head>
// <body>
//     <nav class="navbar navbar-dark bg-dark mb-5">
//         <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
//     </nav>
//     <div class="container">
//         <div class="row">
//             <div class="col-6">
//                 <div class="card mx-auto" style="width: 18rem">
//                     <h5 class="card-header">Yah'Mir McGhee<br /><br />Engineer</h5>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID</li>
//                         <li class="list-group-item">email</li>
//                         <li class="list-group-item">GitHub</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
    
// </body>
// </html>

// you need a function for your cards and your HTMLAllCollection. HTML comes FileSystemDirectoryEntry, then your cards. make sure when you go to generate your cards, you have to make sure your doing it for each card. Use for each loop.