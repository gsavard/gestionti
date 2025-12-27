# 🚀 Guide de déploiement

## Mise à jour rapide (projet existant sur GitHub/Vercel)

```bash
# 1. Vérifier les modifications
git status

# 2. Ajouter tous les fichiers
git add .

# 3. Créer un commit
git commit -m "Update: Menus réorganisés + Logo GstionTI"

# 4. Pousser vers GitHub
git push
```

**C'est tout !** Vercel met à jour automatiquement en 2-3 minutes.

---

## Premier déploiement

### Étape 1 : GitHub

```bash
# Dans le dossier gstionti/
git init
git add .
git commit -m "Initial commit: GstionTI"
git branch -M main

# Créer le repo sur github.com puis:
git remote add origin https://github.com/VOTRE_USERNAME/gstionti.git
git push -u origin main
```

### Étape 2 : Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "Import Project"
4. Sélectionnez "gstionti"
5. Cliquez "Deploy"

---

## Test local avant de déployer

```bash
npm install
npm run dev
# Test sur http://localhost:3000

# Si tout OK:
npm run build  # Vérifier que ça compile
```

---

## Vérifier le déploiement

1. Vercel Dashboard → Votre projet
2. Attendez le ✅ vert
3. Cliquez "Visit"
4. Testez votre site !

---

## Rollback (revenir en arrière)

Sur Vercel:
1. Deployments
2. Trouvez une version qui fonctionnait
3. "..." → "Promote to Production"

---

## Problèmes courants

### Build échoue ?
- Vérifiez les logs dans Vercel
- Testez `npm run build` localement

### Site ne se met pas à jour ?
```bash
git commit --allow-empty -m "Force rebuild"
git push
```

### Erreur Git ?
```bash
git pull origin main --rebase
git push
```
