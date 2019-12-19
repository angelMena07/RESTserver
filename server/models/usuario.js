const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let roleValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'el nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'el correo es necesario']
    },
    password: {
        type: String,
        required: [true, ' la contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: roleValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false

    },
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObejct = user.toObject();
    delete userObejct.password;

    return userObejct;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('usuario', usuarioSchema);