import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tag, Repeat, Gift, Clock } from 'lucide-react';

const features = [
  {
    icon: Tag,
    title: '低价转让',
    desc: '闲置好物低价出，让物品发挥二次价值',
    color: 'from-primary to-blue-400',
    iconBg: 'bg-blue-100',
    iconColor: 'text-primary',
  },
  {
    icon: Repeat,
    title: '以物换物',
    desc: '你的闲置是我的需要，资源互补互利共赢',
    color: 'from-purple-500 to-pink-400',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Gift,
    title: '免费赠送',
    desc: '毕业离校好物相赠，传递温暖校园情谊',
    color: 'from-success to-emerald-400',
    iconBg: 'bg-green-100',
    iconColor: 'text-success',
  },
  {
    icon: Clock,
    title: '短期借用',
    desc: '临时需要不必购买，借用归还绿色循环',
    color: 'from-warning to-orange-400',
    iconBg: 'bg-orange-100',
    iconColor: 'text-warning',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            功能亮点
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            四大流转模式
          </h2>
          <p className="text-text-secondary mt-4 text-lg">覆盖校园闲置流转的所有场景</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group relative bg-bg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`w-14 h-14 ${f.iconBg} group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                  <f.icon className={`w-7 h-7 ${f.iconColor} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{f.title}</h3>
                <p className="text-text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
