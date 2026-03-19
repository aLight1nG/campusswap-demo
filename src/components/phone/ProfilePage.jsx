import { motion } from 'framer-motion';
import { CheckCircle, Star, Package, ArrowRightLeft, Shield, Settings, ChevronRight } from 'lucide-react';

const menuItems = [
  { icon: Package, label: '我的发布', badge: '3', color: 'text-primary' },
  { icon: ArrowRightLeft, label: '我的交易', badge: '2', color: 'text-success' },
  { icon: Shield, label: '实名认证', badge: '已认证', color: 'text-purple-500' },
  { icon: Settings, label: '设置', color: 'text-gray-500' },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 头部 */}
      <div className="bg-gradient-to-br from-primary to-primary-light p-5 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl border-2 border-white/40">
            🧑‍💻
          </div>
          <div className="text-white">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base">Demo体验官</span>
              <span className="flex items-center gap-0.5 text-[10px] bg-white/20 rounded-full px-1.5 py-0.5">
                <CheckCircle className="w-3 h-3" />
                已认证
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-white/80 text-xs">
              <span className="flex items-center gap-0.5">
                <Star className="w-3 h-3 text-warning" />
                信用 120
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 数据卡片 */}
      <div className="mx-4 -mt-4 bg-white rounded-xl p-4 shadow-sm grid grid-cols-3 text-center">
        {[
          { num: '3', label: '发布' },
          { num: '2', label: '成交' },
          { num: '120', label: '信用分' },
        ].map((s, i) => (
          <div key={i} className={i > 0 ? 'border-l border-gray-100' : ''}>
            <div className="text-xl font-bold text-primary">{s.num}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 菜单 */}
      <div className="mx-4 mt-4 bg-white rounded-xl overflow-hidden shadow-sm">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.98, backgroundColor: '#f8fafc' }}
            className="flex items-center gap-3 px-4 py-3.5 cursor-pointer border-b border-gray-50 last:border-none"
          >
            <item.icon className={`w-5 h-5 ${item.color}`} />
            <span className="flex-1 text-sm font-medium">{item.label}</span>
            {item.badge && (
              <span className="text-xs text-gray-400 mr-1">{item.badge}</span>
            )}
            <ChevronRight className="w-4 h-4 text-gray-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
