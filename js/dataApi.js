let texto = document.getElementById('testimonio');

// MÉTODO PARA OBTENER POSTS
async function getPosts(id) {

    return await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((resp) => {
            return resp.json();
        })
        .then((post) => {
            for (let i = 0; i < 4; i++) {
                return post;
            }
        }).catch((error) => {
            console.log('ERROR: ', error);
        });
}

// MÉTODO PARA OBTENER USUARIOS
async function getUsers() {
     console.log("Costos")
     const costos=[
        {
            tipo:"Comunidad UABJO",
            precio:"$500"
        },
        {
            tipo:"Escuela de Ciencias",
            precio:"$300"
        },
        {
            tipo:"Exterior UABJO",
            precio:"$800"
        }
]
for (let i = 0; i < costos.length; i++) {
    const precio = costos[i];
    console.log(precio.tipo)
    let string = '';
    string += ` <p class="text-center sliderText fs-1">${precio.tipo}</p>`;
    string += `<p class="text-center fs-2"><b>${precio.precio}</b></p>`;
    string += `</div>`;
    texto.innerHTML += string;
}

/*    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((resp) => {
            return resp.json();
        })
        .then((user) => {
            console.log(user)
            const costos=[
                {
                    tipo:"Comunidad UABJO",
                    precio:"$500"
                },
                {
                    tipo:"Escuela de Ciencias",
                    precio:"$300"
                },
                {
                    tipo:"Exterior UABJO",
                    precio:"$800"
                }
        ]
        for (let i = 0; i < costos.length; i++) {
            const costo = array[i];
            let string = '';
            string += ` <p class="text-center sliderText">${costo.tipo}</p>`;
            string += `<p class="text-center"><b>${costo.precio}</b></p>`;
            string += `</div>`;

            texto.innerHTML += string;
            
        }
    }
            for (let i = 0; i < 2; i++) {
                const usuario = costos[i];
                //getPosts(usuario.id).then(resp => {
                     usuario.posts = resp;
                    user[i] = usuario; 
                    let string = '';
 
                    if (user[i].id === 1) {
                        string += `
                            <div class="carousel-item active">
                                <img class="d-block mx-auto" src="images/person_${i + 1}.jpg" alt=""> 
                        `;
                    } else {
                        string += `
                            <div class="carousel-item">
                                <img class="d-block mx-auto" src="images/person_${i + 1}.jpg" alt=""> 
                        `;
                    }

                     string += ` <p class="text-center sliderText">${usuario.posts[0].body}</p>`;
                    string += `<p class="text-center"><b>${usuario.name}</b></p>`;
                    string += `</div>`; 
                    string += ` <p class="text-center sliderText">${usuario.tipo}</p>`;
                    string += `<p class="text-center"><b>${usuario.precio}</b></p>`;
                    string += `</div>`;

                    texto.innerHTML += string;

                    ;
                //});
            }
        }).catch((error) => {
            console.log('ERROR: ', error);
        }); */
}

getUsers();