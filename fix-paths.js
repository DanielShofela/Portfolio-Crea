const fs = require('fs');

// Lire le fichier
let content = fs.readFileSync('data/portfolioData.ts', 'utf8');

// Corriger tous les chemins d'accès aux images
content = content.replace(/thumbnailUrl: \/img\//g, 'thumbnailUrl: \'/img/');
content = content.replace(/contentUrl: \/img\//g, 'contentUrl: \'/img/');

// Écrire le fichier corrigé
fs.writeFileSync('data/portfolioData.ts', content, 'utf8');

console.log('Chemins d\'accès aux images corrigés !'); 