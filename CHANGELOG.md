# Journal des changements

| Fichier | Modification | Raison |
| --- | --- | --- |
| `index.html` | Mise à jour des balises meta, du titre et de l'image OG. Suppression des références à Lovable. | Nettoyer les dépendances à Lovable et fournir des informations de SEO adaptées au site. |
| `public/lovable-uploads/` → `public/assets/` | Renommage du dossier et déplacement des images. | Supprimer le nom de dossier spécifique à Lovable. |
| `src/pages/Index.tsx` | Mise à jour du chemin d'image pour l'arrière‑plan (`/lovable-uploads/…` → `/assets/…`). | Réflète le renommage du dossier d'images. |
| `src/components/Portfolio.tsx` | Mise à jour des chemins d'image pour toutes les vignettes. | Adapter aux nouveaux emplacements des fichiers image. |
| `src/components/Testimonials.tsx` | Mise à jour du chemin d'image de fond. | Adapter aux nouveaux emplacements des fichiers image. |
| `vite.config.ts` | Suppression de l'import et du plugin `lovable-tagger`. | Supprimer toute dépendance à Lovable. |
| `package.json` | Suppression de `lovable-tagger` des `devDependencies`. | Retirer la dépendance de développement inutilisée. |
| `README.md` | Réécriture complète du fichier. | Fournir des instructions claires et indépendantes de Lovable. |
| `MIGRATION_NOTES.md` | Nouveau fichier ajouté. | Documenter les modifications apportées lors de la migration hors de Lovable. |