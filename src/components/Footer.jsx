import { Repeat2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Repeat2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl">校易与</span>
        </div>
        <p className="text-gray-400 mb-2">同校闲置，触手可及</p>
        <p className="text-gray-500 text-sm">
          2026年"挑战杯"中国大学生创业计划竞赛参赛作品
        </p>
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs">
            本网站仅用于竞赛展示，不含个人信息
          </p>
        </div>
      </div>
    </footer>
  );
}
