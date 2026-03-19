import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Eye, CheckCircle } from 'lucide-react';
import { mockPosts, modeConfig, categoryConfig } from './mockData';

export default function FeedPage({ onSelectPost, extraPosts = [] }) {
  const [modeFilter, setModeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const allPosts = [...extraPosts, ...mockPosts];

  const filtered = allPosts.filter((p) => {
    if (modeFilter !== 'all' && p.mode !== modeFilter) return false;
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    return true;
  });

  const modes = [
    { id: 'all', label: '全部' },
    { id: 'sell', label: '卖' },
    { id: 'give', label: '送' },
    { id: 'want', label: '求' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 顶部搜索栏 */}
      <div className="bg-primary px-3 pb-3 pt-1 shrink-0">
        <div className="bg-white/20 rounded-full h-8 flex items-center px-3 gap-2">
          <Search className="w-3.5 h-3.5 text-white/60" />
          <span className="text-white/60 text-xs">搜索闲置好物...</span>
        </div>
      </div>

      {/* 模式筛选 */}
      <div className="bg-white px-3 py-2 flex gap-1 shrink-0 border-b border-gray-100">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => setModeFilter(m.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium border-none cursor-pointer transition-colors ${
              modeFilter === m.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* 品类筛选 */}
      <div className="bg-white px-3 py-2 flex gap-1 overflow-x-auto shrink-0 scrollbar-hide">
        {Object.entries(categoryConfig).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategoryFilter(key)}
            className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap border-none cursor-pointer transition-colors ${
              categoryFilter === key
                ? 'bg-primary/10 text-primary font-medium'
                : 'bg-transparent text-gray-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 卡片列表 */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 scrollbar-hide">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectPost(post)}
              className="bg-white rounded-xl p-3 flex gap-3 cursor-pointer active:bg-gray-50 shadow-sm"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center text-2xl shrink-0">
                {post.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-1.5 mb-1">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${modeConfig[post.mode].color} shrink-0`}>
                    {modeConfig[post.mode].label}
                  </span>
                  <h4 className="text-xs font-medium text-gray-800 truncate leading-tight">{post.title}</h4>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-sm font-bold text-primary">
                    {post.mode === 'sell' ? `¥${post.price}` : post.mode === 'give' ? '免费' : '求购'}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-[10px]">
                    <span className="flex items-center gap-0.5">
                      {post.verified && <CheckCircle className="w-3 h-3 text-success" />}
                      {post.user}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
