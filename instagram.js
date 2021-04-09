  
const { Usuario, Post, Comentario, sequelize } = require('./models');



Usuario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});


Usuario.findByPk(3)
.then((resultado) => {
    console.log(resultado);
});

Usuario.findOne({
    where: {
        nome: 'Felipe'
    }
})
.then((resultado) => {
    console.log(resultado);
});


Post.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});

Post.findByPk(2)
.then((resultado) => {
    console.log(resultado);
});

Post.findOne({
    where: {
       id: 1
    }
})
.then((resultado) => {
    console.log(resultado);
});
Comentario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
})
Comentario.findByPk(6)
.then((resultado) => {
    console.log(resultado);
});

Comentario.findOne({
    where: {
       id: 1
    }
})
.then((resultado) => {
    console.log(resultado);
})