# Guide d'installation 📦

## Installation locale pour développement

### Prérequis

1. **Node.js 18 ou supérieur**
   - Télécharger: https://nodejs.org/
   - Vérifier: `node --version`

2. **npm** (inclus avec Node.js)
   - Vérifier: `npm --version`

### Méthode 1: Script automatique (Linux/Mac)

```bash
# Rendre le script exécutable
chmod +x quick-start.sh

# Lancer le script
./quick-start.sh
```

Le script vous guidera à travers l'installation et le choix du mode (dev/prod).

### Méthode 2: Installation manuelle

#### Étape 1: Installer les dépendances

```bash
npm install
```

Cela va installer:
- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide React (icons)

#### Étape 2: Lancer en mode développement

```bash
npm run dev
```

L'application sera disponible sur: http://localhost:3000

**Fonctionnalités en mode dev:**
- ✅ Hot reload (rechargement automatique)
- ✅ Messages d'erreur détaillés
- ✅ React DevTools compatible

#### Étape 3 (Optionnel): Build de production

```bash
# Créer le build optimisé
npm run build

# Lancer en mode production
npm start
```

---

## Installation pour test local (sans développement)

Si vous voulez juste tester l'application sans modifier le code:

```bash
# 1. Installer
npm install

# 2. Build
npm run build

# 3. Lancer
npm start
```

---

## Résolution des problèmes courants

### Erreur: "node" n'est pas reconnu

**Problème**: Node.js n'est pas installé ou pas dans le PATH

**Solution**:
1. Télécharger Node.js: https://nodejs.org/
2. Installer avec les options par défaut
3. Redémarrer le terminal
4. Vérifier: `node --version`

### Erreur: Port 3000 déjà utilisé

**Problème**: Un autre programme utilise le port 3000

**Solution**:
```bash
# Utiliser un autre port
npm run dev -- -p 3001

# Ou arrêter le processus sur le port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Erreur: EACCES permission denied

**Problème**: Permissions insuffisantes (Linux/Mac)

**Solution**:
```bash
# NE PAS utiliser sudo avec npm install
# À la place, configurer npm:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Erreur: Cannot find module

**Problème**: Dépendances manquantes ou corrompues

**Solution**:
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build TypeScript

**Problème**: Erreurs de type TypeScript

**Solution**:
```bash
# Vérifier les erreurs
npm run lint

# Si c'est juste pour tester, vous pouvez temporairement
# désactiver le strict mode dans tsconfig.json
# "strict": false
```

### Page blanche au démarrage

**Problème**: JavaScript désactivé ou erreur de build

**Solution**:
1. Ouvrir la console du navigateur (F12)
2. Vérifier les erreurs
3. Vider le cache: Ctrl+Shift+R (ou Cmd+Shift+R sur Mac)
4. Rebuild: `npm run build`

---

## Structure après installation

```
procurehub-nextjs/
├── node_modules/         # Dépendances (généré)
├── .next/                # Build Next.js (généré)
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── README.md
└── quick-start.sh
```

---

## Variables d'environnement (Optionnel)

Pour la production, créer `.env.local`:

```env
# Exemple pour une base de données future
# DATABASE_URL="postgresql://..."
# NEXTAUTH_SECRET="votre-secret"
# NEXTAUTH_URL="http://localhost:3000"
```

**Important**: Ne jamais commiter `.env.local` sur GitHub!

---

## Vérification de l'installation

### Test 1: Versions

```bash
node --version  # Devrait afficher v18+ ou v20+
npm --version   # Devrait afficher 9+ ou 10+
```

### Test 2: Dépendances

```bash
npm list --depth=0

# Devrait afficher:
# ├── next@14.x.x
# ├── react@18.x.x
# ├── lucide-react@0.x.x
# etc.
```

### Test 3: Build

```bash
npm run build

# Devrait se terminer avec:
# ✓ Compiled successfully
```

### Test 4: Application

1. Lancer: `npm run dev`
2. Ouvrir: http://localhost:3000
3. Vérifier: Page de connexion s'affiche
4. Tester: Connexion avec marie@company.com

---

## Prochaines étapes

1. ✅ Installation terminée
2. 📖 Lire README.md pour les fonctionnalités
3. 🚀 Lire DEPLOYMENT.md pour déployer
4. 🎨 Personnaliser selon vos besoins

---

## Ressources supplémentaires

- [Node.js Documentation](https://nodejs.org/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## Support

Problème non résolu? Ouvrez une issue sur GitHub avec:
- Votre système d'exploitation
- Version de Node.js
- Message d'erreur complet
- Étapes pour reproduire

Bonne installation! 🎉
