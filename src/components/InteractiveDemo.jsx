import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MousePointerClick, ArrowLeft, MessageCircle, PlusCircle } from 'lucide-react';
import PhoneFrame from './phone/PhoneFrame';

const hints = [
  { icon: MousePointerClick, text: '点击卡片查看详情' },
  { icon: MessageCircle, text: '进入消息页发送聊天' },
  { icon: PlusCircle, text: '试试发布新物品' },
  { icon: ArrowLeft, text: '详情页可返回首页' },
];

export default function InteractiveDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="demo" className="py-20 sm:py-28 bg-gradient-to-b from-white via-primary/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            互动体验
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            亲自体验
          </h2>
          <p className="text-text-secondary mt-4 text-lg">在下方的模拟器中体验校易与的核心功能</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* 左侧引导 */}
          <motion.div
            className="hidden lg:flex flex-col gap-4 w-48"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {hints.slice(0, 2).map((h, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-text-secondary"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">{h.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* 手机模拟器 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PhoneFrame />
          </motion.div>

          {/* 右侧引导 */}
          <motion.div
            className="hidden lg:flex flex-col gap-4 w-48"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {hints.slice(2).map((h, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-text-secondary"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">{h.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* 移动端引导 */}
          <div className="flex lg:hidden gap-4 flex-wrap justify-center">
            {hints.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-text-secondary">
                <h.icon className="w-4 h-4 text-primary" />
                <span className="text-xs">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
