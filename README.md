luxima

Déploiement Netlify
-------------------

1. Connecte ton dépôt GitHub (`https://github.com/mctaylormac/luxima-main`) à Netlify.
2. Paramètres de build recommandés :
	- Commande de build : `npm run build`
	- Dossier publish : `dist`
3. Netlify Forms est activé pour le formulaire de contact (`data-netlify="true"`). Une page de confirmation est disponible à `/thank-you`.

Notes
-----
- Assure-toi que la variable d'environnement `NODE_ENV` est définie à `production` (gérée par `netlify.toml`).
- Si tu préfères déployer via GitHub Actions ou autre CI, dis-moi et je peux ajouter un workflow.
