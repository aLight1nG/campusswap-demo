export const mockPosts = [
  { id: 1, title: "高数第七版 + 配套习题册", mode: "sell", price: 25, category: "textbook", image: "📚", user: "学长小王", verified: true, time: "3小时前", views: 42, desc: "全新未拆封，课本+习题册+答案解析三件套。大一上学期必备，比书店便宜一半。" },
  { id: 2, title: "九成新台灯 宿舍搬走带不了", mode: "give", category: "living", image: "💡", user: "毕业生小李", verified: true, time: "5小时前", views: 28, desc: "用了一年的LED台灯，三档调光，成色很新。毕业了带不走，免费送给有需要的同学。" },
  { id: 3, title: "求一个考研英语真题集", mode: "want", category: "textbook", image: "📖", user: "考研党小张", verified: false, time: "1天前", views: 15, desc: "求购近十年考研英语一真题集，最好带详细解析的版本，二手即可。" },
  { id: 4, title: "AirPods Pro 2 轻度使用", mode: "sell", price: 388, category: "digital", image: "🎧", user: "数码达人", verified: true, time: "2小时前", views: 67, desc: "去年双十一购入，使用频率低，功能完好，降噪效果一流。配件齐全，包装盒都在。" },
  { id: 5, title: "瑜伽垫 + 哑铃套装", mode: "sell", price: 45, category: "sports", image: "🏋️", user: "健身小美", verified: true, time: "6小时前", views: 31, desc: "瑜伽垫10mm加厚款+可调节哑铃一对。健身入门套装，宿舍就能练。" },
  { id: 6, title: "全套四级资料免费送", mode: "give", category: "textbook", image: "📝", user: "已过六级的学姐", verified: true, time: "1天前", views: 89, desc: "包括真题集、词汇书、听力教程，已经用不到了。一次性全部打包送出，先到先得！" },
  { id: 7, title: "求借单反相机 拍毕业照用3天", mode: "want", category: "digital", image: "📷", user: "摄影小白", verified: true, time: "4小时前", views: 23, desc: "想借一台单反相机拍毕业照，大概用3天左右，会爱惜使用。可以付押金或租金。" },
  { id: 8, title: "小米充电宝 20000mAh", mode: "sell", price: 35, category: "digital", image: "🔋", user: "换新党", verified: false, time: "8小时前", views: 19, desc: "换了新的充电宝，这个转出。20000mAh大容量，支持快充，日常够用。" },
];

export const mockChats = [
  {
    id: 1,
    user: "学长小王",
    avatar: "👨‍🎓",
    lastMsg: "好的，那我们约明天中午图书馆门口？",
    time: "10分钟前",
    unread: 1,
    messages: [
      { from: "other", text: "你好，请问高数课本还在吗？", time: "14:20" },
      { from: "me", text: "在的，全新未拆封哦", time: "14:21" },
      { from: "other", text: "太好了！能便宜点吗？20块行不？", time: "14:22" },
      { from: "me", text: "可以的，20成交", time: "14:23" },
      { from: "other", text: "好的，那我们约明天中午图书馆门口？", time: "14:25" },
      { from: "meetup", text: "📍 面交邀请", location: "图书馆门口", time: "明天 12:00", status: "待确认" },
    ],
  },
  {
    id: 2,
    user: "已过六级的学姐",
    avatar: "👩‍🎓",
    lastMsg: "资料已经给你留着了~",
    time: "1小时前",
    unread: 0,
    messages: [
      { from: "me", text: "学姐你好，四级资料还有吗？", time: "12:10" },
      { from: "other", text: "有的有的，你方便的话来取就行", time: "12:15" },
      { from: "me", text: "太感谢了！我下午有空", time: "12:16" },
      { from: "other", text: "资料已经给你留着了~", time: "12:20" },
    ],
  },
  {
    id: 3,
    user: "数码达人",
    avatar: "🧑‍💻",
    lastMsg: "AirPods可以先试听再决定",
    time: "3小时前",
    unread: 0,
    messages: [
      { from: "me", text: "请问AirPods能试听吗？", time: "10:00" },
      { from: "other", text: "AirPods可以先试听再决定", time: "10:05" },
    ],
  },
];

export const modeConfig = {
  sell: { label: "出售", color: "bg-primary text-white", textColor: "text-primary" },
  give: { label: "赠送", color: "bg-success text-white", textColor: "text-success" },
  want: { label: "求购", color: "bg-warning text-gray-800", textColor: "text-warning" },
};

export const categoryConfig = {
  all: "全部",
  textbook: "教材",
  living: "生活",
  digital: "数码",
  sports: "运动",
};
