#!/bin/bash

# Script de démarrage rapide pour ProCureHub
# Usage: ./quick-start.sh

echo "🚀 ProCureHub - Démarrage rapide"
echo "================================"
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "Installez Node.js depuis: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'installation"
    exit 1
fi

echo ""
echo "✅ Dépendances installées avec succès!"
echo ""

# Demander le mode
echo "Choisissez une option:"
echo "1) Développement (npm run dev)"
echo "2) Production (npm run build && npm start)"
echo "3) Quitter"
echo ""
read -p "Votre choix (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🔥 Lancement en mode développement..."
        echo "L'application sera disponible sur http://localhost:3000"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "🏗️  Build de production..."
        npm run build
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Build réussi!"
            echo "🚀 Lancement en mode production..."
            echo "L'application sera disponible sur http://localhost:3000"
            echo ""
            npm start
        else
            echo "❌ Erreur lors du build"
            exit 1
        fi
        ;;
    3)
        echo "À bientôt! 👋"
        exit 0
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac
