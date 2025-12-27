'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, Users, Package, 
  Plus, Edit2, Trash2, Check, X, 
  LogOut, Search, Filter,
  AlertCircle, CheckCircle, Clock,
  ClipboardCheck, UserCheck, ArrowUpDown,
  FileText, Printer, ChevronDown, Settings
} from 'lucide-react';

// Types
type User = {
  id: string;
  name: string;
  email: string;
  role: 'requester' | 'buyer' | 'approver';
};

type Order = {
  id: string;
  requesterId: string;
  requesterName: string;
  items: string;
  quantity: number;
  estimatedCost: number;
  status: 'pending' | 'approved' | 'rejected' | 'ordered' | 'delivered';
  createdAt: string;
  notes?: string;
  approverId?: string;
  assignedApproverId?: string;
  assignedApproverName?: string;
};

type Page = 'login' | 'home' | 'users' | 'orders' | 'create-order' | 'approvals' | 'reports';

// Initial mock data
const initialUsers: User[] = [
  { id: '1', name: 'Marie Dubois', email: 'marie@company.com', role: 'requester' },
  { id: '2', name: 'Jean Tremblay', email: 'jean@company.com', role: 'buyer' },
  { id: '3', name: 'Sophie Martin', email: 'sophie@company.com', role: 'approver' },
  { id: '4', name: 'Luc Gagnon', email: 'luc@company.com', role: 'approver' },
];

const initialOrders: Order[] = [
  {
    id: '1',
    requesterId: '1',
    requesterName: 'Marie Dubois',
    items: 'Ordinateurs portables Dell XPS 15',
    quantity: 5,
    estimatedCost: 12500,
    status: 'pending',
    createdAt: '2024-12-20',
    notes: 'Urgent pour le nouveau département',
    assignedApproverId: '3',
    assignedApproverName: 'Sophie Martin'
  },
  {
    id: '2',
    requesterId: '1',
    requesterName: 'Marie Dubois',
    items: 'Licences Microsoft Office 365',
    quantity: 20,
    estimatedCost: 2800,
    status: 'approved',
    createdAt: '2024-12-18',
    approverId: '3',
    assignedApproverId: '3',
    assignedApproverName: 'Sophie Martin'
  },
  {
    id: '3',
    requesterId: '1',
    requesterName: 'Marie Dubois',
    items: 'Moniteurs 27 pouces',
    quantity: 10,
    estimatedCost: 3500,
    status: 'pending',
    createdAt: '2024-12-22',
    notes: 'Pour les nouveaux postes de travail',
    assignedApproverId: '4',
    assignedApproverName: 'Luc Gagnon'
  },
];

