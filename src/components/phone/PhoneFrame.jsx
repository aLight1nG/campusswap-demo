import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PhoneTabBar from './PhoneTabBar';
import FeedPage from './FeedPage';
import DetailPage from './DetailPage';
import ChatPage from './ChatPage';
import PublishPage from './PublishPage';
import ProfilePage from './ProfilePage';
import { mockChats } from './mockData';

export default function PhoneFrame() {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedPost, setSelectedPost] = useState(null);
  const [initialChat, setInitialChat] = useState(null);
  const [extraPosts, setExtraPosts] = useState([]);

  const handleSelectPost = useCallback((post) => {
    setSelectedPost(post);
  }, []);

  const handleContact = useCallback(() => {
    // 跳转到消息页并打开第一个聊天
    setSelectedPost(null);
    setInitialChat(mockChats[0]);
    setActiveTab('chat');
  }, []);

  const handlePublish = useCallback((newPost) => {
    setExtraPosts((prev) => [newPost, ...prev]);
    setActiveTab('feed');
  }, []);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setSelectedPost(null);
    if (tab !== 'chat') setInitialChat(null);
  }, []);

  const unreadCount = mockChats.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div className="relative">
      {/* 手机外壳 */}
      <div className="w-[320px] sm:w-[375px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/30 border border-gray-700 relative overflow-hidden">
        {/* 顶部高光 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />

        {/* 屏幕 */}
        <div className="w-full rounded-[2.3rem] overflow-hidden bg-white flex flex-col" style={{ height: '600px' }}>
          {/* 状态栏 + 刘海 */}
          <div className="h-10 bg-primary flex items-center justify-center relative shrink-0">
            <div className="w-24 h-6 bg-black rounded-full absolute" />
            <div className="absolute left-4 text-white text-[10px] font-medium">9:41</div>
            <div className="absolute right-4 flex items-center gap-1">
              <div className="w-4 h-2 border border-white/60 rounded-sm relative">
                <div className="absolute inset-[1px] bg-white/60 rounded-[1px]" style={{ width: '70%' }} />
              </div>
            </div>
          </div>

          {/* 内容区 */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {activeTab === 'feed' && (
                  <FeedPage onSelectPost={handleSelectPost} extraPosts={extraPosts} />
                )}
                {activeTab === 'chat' && <ChatPage initialChat={initialChat} />}
                {activeTab === 'publish' && <PublishPage onPublish={handlePublish} />}
                {activeTab === 'profile' && <ProfilePage />}
              </motion.div>
            </AnimatePresence>

            {/* 详情页覆盖层 */}
            <AnimatePresence>
              {selectedPost && (
                <div className="absolute inset-0 z-10">
                  <DetailPage
                    post={selectedPost}
                    onBack={() => setSelectedPost(null)}
                    onContact={handleContact}
                  />
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* TabBar（详情页打开时隐藏） */}
          {!selectedPost && (
            <PhoneTabBar
              activeTab={activeTab}
              onTabChange={handleTabChange}
              unreadCount={unreadCount}
            />
          )}
        </div>
      </div>

      {/* 底部home indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full" />
    </div>
  );
}
