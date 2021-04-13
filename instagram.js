  
const { Usuario, Post, Comentario, sequelize } = require('./models');
const {Op} = require('sequelize');


/*Usuario.findAll()
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
});


Usuario.findByPk(3)
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
});

Usuario.findOne({
    where: {
        nome: 'Felipe'
    }
})
.then((resultado) => {
 console.log(resultado.map(usuario => usuario.toJSON()));
});


/*Post.findAll()
.then((resultado) => {
    console.log(resultado.map(post => post.toJSON()));
});


Post.findAll({
    where: {
        texto: {[Op.like]: '%Oi%'}
    }
})
.then((resultado) => {
    console.log(resultado.map(post => post.toJSON()));
})
Usuario.findAll({
    order: [  
        [ 'id', 'ASC']
    ],
    limit: 2,
    offset:2
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
})

Post.findByPk(2)
.then((resultado) => {
    console.log(resultado.map(post => post.toJSON()));
});

Post.findOne({
    where: {
       id: 1
    }
})
.then((resultado) => {
     console.log(resultado.map(post => post.toJSON()));
});

Comentario.findAll()
.then((resultado) => {
   console.log(resultado.map(comentario => comentario.toJSON()));
})

Comentario.findByPk(6)
.then((resultado) => {
   console.log(resultado.map(comentario => comentario.toJSON()));
});

Comentario.findOne({
    where: {
       id: 1
    }
})
console.log(resultado.map(comentario => comentario.toJSON()));
})
*/
/*
Usuario.findAll({
    where: {
        nome: {[Op.like]: '%a%'}
    }
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
})
Usuario.findAll({
    where: {
        nome: {[Op.notLike]: '%a%'}
    }
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
})

for (let i = 0; i < 6; i += 2 ){  
Comentario.findAll({
   order: [ 
         ['id', 'DESC']
   ],
   
   limit: 2,
   offset:i,
})
.then((resultado) => {
    console.log(resultado.map(comentario => comentario.toJSON()));
})
}
*/
 // Usuario.create({
 //    nome: 'Natalia',
 //    email: 'nat@digitalhouse.com',
 //    senha: 'maravilhosaaaa123'
 //}).then((resultado) => {
 //    console.log(resultado.toJSON());
 //});
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

/*
     Usuario.create({
       nome: 'Rodrigo',
        email: 'rodrigo@email.com',
       senha: 'rod123'
    }).then((resultado) => {
       console.log(resultado.toJSON());
    });

    Usuario.create({
        nome: 'Herbert',
         email: 'herbertpaes@email.com',
        senha: 'hp123123'
     }).then((resultado) => {
        console.log(resultado.toJSON());
     });

     Usuario.create({
        nome: 'Anna',
         email: 'annalice@email.com',
        senha: 'al123'
     }).then((resultado) => {
        console.log(resultado.toJSON());
     });
     Usuario.create({
         nome: 'Petter',
          email: 'pettermar@email.com',
         senha: 'pm1234'
      }).then((resultado) => {
         console.log(resultado.toJSON());
      });

      Usuario.create({
        nome: 'Gustavo',
         email: 'gustavo@email.com',
        senha: 'gust123'
     }).then((resultado) => {
        console.log(resultado.toJSON());
     });

     Usuario.create({
         nome: 'Adriana',
          email: 'adrianar@email.com',
         senha: 'adr123'
      }).then((resultado) => {
         console.log(resultado.toJSON());
      });
*/
  
/*
Post.create({
    texto:'Parabéns?',
    usuarios_id: 5,
    n_likes: 100
})
    .then((resultado) => {
    console.log(resultado);
    
    })
*/
/*
    Post.destroy({
           where: {
          nome: 'Adrina'
         }
        }).then((resultado) => {
            console.log(resultado);
         })
         
         
         Usuario.update({
                email: ' sergiosdev@digitalhouse.com'
        }, {
             where: {
                    id: 2
                }
            }).then((resultado) => {
               console.log(resultado);
            })
            */
           
           // Usuario.findAll().then((usuarios) => {
            //    console.log(usuarios.map((usuario) => usuario.toJSON()));
          //    })

        //Usuario.finByPk(1, {
            //  include: [
           //       {association :"posts"}
         //     ]
        //  })
       //   .then((usuario) => {
      //        console.table(usuario.posts.map((post) => post.toJSON1()))
      //    }) 

          //outro jeito
           
       //    Usuario.findByPk(1, {include:['posts']}).then(usuario => {
         //       console.log(usuario.toJSON());
         //       sequelize.close();
        //    })
      
        
        //Post.findByPk(1, {include:['comentarios']}).then(post => {
       //         console.log(post.toJSON());
         //       sequelize.close();
        //    }
      //  )
    /*
        Post.findByPk(1, {include:['curtiu']}).then(post => {
                console.log(post.toJSON());
               sequelize.close();
           }
        )
        */
        Post.findByPk(1, {include:['curtiu']}).then(usuario => {
            console.log(usuario.toJSON());
           sequelize.close();
       }
    )