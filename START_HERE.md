# 🚀 COMMENCEZ ICI - ProCureHub

Bienvenue dans ProCureHub ! Voici comment démarrer en 3 minutes.

## ⚡ Démarrage ultra-rapide

### Option 1: Test immédiat (PLUS RAPIDE)

Ouvrez le fichier `procurehub-app.html` dans votre navigateur. C'est tout !

### Option 2: Installation Next.js (pour développement/production)

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer l'application
npm run dev

# 3. Ouvrir http://localhost:3000
```

**Connexion de test**: `marie@company.com` (n'importe quel mot de passe)

---

## 📚 Documentation disponible

| Fichier | Contenu |
|---------|---------|
| **README.md** | Vue d'ensemble complète du projet |
| **INSTALLATION.md** | Guide d'installation détaillé + dépannage |
| **DEPLOYMENT.md** | Comment déployer sur Vercel/Netlify/etc |
| **CONTRIBUTING.md** | Guide pour contribuer au projet |
| **quick-start.sh** | Script bash de démarrage automatique |

---

## 🎯 Structure du projet

```
procurehub-nextjs/
├── 📱 app/
│   ├── page.tsx         ← APPLICATION COMPLÈTE ICI
│   ├── layout.tsx       ← Configuration globale
│   └── globals.css      ← Styles (+ styles d'impression)
│
├── 📄 Documentation/
│   ├── README.md
│   ├── INSTALLATION.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── ⚙️ Configuration/
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── next.config.js
│   └── .gitignore
│
└── 🚀 quick-start.sh    ← Script de démarrage automatique
```

---

## 🎨 Fonctionnalités principales

✅ **Authentification** multi-rôles (Demandeur, Acheteur, Approbateur)
✅ **Gestion d'utilisateurs** (CRUD complet)
✅ **Création de commandes** avec assignation d'approbateur
✅ **Page Approbations** dédiée avec tri et filtres
✅ **Rapports imprimables** (PDF ready)
✅ **Design responsive** (mobile, tablette, desktop)
✅ **Interface moderne** avec animations fluides

---

## 🔐 Comptes de test

```
Demandeur:      marie@company.com
Acheteur:       jean@company.com
Approbateur 1:  sophie@company.com
Approbateur 2:  luc@company.com

Mot de passe: n'importe quoi (c'est une démo)
```

---

## 🚀 Déploiement sur Vercel (GRATUIT)

### Méthode rapide (5 minutes)

1. **Push sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE-USERNAME/procurehub.git
   git push -u origin main
   ```

2. **Déployer sur Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - "New Project" → Importer votre repo GitHub
   - Cliquer "Deploy"
   - ✅ Terminé ! Votre app est en ligne

Détails complets dans **DEPLOYMENT.md**

---

## 📊 Workflow de l'application

```
1. Demandeur crée une commande
   ↓
2. Sélectionne l'approbateur assigné
   ↓
3. Approbateur reçoit la commande
   ↓
4. Approbateur approuve ou rejette
   ↓
5. Si approuvée → Acheteur traite
   ↓
6. Acheteur marque: Commandée → Livrée
   ↓
7. Rapport final imprimable
```

---

## 🛠️ Technologies utilisées

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Space Mono

---

## ⚡ Commandes npm

```bash
npm run dev      # Mode développement (hot reload)
npm run build    # Build de production
npm start        # Démarrer en production
npm run lint     # Vérifier les erreurs
```

---

## 🎓 Prochaines étapes

### Pour tester localement
1. Lire **INSTALLATION.md**
2. `npm install && npm run dev`
3. Tester toutes les fonctionnalités

### Pour déployer en ligne
1. Lire **DEPLOYMENT.md**
2. Push sur GitHub
3. Déployer sur Vercel

### Pour personnaliser
1. Modifier les couleurs dans `app/page.tsx`
2. Ajouter des champs dans les types `User` et `Order`
3. Consulter **CONTRIBUTING.md** pour les bonnes pratiques

### Pour la production
1. Ajouter une vraie base de données (Supabase/Prisma)
2. Implémenter l'authentification (NextAuth/Clerk)
3. Créer des API routes pour le backend

---

## ❓ Besoin d'aide ?

### Problèmes d'installation
→ Consultez **INSTALLATION.md** section "Résolution des problèmes"

### Questions sur le déploiement
→ Consultez **DEPLOYMENT.md** section "Problèmes courants"

### Bugs ou suggestions
→ Ouvrez une Issue sur GitHub

---

## 🌟 Points forts de l'application

1. **Prête à l'emploi** - Aucune configuration nécessaire
2. **Modern Stack** - Next.js 14, TypeScript, Tailwind
3. **Déploiement facile** - Compatible Vercel (gratuit)
4. **Code propre** - TypeScript strict, commenté
5. **Responsive** - Fonctionne sur tous les appareils
6. **Imprimable** - Rapports optimisés pour l'impression
7. **Extensible** - Architecture claire pour ajouts

---

## 📞 Support

- 📖 Documentation complète dans les fichiers .md
- 💬 Questions ? Ouvrez une Discussion sur GitHub
- 🐛 Bug trouvé ? Créez une Issue
- 🚀 Amélioration ? Faites une Pull Request

---

**Prêt à commencer ?**

1. Si vous voulez juste tester → Ouvrez `procurehub-app.html`
2. Si vous voulez développer → `npm install && npm run dev`
3. Si vous voulez déployer → Suivez **DEPLOYMENT.md**

**Bonne découverte ! 🎉**
