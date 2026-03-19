import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Clock, ShieldOff } from 'lucide-react';

const points = [
  {
    icon: AlertTriangle,
    title: '信息分散',
    desc: '闲置信息散落在QQ群、朋友圈、宿舍公告栏，发布难、搜索难、匹配效率极低。',
    color: 'text-danger',
    bg: 'bg-red-50',
  },
  {
    icon: Clock,
    title: '履约成本高',
    desc: '跨校快递费用高、时间长，同城面交又缺乏标准化流程，经常被放鸽子。',
    color: 'text-warning',
    bg: 'bg-yellow-50',
  },
  {
    icon: ShieldOff,
    title: '信任缺失',
    desc: '匿名交易无保障，商品质量无评价，钱货两清无凭证，纠纷频发。',
    color: 'text-primary',
    bg: 'bg-blue-50',
  },
];

export default function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pain" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-danger/10 text-danger text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            行业痛点
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            3700万大学生的闲置困局
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
            每年毕业季，大量可用物品被丢弃；每学期开学，新生重复购买相同物品
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`w-14 h-14 ${p.bg} rounded-xl flex items-center justify-center mb-5`}>
                <p.icon className={`w-7 h-7 ${p.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-text-secondary leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
