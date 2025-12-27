# Guide de contribution

Merci de votre intérêt pour contribuer à ProCureHub! 🎉

## Comment contribuer

### Signaler un bug

1. Vérifiez qu'il n'existe pas déjà dans les Issues
2. Créez une nouvelle Issue avec:
   - Description claire du problème
   - Étapes pour reproduire
   - Comportement attendu vs actuel
   - Screenshots si applicable
   - Environnement (navigateur, OS)

### Proposer une fonctionnalité

1. Ouvrez une Issue avec le tag "enhancement"
2. Décrivez la fonctionnalité
3. Expliquez pourquoi elle serait utile
4. Proposez une implémentation si possible

### Soumettre du code

1. **Fork le projet**
   ```bash
   git clone https://github.com/VOTRE-USERNAME/procurehub.git
   cd procurehub
   ```

2. **Créer une branche**
   ```bash
   git checkout -b feature/ma-fonctionnalite
   # ou
   git checkout -b fix/mon-correctif
   ```

3. **Faire vos modifications**
   - Suivez le style du code existant
   - Commentez le code complexe
   - Testez vos changements

4. **Commit**
   ```bash
   git add .
   git commit -m "feat: ajout de la fonctionnalité X"
   # ou
   git commit -m "fix: correction du bug Y"
   ```

5. **Push**
   ```bash
   git push origin feature/ma-fonctionnalite
   ```

6. **Pull Request**
   - Allez sur GitHub
   - Créez une Pull Request
   - Décrivez vos changements
   - Liez les Issues concernées

## Standards de code

### TypeScript
- Utiliser des types explicites
- Éviter `any`
- Utiliser des interfaces pour les objets complexes

### React
- Composants fonctionnels avec hooks
- Noms en PascalCase pour les composants
- Props typés avec TypeScript

### Style
- Tailwind CSS pour le styling
- Classes utilitaires réutilisables
- Responsive design (mobile-first)

### Commits
Format: `type: description`

Types:
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatting, pas de changement de code
- `refactor`: Refactoring
- `test`: Ajout de tests
- `chore`: Maintenance

Exemples:
```
feat: ajouter filtre par date dans les rapports
fix: corriger l'affichage des badges sur mobile
docs: mettre à jour le README avec les nouvelles fonctionnalités
```

## Structure du code

```
app/
├── layout.tsx       # Layout principal
├── page.tsx         # Application (tous les composants)
└── globals.css      # Styles globaux
```

## Tests

Avant de soumettre:
```bash
# Build
npm run build

# Linter
npm run lint

# Test local
npm start
```

## Questions?

N'hésitez pas à ouvrir une Discussion sur GitHub!

Merci! 🙏
