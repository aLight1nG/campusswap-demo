import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const stats = [
  { num: '8/10', label: '高频刚需', desc: '受访者表示每学期有闲置交易需求', color: 'text-primary' },
  { num: '9/10', label: '近场接受', desc: '更愿意选择同校面交而非快递', color: 'text-success' },
  { num: '10/10', label: '实名信任', desc: '认为实名认证能显著提升信任感', color: 'text-purple-600' },
  { num: '7/10', label: '付费意愿', desc: '愿意为增值服务支付合理费用', color: 'text-warning' },
];

const radarData = [
  { subject: '高频刚需', value: 80 },
  { subject: '近场接受', value: 90 },
  { subject: '实名信任', value: 100 },
  { subject: '付费意愿', value: 70 },
  { subject: '社交需求', value: 75 },
  { subject: '环保意识', value: 85 },
];

export default function DataValidation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="data" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-success/10 text-success text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            数据验证
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            调研数据验证
          </h2>
          <p className="text-text-secondary mt-4 text-lg">真实调研数据支撑产品方向</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 数据卡片 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`text-4xl sm:text-5xl font-extrabold ${s.color} mb-2`}>{s.num}</div>
                <div className="font-bold text-lg mb-1">{s.label}</div>
                <p className="text-text-secondary text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 雷达图 */}
          <motion.div
            className="bg-card rounded-2xl p-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4 text-center">需求维度分析</h3>
            <ResponsiveContainer width="100%" height={320}>
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#64748B' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="需求强度"
                  dataKey="value"
                  stroke="#1A73E8"
                  fill="#1A73E8"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-text-secondary text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          数据来源：项目团队问卷调研（n=10）
        </motion.p>
      </div>
    </section>
  );
}
