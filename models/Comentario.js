module.exports = (sequelize, DataTypes) => {

    const Comentario = sequelize.define(
        "Comentario",{
            texto: DataTypes.STRING
     
            }, {
            tableName: "comentarios",
            timestamps: false 
            }
    );

         return Comentario;
  }