import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Package,
  Tag,
  Image as ImageIcon,
  MessageSquare,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  Menu,
  X,
  CheckCircle2,
  Circle,
  Settings as SettingsIcon,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useSettings } from "../context/SettingsContext";
import AddProduct from "./AddProduct";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { products, deleteProduct } = useProducts();
  const { settings, updateSettings } = useSettings();
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: "Ali Raza",
      phone: "0333 3105614",
      message: "Looking for executive office desk.",
      date: "2023-10-25",
      read: false,
    },
    {
      id: 2,
      name: "Sara Khan",
      phone: "0300 1234567",
      message: "Do you offer home delivery in DHA?",
      date: "2023-10-24",
      read: true,
    },
  ]);

  const [settingsForm, setSettingsForm] = useState(settings);

  useEffect(() => {
    setSettingsForm(settings);
  }, [settings]);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = formData.get("username");
    const pass = formData.get("password");

    if (user === "admin" && pass === "password") {
      localStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Please use admin / password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    navigate("/admin");
  };

  const toggleInquiryRead = (id: number) => {
    setInquiries(
      inquiries.map((i) => (i.id === id ? { ...i, read: !i.read } : i)),
    );
  };

  const deleteInquiry = (id: number) => {
    setInquiries(inquiries.filter((i) => i.id !== id));
  };

  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    alert("Settings saved successfully!");
  };

  if (isChecking) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded shadow-xl max-w-md w-full border border-slate-200"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-black text-slate-900 mb-2">
              Admin Portal
            </h2>
            <p className="text-slate-500 font-medium">
              Secure sign in to manage your store
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  defaultValue="admin"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  defaultValue="password"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-royal-base text-white font-bold text-xs uppercase tracking-widest hover:bg-royal-dark transition-colors shadow-lg"
              >
                Secure Login
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  const sidebarItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
    },
    {
      id: "products",
      icon: <Package className="w-5 h-5" />,
      label: "Products",
    },
    {
      id: "categories",
      icon: <Tag className="w-5 h-5" />,
      label: "Categories",
    },
    {
      id: "gallery",
      icon: <ImageIcon className="w-5 h-5" />,
      label: "Gallery",
    },
    {
      id: "inquiries",
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Inquiries",
    },
    {
      id: "settings",
      icon: <SettingsIcon className="w-5 h-5" />,
      label: "Contact Settings",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 flex justify-between items-center z-20 sticky top-0">
        <div>
          <h2 className="text-xl font-serif font-black text-royal-base leading-none">
            Admin Panel
          </h2>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-600 outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`
        fixed inset-y-0 left-0 z-10 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static flex flex-col
        ${isMobileMenuOpen ? "translate-x-0 mt-14 py-4 md:mt-0 md:py-0" : "-translate-x-full mt-14 md:mt-0"}
      `}
      >
        <div className="p-6 hidden md:block">
          <h2 className="text-2xl font-serif font-black text-royal-base">
            Famous
          </h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Admin Panel
          </p>
        </div>
        <nav className="mt-2 md:mt-6 flex-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center px-6 py-4 text-sm font-bold transition-colors ${activeTab === item.id ? "bg-slate-50 text-royal-base border-r-4 border-royal-base" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest hover:bg-red-100 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-0 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-slate-50">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-serif font-black text-slate-900 capitalize">
                {activeTab}
              </h1>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Manage your store resources
              </p>
            </div>
            {activeTab === "products" && (
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setActiveTab("add-product");
                }}
                className="flex items-center px-6 py-3 bg-royal-base text-white font-bold text-xs uppercase tracking-widest hover:bg-royal-dark transition-colors shadow-md w-full sm:w-auto justify-center"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Product
              </button>
            )}
          </div>

          {activeTab === "add-product" && (
            <AddProduct
              onBack={() => setActiveTab("products")}
              initialProduct={editingProduct}
            />
          )}

          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { label: "Total Products", val: products.length },
                {
                  label: "Unread Inquiries",
                  val: inquiries.filter((i) => !i.read).length,
                },
                { label: "Total Categories", val: "8" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded border border-slate-200 shadow-sm"
                >
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-serif font-black text-slate-800">
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "products" && (
            <div className="bg-white border border-slate-200 shadow-sm overflow-hidden rounded">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:table-cell">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Price (Rs.)
                      </th>
                      <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-12 w-12 flex-shrink-0 border border-slate-200 rounded overflow-hidden">
                              <img
                                className="h-full w-full object-cover"
                                src={product.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                {product.name}
                                {product.status === "draft" && (
                                  <span className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-widest">
                                    Draft
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase sm:hidden mt-0.5">
                                {product.category}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                          <span className="text-[10px] font-bold text-royal-base bg-royal-base/10 px-3 py-1 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-600">
                          {product.price.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => {
                              setEditingProduct(product);
                              setActiveTab("add-product");
                            }}
                            className="text-slate-400 hover:text-royal-base mr-3 transition-colors"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded border border-slate-200 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-serif font-black text-slate-900 mb-6">
                Contact Settings
              </h2>
              <form onSubmit={handleSettingsSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="whatsappNumber"
                    className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"
                  >
                    WhatsApp Number (e.g., 923333105614)
                  </label>
                  <input
                    type="text"
                    id="whatsappNumber"
                    value={settingsForm.whatsappNumber}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        whatsappNumber: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"
                  >
                    Display Phone Number (e.g., +92 333 3105614)
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={settingsForm.phoneNumber}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        phoneNumber: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2"
                  >
                    Business Address
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    value={settingsForm.address}
                    onChange={(e) =>
                      setSettingsForm({
                        ...settingsForm,
                        address: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-royal-base focus:border-royal-base transition-colors"
                    required
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-royal-base text-white font-bold text-xs uppercase tracking-widest hover:bg-royal-dark transition-colors shadow-lg flex items-center"
                  >
                    <Save className="w-4 h-4 mr-2" /> Save Settings
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="bg-white border border-slate-200 shadow-sm rounded overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-500 uppercase tracking-widest max-w-[200px]">
                        Message
                      </th>
                      <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100">
                    {inquiries.map((inq) => (
                      <tr
                        key={inq.id}
                        className={`${inq.read ? "bg-white" : "bg-royal-base/5"} transition-colors`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-500">
                          {inq.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-slate-900">
                            {inq.name}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">
                            {inq.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 max-w-[200px] truncate md:whitespace-normal break-words">
                          {inq.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button
                            onClick={() => toggleInquiryRead(inq.id)}
                            className={`mr-3 ${inq.read ? "text-slate-400 hover:text-slate-600" : "text-royal-base hover:text-royal-dark"} transition-colors`}
                            title={inq.read ? "Mark as unread" : "Mark as read"}
                          >
                            {inq.read ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </button>
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {inquiries.length === 0 && (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-8 text-center text-slate-500 font-medium text-sm"
                        >
                          No inquiries found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === "categories" || activeTab === "gallery") && (
            <div className="bg-white p-12 py-20 rounded border border-slate-200 shadow-sm text-center">
              <Package className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-2xl font-serif font-black text-slate-800 tracking-tight">
                Full Dashboard Ready
              </h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto font-medium">
                The {activeTab} management module will be integrated with the
                cloud database upon deployment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