export default function ProcurementApp() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showGestionMenu, setShowGestionMenu] = useState(false);
  const [showConfigMenu, setShowConfigMenu] = useState(false);

  // Fermer les menus au clic extérieur
  useEffect(() => {
    const handleClickOutside = () => {
      setShowGestionMenu(false);
      setShowConfigMenu(false);
    };
    
    if (showGestionMenu || showConfigMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showGestionMenu, showConfigMenu]);

  // Login Component
  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      const user = users.find(u => u.email === email);
      if (user) {
        setCurrentUser(user);
        setCurrentPage('home');
      } else {
        alert('Utilisateur non trouvé. Essayez: marie@company.com');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="relative w-full max-w-md">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
            <div className="mb-8 text-center">
              <div className="inline-block mb-4">
                <img src="/logo.png" alt="GstionTI" className="h-16 w-auto" />
              </div>
              <p className="text-slate-300 text-sm">Système de gestion d'achats</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Courriel
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="votre@courriel.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/30"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-xs text-blue-300 mb-2">Comptes de démonstration :</p>
              <p className="text-xs text-slate-300">marie@company.com (Demandeur)</p>
              <p className="text-xs text-slate-300">jean@company.com (Acheteur)</p>
              <p className="text-xs text-slate-300">sophie@company.com (Approbateur)</p>
              <p className="text-xs text-slate-300">luc@company.com (Approbateur)</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Home Dashboard
  const HomePage = () => {
    const pendingOrders = orders.filter(o => o.status === 'pending').length;
    const approvedOrders = orders.filter(o => o.status === 'approved').length;
    const totalValue = orders.reduce((sum, o) => sum + o.estimatedCost, 0);
    
    const myPendingApprovals = currentUser?.role === 'approver' 
      ? orders.filter(o => o.status === 'pending' && o.assignedApproverId === currentUser.id)
      : [];

    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
            Tableau de bord
          </h1>
          <p className="text-slate-600">Bienvenue, {currentUser?.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                En attente
              </span>
            </div>
            <div className="text-4xl font-bold mb-1">{pendingOrders}</div>
            <div className="text-sm opacity-90">Commandes à approuver</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Approuvées
              </span>
            </div>
            <div className="text-4xl font-bold mb-1">{approvedOrders}</div>
            <div className="text-sm opacity-90">Commandes en traitement</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Total
              </span>
            </div>
            <div className="text-4xl font-bold mb-1">{totalValue.toLocaleString()}$</div>
            <div className="text-sm opacity-90">Valeur totale</div>
          </div>
        </div>

        {currentUser?.role === 'approver' && myPendingApprovals.length > 0 && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 rounded-lg">
                  <ClipboardCheck className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-amber-900">
                  Commandes à approuver ({myPendingApprovals.length})
                </h2>
              </div>
              <button
                onClick={() => setCurrentPage('approvals')}
                className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Voir tout
              </button>
            </div>
            <div className="space-y-3">
              {myPendingApprovals.slice(0, 3).map(order => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all">
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">{order.items}</div>
                    <div className="text-sm text-slate-600 mt-1">
                      {order.requesterName} • {order.quantity} unités • {order.estimatedCost.toLocaleString()}$
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => {
                        setOrders(orders.map(o => 
                          o.id === order.id ? { ...o, status: 'approved', approverId: currentUser.id } : o
                        ));
                      }}
                      className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setOrders(orders.map(o => 
                          o.id === order.id ? { ...o, status: 'rejected', approverId: currentUser.id } : o
                        ));
                      }}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Commandes récentes</h2>
          <div className="space-y-3">
            {orders.slice(0, 3).map(order => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all">
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">{order.items}</div>
                  <div className="text-sm text-slate-600 mt-1">
                    {order.requesterName} • {order.quantity} unités • {order.estimatedCost.toLocaleString()}$
                  </div>
                </div>
                <StatusBadge status={order.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Reports Page
  const ReportsPage = () => {
    const approvedOrders = orders.filter(o => o.status === 'approved' || o.status === 'ordered' || o.status === 'delivered');
    const pendingOrders = orders.filter(o => o.status === 'pending');
    
    const totalApproved = approvedOrders.reduce((sum, o) => sum + o.estimatedCost, 0);
    const totalPending = pendingOrders.reduce((sum, o) => sum + o.estimatedCost, 0);

    const handlePrint = () => {
      window.print();
    };

    return (
      <div className="space-y-6">
        <div className="print:hidden flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Rapports
            </h1>
            <p className="text-slate-600">
              Rapport généré le {new Date().toLocaleDateString('fr-CA', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all"
          >
            <Printer className="w-5 h-5" />
            Imprimer le rapport
          </button>
        </div>

        <div className="hidden print:block mb-8">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="GstionTI" className="h-12 w-auto" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-space-mono)' }}>
                GstionTI - Rapport des commandes
              </h1>
              <p className="text-slate-600">
                Généré le {new Date().toLocaleDateString('fr-CA', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg print:shadow-none print:border-2 print:border-emerald-500">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl print:bg-emerald-100">
                <CheckCircle className="w-6 h-6 print:text-emerald-600" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full print:bg-emerald-100 print:text-emerald-700">
                Autorisées
              </span>
            </div>
            <div className="text-4xl font-bold mb-1">{approvedOrders.length}</div>
            <div className="text-sm opacity-90 print:text-emerald-900">Commandes approuvées</div>
            <div className="text-2xl font-bold mt-2">{totalApproved.toLocaleString()}$</div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg print:shadow-none print:border-2 print:border-amber-500">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl print:bg-amber-100">
                <Clock className="w-6 h-6 print:text-amber-600" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full print:bg-amber-100 print:text-amber-700">
                En attente
              </span>
            </div>
            <div className="text-4xl font-bold mb-1">{pendingOrders.length}</div>
            <div className="text-sm opacity-90 print:text-amber-900">Commandes à approuver</div>
            <div className="text-2xl font-bold mt-2">{totalPending.toLocaleString()}$</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg print:shadow-none print:border-2 print:border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl print:bg-blue-100">
                <Package className="w-6 h-6 print:text-blue-600" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full print:bg-blue-100 print:text-blue-700">
                Total
              </span>
            </div>
            <div className="text-4xl font-bold mb-1">{orders.length}</div>
            <div className="text-sm opacity-90 print:text-blue-900">Toutes les commandes</div>
            <div className="text-2xl font-bold mt-2">{(totalApproved + totalPending).toLocaleString()}$</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-emerald-200 p-6 shadow-lg print:shadow-none print:break-inside-avoid">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Commandes autorisées</h2>
              <p className="text-sm text-slate-600">{approvedOrders.length} commandes • Total: {totalApproved.toLocaleString()}$</p>
            </div>
          </div>

          {approvedOrders.length > 0 ? (
            <div className="space-y-4">
              {approvedOrders.map((order, index) => (
                <div key={order.id} className="border-2 border-slate-200 rounded-xl p-4 hover:border-emerald-300 transition-all print:break-inside-avoid print:border print:hover:border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{order.items}</h3>
                        <div className="text-sm text-slate-600 space-y-1">
                          <p><span className="font-semibold">Demandeur:</span> {order.requesterName}</p>
                          <p><span className="font-semibold">Quantité:</span> {order.quantity} unités</p>
                          <p><span className="font-semibold">Coût:</span> <span className="text-emerald-600 font-bold">{order.estimatedCost.toLocaleString()}$</span></p>
                          <p><span className="font-semibold">Date:</span> {new Date(order.createdAt).toLocaleDateString('fr-CA')}</p>
                          <p><span className="font-semibold">Statut:</span> {
                            order.status === 'approved' ? 'Approuvée' :
                            order.status === 'ordered' ? 'Commandée' :
                            order.status === 'delivered' ? 'Livrée' : order.status
                          }</p>
                        </div>
                        {order.notes && (
                          <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900 print:bg-white print:border-blue-300">
                            <span className="font-semibold">Notes:</span> {order.notes}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="print:hidden">
                      <StatusBadge status={order.status} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <p>Aucune commande autorisée</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border-2 border-amber-200 p-6 shadow-lg print:shadow-none print:break-inside-avoid">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-500 rounded-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Commandes en attente</h2>
              <p className="text-sm text-slate-600">{pendingOrders.length} commandes • Total: {totalPending.toLocaleString()}$</p>
            </div>
          </div>

          {pendingOrders.length > 0 ? (
            <div className="space-y-4">
              {pendingOrders.map((order, index) => (
                <div key={order.id} className="border-2 border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-all print:break-inside-avoid print:border print:hover:border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{order.items}</h3>
                        <div className="text-sm text-slate-600 space-y-1">
                          <p><span className="font-semibold">Demandeur:</span> {order.requesterName}</p>
                          <p><span className="font-semibold">Approbateur assigné:</span> <span className="text-emerald-600">{order.assignedApproverName}</span></p>
                          <p><span className="font-semibold">Quantité:</span> {order.quantity} unités</p>
                          <p><span className="font-semibold">Coût estimé:</span> <span className="text-amber-600 font-bold">{order.estimatedCost.toLocaleString()}$</span></p>
                          <p><span className="font-semibold">Date de demande:</span> {new Date(order.createdAt).toLocaleDateString('fr-CA')}</p>
                        </div>
                        {order.notes && (
                          <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900 print:bg-white print:border-blue-300">
                            <span className="font-semibold">Notes:</span> {order.notes}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="print:hidden">
                      <StatusBadge status={order.status} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <p>Aucune commande en attente</p>
            </div>
          )}
        </div>

        <div className="hidden print:block mt-8 pt-4 border-t-2 border-slate-200">
          <div className="text-center text-sm text-slate-600">
            <p>GstionTI - Système de gestion d'achats</p>
            <p>Document généré automatiquement • Confidentiel</p>
          </div>
        </div>
      </div>
    );
  };

  // Approvals Page
  const ApprovalsPage = () => {
    const [sortBy, setSortBy] = useState('date-desc');
    const [filterApprover, setFilterApprover] = useState('all');
    
    let pendingOrders = orders.filter(o => o.status === 'pending');
    
    if (currentUser?.role === 'approver') {
      if (filterApprover === 'mine') {
        pendingOrders = pendingOrders.filter(o => o.assignedApproverId === currentUser.id);
      }
    } else if (filterApprover !== 'all') {
      pendingOrders = pendingOrders.filter(o => o.assignedApproverId === filterApprover);
    }
    
    pendingOrders = [...pendingOrders].sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'date-asc':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'cost-desc':
          return b.estimatedCost - a.estimatedCost;
        case 'cost-asc':
          return a.estimatedCost - b.estimatedCost;
        case 'requester':
          return a.requesterName.localeCompare(b.requesterName);
        default:
          return 0;
      }
    });

    const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
      setOrders(orders.map(o => 
        o.id === orderId ? { ...o, status: newStatus, approverId: currentUser?.id } : o
      ));
    };

    const approvers = users.filter(u => u.role === 'approver');

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Commandes à approuver
            </h1>
            <p className="text-slate-600">{pendingOrders.length} commandes en attente</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors appearance-none"
              >
                <option value="date-desc">Plus récentes d'abord</option>
                <option value="date-asc">Plus anciennes d'abord</option>
                <option value="cost-desc">Coût décroissant</option>
                <option value="cost-asc">Coût croissant</option>
                <option value="requester">Par demandeur (A-Z)</option>
              </select>
            </div>
            
            <div className="relative">
              <UserCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={filterApprover}
                onChange={(e) => setFilterApprover(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors appearance-none"
              >
                <option value="all">Tous les approbateurs</option>
                {currentUser?.role === 'approver' && (
                  <option value="mine">Assignées à moi</option>
                )}
                {approvers.map(approver => (
                  <option key={approver.id} value={approver.id}>
                    {approver.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {pendingOrders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl border-2 border-amber-200 p-6 shadow-lg hover:border-amber-400 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{order.items}</h3>
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full border bg-amber-100 text-amber-700 border-amber-200">
                      En attente
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>Demandé par : <span className="font-medium text-slate-900">{order.requesterName}</span></p>
                    <p>Assigné à : <span className="font-medium text-emerald-600">{order.assignedApproverName}</span></p>
                    <p>Date : <span className="font-medium text-slate-900">{new Date(order.createdAt).toLocaleDateString('fr-CA')}</span></p>
                    <p>Quantité : <span className="font-medium text-slate-900">{order.quantity} unités</span></p>
                    <p>Coût estimé : <span className="font-bold text-emerald-600">{order.estimatedCost.toLocaleString()}$</span></p>
                  </div>
                  {order.notes && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900"><span className="font-semibold">Notes :</span> {order.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {currentUser?.role === 'approver' && order.assignedApproverId === currentUser.id && (
                <div className="flex gap-3 pt-4 border-t-2 border-slate-100">
                  <button
                    onClick={() => handleStatusChange(order.id, 'approved')}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors shadow-md"
                  >
                    <Check className="w-5 h-5" />
                    Approuver
                  </button>
                  <button
                    onClick={() => handleStatusChange(order.id, 'rejected')}
                    className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors shadow-md"
                  >
                    <X className="w-5 h-5" />
                    Rejeter
                  </button>
                </div>
              )}

              {currentUser?.role !== 'approver' && (
                <div className="flex gap-3 pt-4 border-t-2 border-slate-100">
                  <div className="text-sm text-slate-500 italic">
                    En attente d'approbation par {order.assignedApproverName}
                  </div>
                </div>
              )}

              {currentUser?.role === 'approver' && order.assignedApproverId !== currentUser.id && (
                <div className="flex gap-3 pt-4 border-t-2 border-slate-100">
                  <div className="text-sm text-slate-500 italic">
                    Assigné à {order.assignedApproverName}
                  </div>
                </div>
              )}
            </div>
          ))}

          {pendingOrders.length === 0 && (
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-12 text-center shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Aucune commande en attente d'approbation</p>
              <p className="text-sm text-slate-500 mt-2">Toutes les commandes ont été traitées</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Users Management (partie 1 - à continuer dans le prochain message)
  const UsersPage = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', role: 'requester' as User['role'] });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (editingId) {
        setUsers(users.map(u => u.id === editingId ? { ...u, ...formData } : u));
        setEditingId(null);
      } else {
        const newUser: User = {
          id: Date.now().toString(),
          ...formData
        };
        setUsers([...users, newUser]);
      }
      setFormData({ name: '', email: '', role: 'requester' });
      setIsAdding(false);
    };

    const handleEdit = (user: User) => {
      setFormData({ name: user.name, email: user.email, role: user.role });
      setEditingId(user.id);
      setIsAdding(true);
    };

    const handleDelete = (id: string) => {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        setUsers(users.filter(u => u.id !== id));
      }
    };

    const getRoleColor = (role: string) => {
      switch (role) {
        case 'requester': return 'bg-blue-100 text-blue-700 border-blue-200';
        case 'buyer': return 'bg-purple-100 text-purple-700 border-purple-200';
        case 'approver': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        default: return 'bg-slate-100 text-slate-700 border-slate-200';
      }
    };

    const getRoleLabel = (role: string) => {
      switch (role) {
        case 'requester': return 'Demandeur';
        case 'buyer': return 'Acheteur';
        case 'approver': return 'Approbateur';
        default: return role;
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Gestion des utilisateurs
            </h1>
            <p className="text-slate-600">{users.length} utilisateurs au total</p>
          </div>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 transform hover:scale-105 transition-all"
          >
            <Plus className="w-5 h-5" />
            Nouvel utilisateur
          </button>
        </div>

        {isAdding && (
          <div className="bg-white rounded-2xl border-2 border-emerald-200 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {editingId ? 'Modifier l\'utilisateur' : 'Ajouter un utilisateur'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Courriel</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Rôle</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as User['role'] })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                >
                  <option value="requester">Demandeur</option>
                  <option value="buyer">Acheteur</option>
                  <option value="approver">Approbateur</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  {editingId ? 'Mettre à jour' : 'Ajouter'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAdding(false);
                    setEditingId(null);
                    setFormData({ name: '', email: '', role: 'requester' });
                  }}
                  className="px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b-2 border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Nom</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Courriel</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Rôle</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{user.name}</td>
                    <td className="px-6 py-4 text-slate-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${getRoleColor(user.role)}`}>
                        {getRoleLabel(user.role)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(user)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Orders Tracking
  const OrdersPage = () => {
    const filteredOrders = orders.filter(order => {
      const matchesSearch = order.items.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.requesterName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
      return matchesSearch && matchesFilter;
    });

    const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
      setOrders(orders.map(o => 
        o.id === orderId ? { ...o, status: newStatus, approverId: currentUser?.id } : o
      ));
    };

    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
            Suivi des commandes
          </h1>
          <p className="text-slate-600">{orders.length} commandes au total</p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par produit ou demandeur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors appearance-none"
              >
                <option value="all">Tous les statuts</option>
                <option value="pending">En attente</option>
                <option value="approved">Approuvées</option>
                <option value="rejected">Rejetées</option>
                <option value="ordered">Commandées</option>
                <option value="delivered">Livrées</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredOrders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg hover:border-emerald-300 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{order.items}</h3>
                    <StatusBadge status={order.status} />
                  </div>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>Demandé par : <span className="font-medium text-slate-900">{order.requesterName}</span></p>
                    {order.assignedApproverName && (
                      <p>Approbateur assigné : <span className="font-medium text-emerald-600">{order.assignedApproverName}</span></p>
                    )}
                    <p>Date : <span className="font-medium text-slate-900">{new Date(order.createdAt).toLocaleDateString('fr-CA')}</span></p>
                    <p>Quantité : <span className="font-medium text-slate-900">{order.quantity} unités</span></p>
                    <p>Coût estimé : <span className="font-bold text-emerald-600">{order.estimatedCost.toLocaleString()}$</span></p>
                  </div>
                  {order.notes && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-900"><span className="font-semibold">Notes :</span> {order.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {currentUser?.role === 'approver' && order.status === 'pending' && order.assignedApproverId === currentUser.id && (
                <div className="flex gap-3 mt-4 pt-4 border-t-2 border-slate-100">
                  <button
                    onClick={() => handleStatusChange(order.id, 'approved')}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    Approuver
                  </button>
                  <button
                    onClick={() => handleStatusChange(order.id, 'rejected')}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Rejeter
                  </button>
                </div>
              )}

              {currentUser?.role === 'buyer' && order.status === 'approved' && (
                <div className="flex gap-3 mt-4 pt-4 border-t-2 border-slate-100">
                  <button
                    onClick={() => handleStatusChange(order.id, 'ordered')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Package className="w-4 h-4" />
                    Marquer comme commandée
                  </button>
                </div>
              )}

              {currentUser?.role === 'buyer' && order.status === 'ordered' && (
                <div className="flex gap-3 mt-4 pt-4 border-t-2 border-slate-100">
                  <button
                    onClick={() => handleStatusChange(order.id, 'delivered')}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Marquer comme livrée
                  </button>
                </div>
              )}
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-12 text-center shadow-lg">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Aucune commande trouvée</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Create Order
  const CreateOrderPage = () => {
    const [formData, setFormData] = useState({
      items: '',
      quantity: 1,
      estimatedCost: 0,
      notes: '',
      assignedApproverId: ''
    });

    const approvers = users.filter(u => u.role === 'approver');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!formData.assignedApproverId) {
        alert('Veuillez sélectionner un approbateur');
        return;
      }
      
      const selectedApprover = users.find(u => u.id === formData.assignedApproverId);
      
      const newOrder: Order = {
        id: Date.now().toString(),
        requesterId: currentUser!.id,
        requesterName: currentUser!.name,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0],
        assignedApproverId: formData.assignedApproverId,
        assignedApproverName: selectedApprover?.name,
        items: formData.items,
        quantity: formData.quantity,
        estimatedCost: formData.estimatedCost,
        notes: formData.notes
      };
      
      setOrders([newOrder, ...orders]);
      setFormData({ items: '', quantity: 1, estimatedCost: 0, notes: '', assignedApproverId: '' });
      setCurrentPage('orders');
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
            Créer une commande
          </h1>
          <p className="text-slate-600">Remplissez les informations ci-dessous</p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Articles / Matériel *
              </label>
              <input
                type="text"
                value={formData.items}
                onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                placeholder="ex: Ordinateurs portables Dell XPS 15"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Quantité *
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Coût estimé ($) *
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.estimatedCost}
                  onChange={(e) => setFormData({ ...formData, estimatedCost: parseFloat(e.target.value) })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Approbateur *
              </label>
              <select
                value={formData.assignedApproverId}
                onChange={(e) => setFormData({ ...formData, assignedApproverId: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors"
                required
              >
                <option value="">Sélectionnez un approbateur</option>
                {approvers.map(approver => (
                  <option key={approver.id} value={approver.id}>
                    {approver.name} ({approver.email})
                  </option>
                ))}
              </select>
              {approvers.length === 0 && (
                <p className="mt-2 text-sm text-red-600">
                  ⚠️ Aucun approbateur disponible. Veuillez d'abord créer un utilisateur avec le rôle "Approbateur".
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Notes / Justification (optionnel)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Informations additionnelles, urgence, raison de l'achat..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-0 transition-colors resize-none"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/30 transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={approvers.length === 0}
              >
                Soumettre la commande
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('orders')}
                className="px-8 py-4 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-blue-500 rounded-xl">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Processus d'approbation</h3>
              <p className="text-sm text-blue-800">
                Votre commande sera envoyée à l'approbateur sélectionné. Une fois approuvée, 
                un acheteur prendra en charge la commande et effectuera l'achat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Status Badge Component
  const StatusBadge = ({ status }: { status: Order['status'] }) => {
    const configs = {
      pending: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', label: 'En attente' },
      approved: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Approuvée' },
      rejected: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', label: 'Rejetée' },
      ordered: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', label: 'Commandée' },
      delivered: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', label: 'Livrée' },
    };
    const config = configs[status];
    return (
      <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${config.bg} ${config.text} ${config.border}`}>
        {config.label}
      </span>
    );
  };

  // Navigation Button Component
  function NavButton({ icon, label, active, onClick, mobile = false }: {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onClick: () => void;
    mobile?: boolean;
  }) {
    if (mobile) {
      return (
        <button
          onClick={onClick}
          className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all ${
            active ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {icon}
          <span className="text-xs font-medium">{label}</span>
        </button>
      );
    }

    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          active
            ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-200'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
        }`}
      >
        {icon}
        <span>{label}</span>
      </button>
    );
  }

  // Dropdown Menu Component
  function DropdownMenu({ 
    icon, 
    label, 
    isOpen, 
    onToggle, 
    items 
  }: {
    icon: React.ReactNode;
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    items: { label: string; page: Page; icon: React.ReactNode; condition?: boolean }[];
  }) {
    return (
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        >
          {icon}
          <span>{label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border-2 border-slate-200 rounded-xl shadow-lg py-2 min-w-[200px] z-50">
            {items.map((item, index) => {
              if (item.condition === false) return null;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(item.page);
                    onToggle();
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left transition-colors ${
                    currentPage === item.page
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Main Layout
  if (currentPage === 'login') {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b-2 border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="GstionTI" className="h-8 w-auto" />
              </div>

              <div className="hidden md:flex items-center gap-2">
                <NavButton
                  icon={<Home className="w-5 h-5" />}
                  label="Accueil"
                  active={currentPage === 'home'}
                  onClick={() => setCurrentPage('home')}
                />
                
                <DropdownMenu
                  icon={<Package className="w-5 h-5" />}
                  label="Gestion"
                  isOpen={showGestionMenu}
                  onToggle={() => {
                    setShowGestionMenu(!showGestionMenu);
                    setShowConfigMenu(false);
                  }}
                  items={[
                    { label: 'Commandes', page: 'orders', icon: <Package className="w-5 h-5" /> },
                    { label: 'Créer commande', page: 'create-order', icon: <Plus className="w-5 h-5" /> },
                    { label: 'Approbations', page: 'approvals', icon: <ClipboardCheck className="w-5 h-5" />, condition: currentUser?.role === 'approver' },
                    { label: 'Rapports', page: 'reports', icon: <FileText className="w-5 h-5" /> },
                  ]}
                />
                
                <DropdownMenu
                  icon={<Settings className="w-5 h-5" />}
                  label="Configuration"
                  isOpen={showConfigMenu}
                  onToggle={() => {
                    setShowConfigMenu(!showConfigMenu);
                    setShowGestionMenu(false);
                  }}
                  items={[
                    { label: 'Utilisateurs', page: 'users', icon: <Users className="w-5 h-5" /> },
                  ]}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <div className="text-sm font-semibold text-slate-900">{currentUser?.name}</div>
                <div className="text-xs text-slate-500 capitalize">
                  {currentUser?.role === 'requester' ? 'Demandeur' : currentUser?.role === 'buyer' ? 'Acheteur' : 'Approbateur'}
                </div>
              </div>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  setCurrentPage('login');
                }}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b-2 border-slate-200 sticky top-16 z-40">
        <div className="flex items-center justify-around px-2 py-2 overflow-x-auto">
          <NavButton
            icon={<Home className="w-5 h-5" />}
            label="Accueil"
            active={currentPage === 'home'}
            onClick={() => setCurrentPage('home')}
            mobile
          />
          <NavButton
            icon={<Package className="w-5 h-5" />}
            label="Commandes"
            active={currentPage === 'orders'}
            onClick={() => setCurrentPage('orders')}
            mobile
          />
          <NavButton
            icon={<Plus className="w-5 h-5" />}
            label="Créer"
            active={currentPage === 'create-order'}
            onClick={() => setCurrentPage('create-order')}
            mobile
          />
          {currentUser?.role === 'approver' && (
            <NavButton
              icon={<ClipboardCheck className="w-4 h-4" />}
              label="Approb."
              active={currentPage === 'approvals'}
              onClick={() => setCurrentPage('approvals')}
              mobile
            />
          )}
          <NavButton
            icon={<FileText className="w-5 h-5" />}
            label="Rapports"
            active={currentPage === 'reports'}
            onClick={() => setCurrentPage('reports')}
            mobile
          />
          <NavButton
            icon={<Settings className="w-5 h-5" />}
            label="Config"
            active={currentPage === 'users'}
            onClick={() => setCurrentPage('users')}
            mobile
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'approvals' && <ApprovalsPage />}
        {currentPage === 'reports' && <ReportsPage />}
        {currentPage === 'users' && <UsersPage />}
        {currentPage === 'orders' && <OrdersPage />}
        {currentPage === 'create-order' && <CreateOrderPage />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-slate-200 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-slate-600">
          © 2024 GstionTI - Système de gestion d'achats
        </div>
      </footer>
    </div>
  );
}
