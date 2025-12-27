# Guide de déploiement 🚀

## Option 1: Déploiement sur Vercel (Recommandé - Gratuit)

### Méthode A: Via GitHub (Plus simple)

1. **Préparer le code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Créer un dépôt GitHub**
   - Allez sur github.com
   - Créez un nouveau dépôt "procurehub"
   - Ne pas initialiser avec README (vous en avez déjà un)

3. **Pusher le code**
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/procurehub.git
   git branch -M main
   git push -u origin main
   ```

4. **Déployer sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub
   - Cliquez sur "New Project"
   - Sélectionnez votre dépôt "procurehub"
   - Vercel détecte automatiquement Next.js
   - Cliquez sur "Deploy"
   - ✅ C'est fait! Votre app est en ligne

### Méthode B: Via Vercel CLI

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   # Depuis le dossier du projet
   vercel
   
   # Suivre les instructions
   # Accepter les paramètres par défaut
   ```

4. **Déployer en production**
   ```bash
   vercel --prod
   ```

### Configuration Vercel

#### Paramètres Build (automatiques)
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

#### Variables d'environnement (si nécessaires plus tard)
```
NODE_ENV=production
```

---

## Option 2: Déploiement sur Netlify

1. **Installer Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build le projet**
   ```bash
   npm run build
   ```

3. **Déployer**
   ```bash
   netlify deploy
   
   # Pour production
   netlify deploy --prod
   ```

### Configuration Netlify

Créer `netlify.toml` à la racine:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## Option 3: Déploiement sur Railway

1. **Aller sur [railway.app](https://railway.app)**

2. **Nouveau projet**
   - Connectez GitHub
   - Sélectionnez votre dépôt
   - Railway détecte Next.js automatiquement

3. **Déployer**
   - Cliquez sur "Deploy"
   - Attendez le build

---

## Option 4: Déploiement sur Render

1. **Aller sur [render.com](https://render.com)**

2. **New Web Service**
   - Connectez GitHub
   - Sélectionnez le dépôt

3. **Configuration**
   ```
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

---

## Test local avant déploiement

```bash
# Build production
npm run build

# Tester en production locale
npm start

# Devrait tourner sur http://localhost:3000
```

---

## Domaine personnalisé

### Sur Vercel
1. Settings → Domains
2. Ajouter votre domaine
3. Configurer DNS:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### Sur Netlify
1. Domain settings → Add custom domain
2. Suivre les instructions DNS

---

## Monitoring et Analytics

### Vercel Analytics (Gratuit)
```bash
npm install @vercel/analytics
```

Dans `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Problèmes courants

### Build échoue
```bash
# Nettoyer et rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port déjà utilisé
```bash
# Changer le port
PORT=3001 npm run dev
```

### Erreurs TypeScript
```bash
# Vérifier les erreurs
npm run lint
```

---

## Mise à jour de l'app déployée

### Via GitHub (Vercel)
```bash
# Faire des changements
git add .
git commit -m "Amélioration XYZ"
git push

# Vercel redéploie automatiquement!
```

### Via CLI
```bash
vercel --prod
```

---

## Performance

### Optimisations Next.js automatiques
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation
- ✅ Automatic caching

### Vérifier les performances
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- Vercel Analytics

---

## Coûts

### Vercel (Gratuit pour hobby)
- ✅ 100 GB bandwidth
- ✅ Déploiements illimités
- ✅ HTTPS automatique
- ✅ Domaine gratuit (.vercel.app)

### Netlify (Gratuit pour démarrer)
- ✅ 100 GB bandwidth
- ✅ 300 build minutes/mois

### Railway (Gratuit pour démarrer)
- ✅ $5 crédit/mois
- ✅ Scale automatique

---

## Checklist pré-déploiement

- [ ] Tests locaux: `npm run build && npm start`
- [ ] Vérifier .gitignore (node_modules, .env)
- [ ] README.md à jour
- [ ] Supprimer console.logs de debug
- [ ] Vérifier les erreurs TypeScript: `npm run lint`
- [ ] Tester sur mobile (responsive)
- [ ] Tester l'impression des rapports
- [ ] Vérifier toutes les fonctionnalités

---

## Support

- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Questions: Ouvrir une issue GitHub

Bon déploiement! 🎉
