import { motion } from 'framer-motion';
import { ArrowDown, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-light">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文案 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/90 text-sm">2026挑战杯参赛作品</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              校易与
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-white/90 mb-6">
              同校闲置，触手可及
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              基于校园近场社交的闲置物品智能流转平台。通过实名认证、AI匹配与面交履约，让3700万大学生的闲置好物高效流转。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg no-underline hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
              >
                <Smartphone className="w-5 h-5" />
                体验Demo
              </a>
              <a
                href="#pain"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg no-underline hover:bg-white/10 transition-all"
              >
                了解更多
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </motion.div>

          {/* 右侧手机预览 */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* 手机模型 */}
              <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/30 border border-gray-700">
                <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden flex flex-col">
                  {/* 状态栏 */}
                  <div className="h-11 bg-primary flex items-center justify-center">
                    <div className="w-20 h-5 bg-black rounded-full" />
                  </div>
                  {/* 搜索栏 */}
                  <div className="bg-primary px-4 pb-3">
                    <div className="bg-white/20 rounded-full h-9 flex items-center px-4">
                      <span className="text-white/60 text-xs">🔍 搜索闲置好物...</span>
                    </div>
                  </div>
                  {/* 模拟列表 */}
                  <div className="flex-1 p-3 space-y-2 overflow-hidden">
                    {[
                      { emoji: '📚', title: '高数第七版', price: '¥25', tag: '出售' },
                      { emoji: '💡', title: '九成新台灯', price: '免费', tag: '赠送' },
                      { emoji: '🎧', title: 'AirPods Pro 2', price: '¥388', tag: '出售' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-xl"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.15 }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                          {item.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-800 truncate">{item.title}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs font-bold text-primary">{item.price}</span>
                            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">{item.tag}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* 底部TabBar */}
                  <div className="h-12 border-t border-gray-100 flex items-center justify-around px-4">
                    {['首页', '消息', '发布', '我的'].map((t, i) => (
                      <span key={i} className={`text-[10px] ${i === 0 ? 'text-primary font-semibold' : 'text-gray-400'}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* 光晕 */}
              <div className="absolute -inset-10 bg-white/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto block">
          <path fill="#F8FAFC" d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
