import { Home, MessageCircle, PlusCircle, User } from 'lucide-react';

const tabs = [
  { id: 'feed', label: '首页', icon: Home },
  { id: 'chat', label: '消息', icon: MessageCircle },
  { id: 'publish', label: '发布', icon: PlusCircle },
  { id: 'profile', label: '我的', icon: User },
];

export default function PhoneTabBar({ activeTab, onTabChange, unreadCount = 0 }) {
  return (
    <div className="h-14 bg-white border-t border-gray-100 flex items-center justify-around px-2 shrink-0">
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 relative bg-transparent border-none cursor-pointer transition-colors ${
              active ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <tab.icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.5} />
            <span className={`text-[10px] ${active ? 'font-semibold' : ''}`}>{tab.label}</span>
            {tab.id === 'chat' && unreadCount > 0 && (
              <span className="absolute -top-0.5 right-1 w-4 h-4 bg-danger text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
