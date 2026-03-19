import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCheck, MapPin, Repeat2, Cpu } from 'lucide-react';

const solutions = [
  {
    num: '01',
    icon: UserCheck,
    title: '同校实名',
    desc: '校园邮箱实名认证，身份可信、社区可控，建立校内信用体系。',
  },
  {
    num: '02',
    icon: MapPin,
    title: '近场履约',
    desc: '基于校园地理围栏，主打30分钟同校面交，零快递成本。',
  },
  {
    num: '03',
    icon: Repeat2,
    title: '多维流转',
    desc: '支持低价转让、以物换物、免费赠送、短期借用四大模式。',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'AI匹配',
    desc: '基于用户画像与行为数据的智能推荐，供需精准对接。',
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            解决方案
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            不是校园版闲鱼
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            而是校园供需平衡系统
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              className="relative bg-bg rounded-2xl p-6 hover:bg-primary hover:text-white group transition-colors duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <span className="text-5xl font-extrabold text-primary/10 group-hover:text-white/10 transition-colors absolute top-4 right-4">
                {s.num}
              </span>
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
