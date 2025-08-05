# Solution pour l'affichage des images sur Netlify

## Problème
Les images n'étaient pas visibles après le build et le déploiement sur Netlify, alors qu'elles fonctionnaient en mode développement local.

## Solution appliquée

### 1. Configuration Vite
- Ajout de `base: './'` dans `vite.config.ts` pour utiliser des chemins relatifs
- Configuration du dossier `publicDir: 'public'` pour copier les assets statiques

### 2. Déplacement des assets
- Les dossiers `img/` et `video/` ont été déplacés dans le dossier `public/`
- Cela permet à Vite de les copier automatiquement dans le build

### 3. Configuration Netlify
- Fichier `netlify.toml` avec les redirections appropriées
- Fichier `public/_redirects` pour gérer les chemins d'accès aux assets

### 4. Correction des chemins
- Tous les chemins d'accès aux images dans `portfolioData.ts` utilisent maintenant `/img/` (chemin absolu)
- Les chemins sont correctement formatés avec des guillemets

## Structure finale
```
public/
├── img/
├── video/
└── _redirects

dist/
├── img/          (copié automatiquement)
├── video/        (copié automatiquement)
├── assets/
└── index.html
```

## Déploiement
1. `npm run build` - génère le dossier `dist/` avec tous les assets
2. Déployer le contenu du dossier `dist/` sur Netlify
3. Les images et vidéos seront maintenant visibles sur le site déployé 