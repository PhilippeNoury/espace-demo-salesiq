# Mini‑site de démo — Intégration Zoho SalesIQ

Ce dépôt contient un site statique minimal (4 pages) pour tester l’intégration du widget de chat **Zoho SalesIQ**.

## Fichiers
- `index.html` — Page d’accueil
- `abonnement.html` — Page d’offres (Essentiel & Premium)
- `atelier.html` — Page atelier « Parcours client »
- `accompagnement.html` — Page d’accompagnement « pratiques éco‑responsables »
- `styles.css` — Styles simples et responsives

## Intégration Zoho
Dans **chaque fichier HTML**, cherchez le commentaire :
```html
<!-- 🔌 Zoho SalesIQ: Collez ICI votre script fourni par Zoho -->
```
Collez votre script juste au‑dessus de `</body>`.

## Déploiement sur GitHub Pages
1. Créez un dépôt public et uploadez ces fichiers à la racine.
2. Dans **Settings > Pages**, choisissez **Deploy from a branch** puis la branche `main` et le dossier `/ (root)`.
3. Votre site sera disponible sous `https://<votre-pseudo>.github.io/<nom-du-depot>/`.
