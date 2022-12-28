const path = require('path');

// pour des imports plus propres dans nos fichiers
// on défini l'utilisation "@" devant le dossier source
// cf: README-IMPORTANT.md
module.exports = {
    webpack: {
        alias: {
            '@' : path.resolve(__dirname, 'src'),
        },
    },
};