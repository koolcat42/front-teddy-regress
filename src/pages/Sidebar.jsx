import { MessageCircle, Settings, UserCircle, Menu, Plus } from "lucide-react";

const Sidebar = ({
  chats,
  activeChat,
  setActiveChat,
  createNewChat,
  activeSection,
  setActiveSection,
  sidebarExpanded,
  setSidebarExpanded,
  renderSidebarContent,
}) => {
  const sidebarItems = [
    { id: "chats", icon: MessageCircle, label: "Chats" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "account", icon: UserCircle, label: "Account" },
  ];

  return (
    <div
      className={`${
        sidebarExpanded ? "w-80" : "w-16"
      } h-full bg-white/5 backdrop-blur-xl border-r border-white/10 
      transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Logo + Toggle */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        {sidebarExpanded && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ChatBot Pro
            </h1>
          </div>
        )}
        <button
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Nav Items */}
      <div className="flex-1 flex flex-col">
        <div className="p-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                {sidebarExpanded && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content */}
        {sidebarExpanded && renderSidebarContent()}
      </div>
    </div>
  );
};

export default Sidebar;
