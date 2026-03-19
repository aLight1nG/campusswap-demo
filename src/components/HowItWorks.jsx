import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Search, MessageCircle, Handshake, Star, ArrowRight } from 'lucide-react';

const steps = [
  { icon: Upload, title: '发布', desc: '一键发布闲置信息' },
  { icon: Search, title: '匹配', desc: 'AI智能推荐对接' },
  { icon: MessageCircle, title: '沟通', desc: '站内即时聊天' },
  { icon: Handshake, title: '面交', desc: '30分钟同校交付' },
  { icon: Star, title: '评价', desc: '双向信用积累' },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-success/10 text-success text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            产品流程
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            30分钟极速流转
          </h2>
          <p className="text-text-secondary mt-4 text-lg">从发布到交付，极致简单</p>
        </motion.div>

        {/* 桌面端横向流程 */}
        <div className="hidden md:flex items-start justify-between gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex flex-col items-center text-center w-36">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 hover:bg-primary hover:scale-110 transition-all group cursor-default">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-primary/30 mx-2 mt-5 shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* 移动端纵向流程 */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
