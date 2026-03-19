import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Gift, Search, CheckCircle, ArrowLeft } from 'lucide-react';

const modeOptions = [
  { id: 'sell', label: '出售', desc: '设定价格转让', icon: Tag, color: 'border-primary text-primary bg-primary/5' },
  { id: 'give', label: '赠送', desc: '免费送给同学', icon: Gift, color: 'border-success text-success bg-success/5' },
  { id: 'want', label: '求购', desc: '发布需求信息', icon: Search, color: 'border-warning text-warning bg-warning/5' },
];

const categories = ['教材', '生活', '数码', '运动'];

export default function PublishPage({ onPublish }) {
  const [step, setStep] = useState('mode'); // mode | form | success
  const [mode, setMode] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) return;

    const categoryMap = { '教材': 'textbook', '生活': 'living', '数码': 'digital', '运动': 'sports' };
    const emojis = { 'textbook': '📦', 'living': '🏠', 'digital': '📱', 'sports': '⚽' };
    const cat = categoryMap[category] || 'living';

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      mode,
      price: mode === 'sell' ? Number(price) || 0 : undefined,
      category: cat,
      image: emojis[cat],
      user: 'Demo体验官',
      verified: true,
      time: '刚刚',
      views: 0,
      desc: desc.trim() || '暂无描述',
    };

    setStep('success');
    setTimeout(() => {
      onPublish(newPost);
      // 重置表单
      setStep('mode');
      setMode(null);
      setTitle('');
      setDesc('');
      setCategory('');
      setPrice('');
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="h-11 bg-white flex items-center px-3 border-b border-gray-100 shrink-0">
        {step === 'form' && (
          <button onClick={() => setStep('mode')} className="flex items-center text-primary bg-transparent border-none cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}
        <span className="flex-1 text-center text-sm font-semibold">发布</span>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
          {step === 'mode' && (
            <motion.div
              key="mode"
              className="p-4 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-xs text-gray-500 mb-2">选择发布类型</p>
              {modeOptions.map((m) => (
                <motion.div
                  key={m.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setMode(m.id); setStep('form'); }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${m.color}`}
                >
                  <m.icon className="w-6 h-6" />
                  <div>
                    <div className="font-semibold text-sm">{m.label}</div>
                    <div className="text-[11px] opacity-70">{m.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {step === 'form' && (
            <motion.div
              key="form"
              className="p-4 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div>
                <label className="text-xs text-gray-500 mb-1 block">标题</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="一句话描述你的物品"
                  className="w-full bg-white rounded-xl px-3 py-2.5 text-sm border border-gray-200 outline-none focus:border-primary transition-colors box-border"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1 block">描述</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="详细描述物品状况..."
                  rows={3}
                  className="w-full bg-white rounded-xl px-3 py-2.5 text-sm border border-gray-200 outline-none focus:border-primary transition-colors resize-none box-border"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">品类</label>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`px-3 py-1.5 rounded-full text-xs border-none cursor-pointer transition-colors ${
                        category === c ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {mode === 'sell' && (
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">价格</label>
                  <div className="flex items-center bg-white rounded-xl border border-gray-200 px-3">
                    <span className="text-primary font-semibold">¥</span>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0"
                      className="flex-1 py-2.5 text-sm outline-none border-none bg-transparent pl-1"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!title.trim()}
                className={`w-full py-3 rounded-xl font-semibold text-sm border-none cursor-pointer transition-all ${
                  title.trim()
                    ? 'bg-primary text-white active:scale-[0.98]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                确认发布
              </button>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              className="flex flex-col items-center justify-center h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10, stiffness: 200 }}
              >
                <CheckCircle className="w-16 h-16 text-success" />
              </motion.div>
              <p className="text-lg font-bold mt-4">发布成功！</p>
              <p className="text-sm text-gray-500 mt-1">即将返回首页...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
