# 📖 Guide complet : GitHub → Vercel

## 🎯 Vue d'ensemble

Ce guide vous explique comment :
1. Organiser vos fichiers dans un repository GitHub
2. Connecter GitHub à Vercel
3. Déployer automatiquement votre application

---

## 📁 Partie 1 : Structure des fichiers sur GitHub

Votre repository GitHub doit avoir cette structure **exacte** :

```
procurehub/                    ← Nom de votre repository GitHub
├── app/
│   ├── layout.tsx            ← Layout avec police Space Mono
│   ├── page.tsx              ← Application principale
│   └── globals.css           ← Styles globaux
├── public/
│   └── README.md             ← (optionnel)
├── .gitignore                ← Fichiers à ignorer
├── .eslintrc.json            ← Configuration ESLint
├── next.config.js            ← Configuration Next.js
├── package.json              ← Dépendances npm
├── postcss.config.js         ← Configuration PostCSS
├── README.md                 ← Documentation
├── tailwind.config.ts        ← Configuration Tailwind
└── tsconfig.json             ← Configuration TypeScript
```

---

## 🚀 Partie 2 : Mise en place sur GitHub

### Étape 1 : Créer le repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Configurez votre repository :
   - **Repository name** : `procurehub` (ou le nom de votre choix)
   - **Description** : "Système de gestion d'achats avec Next.js"
   - **Visibility** : Public ou Private (les deux fonctionnent avec Vercel)
   - ⚠️ **N'AJOUTEZ PAS** de README, .gitignore ou licence (on les a déjà)
4. Cliquez sur **"Create repository"**

### Étape 2 : Préparer vos fichiers localement

Ouvrez un terminal dans le dossier contenant tous vos fichiers :

```bash
# Naviguer vers votre dossier projet
cd chemin/vers/procurehub-nextjs

# Vérifier que tous les fichiers sont présents
ls -la
# Vous devriez voir : app/, public/, package.json, etc.
```

### Étape 3 : Initialiser Git et pousser vers GitHub

```bash
# 1. Initialiser Git dans votre dossier
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le premier commit
git commit -m "Initial commit: ProCureHub application"

# 4. Renommer la branche en 'main'
git branch -M main

# 5. Connecter votre dossier local à GitHub
# ⚠️ REMPLACEZ 'VOTRE_USERNAME' par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/procurehub.git

# 6. Pousser le code vers GitHub
git push -u origin main
```

**Exemple concret** :
Si votre username GitHub est `marie-dubois`, la commande sera :
```bash
git remote add origin https://github.com/marie-dubois/procurehub.git
```

### Étape 4 : Vérifier sur GitHub

1. Retournez sur GitHub dans votre navigateur
2. Actualisez la page de votre repository
3. Vous devriez voir tous vos fichiers ! 🎉

---

## ☁️ Partie 3 : Déploiement sur Vercel

### Étape 1 : Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. **Connectez-vous avec GitHub** (c'est le plus simple)
4. Autorisez Vercel à accéder à vos repositories

### Étape 2 : Importer votre projet

1. Une fois connecté, cliquez sur **"Add New..."** → **"Project"**
2. Vous verrez une liste de vos repositories GitHub
3. Trouvez `procurehub` et cliquez sur **"Import"**

### Étape 3 : Configuration (automatique !)

Vercel détecte automatiquement qu'il s'agit d'un projet Next.js :

```
Framework Preset: Next.js ✓ (détecté automatiquement)
Root Directory: ./ ✓
Build Command: next build ✓ (automatique)
Output Directory: .next ✓ (automatique)
Install Command: npm install ✓ (automatique)
```

**Vous n'avez RIEN à changer !** Laissez tout par défaut.

### Étape 4 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes (Vercel va :
   - Installer les dépendances
   - Compiler votre application
   - La déployer sur leur CDN)
3. **Terminé !** 🎉

### Étape 5 : Accéder à votre application

Vous obtiendrez une URL comme :
```
https://procurehub-XXXXX.vercel.app
```

Cliquez dessus pour voir votre application en ligne !

---

## 🔄 Partie 4 : Mises à jour automatiques

**La magie de Vercel** : Chaque fois que vous poussez du code sur GitHub, Vercel redéploie automatiquement !

### Workflow de mise à jour :

```bash
# 1. Modifier vos fichiers localement
# (exemple : éditer app/page.tsx)

# 2. Sauvegarder les changements avec Git
git add .
git commit -m "Amélioration : ajout de nouvelles fonctionnalités"

# 3. Pousser vers GitHub
git push

# 4. Vercel redéploie automatiquement (30 secondes à 2 minutes)
```

Vous pouvez suivre le déploiement en temps réel sur le dashboard Vercel !

---

## 🎨 Partie 5 : Configuration du domaine (optionnel)

### Domaine personnalisé

Par défaut : `procurehub-xxxxx.vercel.app`

Pour un domaine personnalisé (ex: `www.procurehub.com`) :

1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine
3. Suivez les instructions pour configurer vos DNS

---

## 🐛 Dépannage

### Erreur : "Permission denied"

```bash
# Solution : Configurez vos identifiants Git
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

### Erreur : "Repository not found"

Vérifiez que l'URL GitHub est correcte :
```bash
git remote -v
# Si incorrect, changez-le :
git remote set-url origin https://github.com/VOTRE_USERNAME/procurehub.git
```

### Erreur de build sur Vercel

1. Vérifiez les logs dans le dashboard Vercel
2. Assurez-vous que `package.json` est bien présent
3. Vérifiez que tous les fichiers ont été poussés sur GitHub

### L'application ne se charge pas

1. Vérifiez que le build est terminé (icône verte ✓)
2. Consultez les logs de runtime dans Vercel
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

---

## 📝 Checklist avant déploiement

- [ ] Tous les fichiers sont dans le bon dossier
- [ ] `package.json` est à la racine
- [ ] Le dossier `app/` contient `page.tsx` et `layout.tsx`
- [ ] Git est initialisé (`git status` fonctionne)
- [ ] Le code est poussé sur GitHub (visible sur github.com)
- [ ] Compte Vercel créé et connecté à GitHub
- [ ] Projet importé dans Vercel

---

## 🎯 Test local avant déploiement

Avant de déployer, testez localement :

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Ouvrir http://localhost:3000

# Tester le build de production
npm run build
npm start
```

Si tout fonctionne localement, ça fonctionnera sur Vercel ! ✅

---

## 🆘 Besoin d'aide ?

### Documentation officielle :
- [GitHub Docs](https://docs.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

### Communauté :
- [Vercel Discord](https://vercel.com/discord)
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)

---

## 🎉 Félicitations !

Vous avez maintenant :
✅ Un repository GitHub professionnel
✅ Une application déployée sur Vercel
✅ Des déploiements automatiques à chaque push
✅ Une URL publique pour partager votre projet

**Bon codage ! 🚀**
