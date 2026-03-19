import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, CheckCircle, MessageCircle, Star } from 'lucide-react';
import { modeConfig, categoryConfig } from './mockData';

export default function DetailPage({ post, onBack, onContact }) {
  return (
    <motion.div
      className="flex flex-col h-full bg-white"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {/* 顶部栏 */}
      <div className="h-11 bg-white flex items-center px-3 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="flex items-center gap-1 text-primary bg-transparent border-none cursor-pointer text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>返回</span>
        </button>
        <span className="flex-1 text-center text-sm font-medium">商品详情</span>
        <div className="w-12" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* 图片区 */}
        <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
          <span className="text-7xl">{post.image}</span>
        </div>

        <div className="p-4 space-y-4">
          {/* 标签 */}
          <div className="flex gap-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${modeConfig[post.mode].color}`}>
              {modeConfig[post.mode].label}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              {categoryConfig[post.category]}
            </span>
          </div>

          {/* 标题价格 */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">{post.title}</h2>
            <div className="text-2xl font-extrabold text-primary">
              {post.mode === 'sell' ? `¥${post.price}` : post.mode === 'give' ? '免费赠送' : '求购中'}
            </div>
          </div>

          {/* 描述 */}
          <p className="text-sm text-gray-600 leading-relaxed">{post.desc}</p>

          {/* 面交信息 */}
          <div className="bg-primary/5 rounded-xl p-3 space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="w-4 h-4 text-primary" />
              <span>图书馆门口</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="w-4 h-4 text-primary" />
              <span>周一至周五 12:00-14:00</span>
            </div>
          </div>

          {/* 发布者信息 */}
          <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl">
              {post.verified ? '👤' : '👤'}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">{post.user}</span>
                {post.verified && (
                  <span className="flex items-center gap-0.5 text-[10px] text-success">
                    <CheckCircle className="w-3 h-3" />
                    已认证
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                <span className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 text-warning" />
                  信用 120
                </span>
                <span>好评 96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="p-3 border-t border-gray-100 shrink-0">
        <button
          onClick={onContact}
          className="w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm border-none cursor-pointer hover:bg-primary-light transition-colors active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4" />
          联系TA
        </button>
      </div>
    </motion.div>
  );
}
