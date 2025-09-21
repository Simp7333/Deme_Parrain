# Copilot Instructions for AI Agents

## Aperçu du projet
Ce projet est une application mobile basée sur Ionic + Angular, organisée autour de modules de pages (ex : `dashboard`, `login`, `profile`, etc.) et de composants réutilisables (dans `components/`). L’architecture suit la structure standard Angular/Ionic, avec navigation par routing et gestion des états via services.

## Points clés d’architecture
- **Pages** : Chaque dossier dans `src/app/` (hors `components/` et `services/`) correspond à une page ou une fonctionnalité majeure, avec ses propres modules, routing et styles.
- **Composants** : Les composants partagés sont dans `src/app/components/`.
- **Services** : Placez la logique métier, appels API, et gestion d’état dans `src/app/services/`.
- **Thème** : Les styles globaux et variables sont dans `src/theme/` et `src/global.scss`.
- **Environnements** : Utilisez `src/environments/` pour gérer les variables selon le contexte (dev/prod).

## Workflows développeur
- **Build** :
  - Développement : `ionic serve`
  - Production : `ionic build --prod`
- **Tests** :
  - Lancement : `ng test`
  - Couverture : `ng test --code-coverage`
- **Déploiement mobile** :
  - Utilisez Capacitor (`npx cap sync`, `npx cap open android/ios`)

## Conventions spécifiques
- **Routing** : Chaque page a son propre module de routing (ex : `dashboard-routing.module.ts`).
- **Nommage** : Respectez le schéma Angular (ex : `*.page.ts`, `*.module.ts`, `*.service.ts`).
- **Styles** : Préférez SCSS par page/composant, variables globales dans `theme/variables.scss`.
- **Communication** : Utilisez des services pour le partage d’état ou la communication inter-composants.
- **Assets** : Placez images et icônes dans `src/assets/`.

## Intégrations & dépendances
- **Ionic** : UI et navigation mobile.
- **Capacitor** : Accès natif (caméra, stockage, etc.).
- **Angular** : Structure, DI, routing, tests.

## Exemples de patterns
- Un service partagé : `src/app/services/`.
- Un composant réutilisable : `src/app/components/app-footer/`.
- Un module de page : `src/app/dashboard/dashboard.module.ts`.

## Conseils pour agents IA
- Respectez la structure modulaire Angular/Ionic.
- Ajoutez les nouveaux services dans `services/` et importez-les dans les modules nécessaires.
- Pour de nouveaux composants, créez un dossier dans `components/` et déclarez-les dans le module partagé.
- Pour toute logique métier, privilégiez les services.
- Vérifiez les imports et le routing lors de l’ajout de nouvelles pages.

Pour toute ambiguïté, demandez des exemples de fichiers ou de conventions spécifiques au projet.