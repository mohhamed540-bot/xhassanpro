import React from 'react';
import {
  Palette,
  Eye,
  Sliders,
  Sparkles,
  Volume2,
  VolumeX,
  Type,
  Sun,
  Moon,
  Layers,
  Check,
  Zap,
  Image as ImageIcon,
  X
} from 'lucide-react';

export interface ThemeAndWallpaperCenterProps {
  isOpen: boolean;
  onClose: () => void;
  activeTheme: string;
  onChangeTheme: (themeId: string) => void;
  activeWallpaper: string;
  onChangeWallpaper: (wallpaperId: string) => void;
  fontFamily: string;
  onChangeFontFamily: (fontId: string) => void;
  chatFontSize: 'sm' | 'base' | 'lg' | 'xl';
  onChangeFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  bubbleStyle: string;
  onChangeBubbleStyle: (styleId: string) => void;
  nameColor?: string;
  onChangeNameColor?: (color: string) => void;
  textColor?: string;
  onChangeTextColor?: (color: string) => void;
  eyeComfort: boolean;
  onToggleEyeComfort: () => void;
  soundVolume: number;
  onChangeSoundVolume: (volume: number) => void;
  particlesEnabled: boolean;
  onToggleParticles: () => void;
  currentUserRole?: string;
  onApplyGlobalAppearance?: (app: { theme?: string; fontFamily?: string; wallpaper?: string; bubbleStyle?: string }) => void;
  onShowToast: (msg: string, type?: 'info' | 'success' | 'error') => void;
}

export interface ThemeDefinition {
  id: string;
  name: string;
  bg: string;
  primary: string;
  accent: string;
  colors: string[];
}

export const THEMES_LIST: ThemeDefinition[] = [
  {
    id: 'andalusian-jasmine-palace',
    name: 'ياسمين الأندلس والرخام الملكي الأخضر 🏛️🌿',
    bg: 'bg-[#021810]',
    primary: 'border-emerald-500 text-emerald-200',
    accent: '#10b981',
    colors: ['#10b981', '#059669', '#022c22', '#fef08a']
  },
  {
    id: 'imperial-obsidian-gold',
    name: 'الأوبسيديان الأسود والذهب الخالص 24K 👑✨',
    bg: 'bg-[#050507]',
    primary: 'border-amber-400 text-amber-300',
    accent: '#f59e0b',
    colors: ['#f59e0b', '#fbbf24', '#18181b', '#000000']
  },
  {
    id: 'persian-lapis-lazuli',
    name: 'لازورد قصر أصفهان والأزرق الملكي 🌌🧿',
    bg: 'bg-[#050b1f]',
    primary: 'border-blue-500 text-blue-200',
    accent: '#2563eb',
    colors: ['#2563eb', '#1d4ed8', '#0b1940', '#67e8f9']
  },
  {
    id: 'royal-oud-ambergris',
    name: 'العود الكمبودي والعنبر الدخاني المعتق 🪵🔥',
    bg: 'bg-[#1a0a04]',
    primary: 'border-amber-600 text-amber-200',
    accent: '#d97706',
    colors: ['#d97706', '#9a3412', '#270f05', '#fed7aa']
  },
  {
    id: 'cosmic-aurora-borealis',
    name: 'شفق الشتاء القطبي والزمرد البنفسجي 🌌❄️',
    bg: 'bg-[#060414]',
    primary: 'border-teal-400 text-teal-200',
    accent: '#2dd4bf',
    colors: ['#2dd4bf', '#a855f7', '#0e0b29', '#e0e7ff']
  },
  {
    id: 'emerald-gold-palace',
    name: 'قصر الزمرد الملكي والذهب الأندلسي 🏛️✨',
    bg: 'bg-[#03261a]',
    primary: 'border-emerald-500 text-emerald-200',
    accent: '#10b981',
    colors: ['#10b981', '#059669', '#022c22', '#fbbf24']
  },
  {
    id: 'midnight-neon-cyber',
    name: 'نيون سايبر وسحر الليل المستقبلي ⚡🌃',
    bg: 'bg-[#080d16]',
    primary: 'border-cyan-400 text-cyan-200',
    accent: '#06b6d4',
    colors: ['#06b6d4', '#0891b2', '#081426', '#a855f7']
  },
  {
    id: 'royal-crimson-velvet',
    name: 'المخمل العنابي الإمبراطوري وذهب الباشا 🍷👑',
    bg: 'bg-[#2b0612]',
    primary: 'border-rose-600 text-rose-200',
    accent: '#e11d48',
    colors: ['#e11d48', '#9f1239', '#4c0519', '#fde047']
  },
  {
    id: 'desert-dune-gold',
    name: 'رمال الصحراء الذهبية وأصالة البادية 🏜️🦅',
    bg: 'bg-[#2a1708]',
    primary: 'border-amber-600 text-amber-200',
    accent: '#d97706',
    colors: ['#f59e0b', '#d97706', '#451a03', '#fef3c7']
  },
  {
    id: 'arctic-sapphire-frost',
    name: 'ياقوت الجليد الملكي والأزرق الفيروزي ❄️💎',
    bg: 'bg-[#051526]',
    primary: 'border-sky-400 text-sky-200',
    accent: '#0284c7',
    colors: ['#38bdf8', '#0284c7', '#082f49', '#e0f2fe']
  },
  {
    id: 'golden-brown-harmony',
    name: 'الذهبي وبني الموكا الملكي ☕👑',
    bg: 'bg-[#1c120c]',
    primary: 'border-amber-500 text-amber-200',
    accent: '#d97706',
    colors: ['#d97706', '#92400e', '#451a03', '#fef3c7']
  },
  {
    id: 'dam-ghazal-royal',
    name: 'دم الغزال المخملي الداكن 🦌🩸',
    bg: 'bg-[#22040c]',
    primary: 'border-rose-900 text-rose-300',
    accent: '#9f1239',
    colors: ['#9f1239', '#881337', '#4c0519', '#ffe4e6']
  },
  {
    id: 'royal-turquoise',
    name: 'الفيروز السلطاني والأبيض اللؤلؤي 💠',
    bg: 'bg-[#081b24]',
    primary: 'border-cyan-600 text-cyan-200',
    accent: '#06b6d4',
    colors: ['#06b6d4', '#0891b2', '#083344', '#ecfeff']
  },
  {
    id: 'sunset-bronze',
    name: 'غروب الصحراء والبرونز النحاسي 🌅',
    bg: 'bg-[#1e130c]',
    primary: 'border-orange-600 text-orange-200',
    accent: '#ea580c',
    colors: ['#ea580c', '#c2410c', '#431407', '#ffedd5']
  },
  {
    id: 'amethyst-velvet',
    name: 'الأرجوان المخملي والذهب الساطع 🔮👑',
    bg: 'bg-[#150722]',
    primary: 'border-purple-600 text-purple-200',
    accent: '#9333ea',
    colors: ['#9333ea', '#7e22ce', '#3b0764', '#f5d0fe']
  },
  {
    id: 'dark-gold',
    name: 'صقر الليل (ذهبي ملكي أصيل) 🦅',
    bg: 'bg-slate-950',
    primary: 'border-amber-500 text-amber-400',
    accent: '#f59e0b',
    colors: ['#f59e0b', '#b45309', '#1e293b', '#0f172a']
  },
  {
    id: 'royal-gold-brown',
    name: 'الذهب الملكي والخشب البني 🪵',
    bg: 'bg-[#18110b]',
    primary: 'border-amber-600 text-amber-300',
    accent: '#d97706',
    colors: ['#d97706', '#78350f', '#29180c', '#fde68a']
  },
  {
    id: 'dam-ghazal',
    name: 'دم الغزال الكلاسيكي 🦌',
    bg: 'bg-[#1a080c]',
    primary: 'border-rose-700 text-rose-300',
    accent: '#9f1239',
    colors: ['#be123c', '#881337', '#25050e', '#fecdd3']
  },
  {
    id: 'sapphire-night',
    name: 'الياقوت الأزرق الليلي والنيون 💎',
    bg: 'bg-[#09111e]',
    primary: 'border-blue-600 text-blue-300',
    accent: '#2563eb',
    colors: ['#2563eb', '#1d4ed8', '#0f172a', '#93c5fd']
  },
  {
    id: 'emerald-sand',
    name: 'واحة الزمرد والرمال الذهبية 🌿',
    bg: 'bg-[#0c1610]',
    primary: 'border-emerald-600 text-emerald-300',
    accent: '#059669',
    colors: ['#059669', '#047857', '#022c22', '#a7f3d0']
  },
  {
    id: 'violet-twilight',
    name: 'شفق الليل واللافندر 🔮',
    bg: 'bg-[#140b1c]',
    primary: 'border-purple-600 text-purple-300',
    accent: '#9333ea',
    colors: ['#a855f7', '#7e22ce', '#1e112a', '#e9d5ff']
  },
  {
    id: 'amber-oasis',
    name: 'واحة الصحراء (عنبر دافئ) 🏜️',
    bg: 'bg-stone-950',
    primary: 'border-orange-500 text-orange-400',
    accent: '#f97316',
    colors: ['#f97316', '#c2410c', '#1c1917', '#fed7aa']
  },
  {
    id: 'ruby-velvet',
    name: 'الياقوت الملكي (أحمر عنابي) 🍷',
    bg: 'bg-zinc-950',
    primary: 'border-rose-600 text-rose-400',
    accent: '#e11d48',
    colors: ['#e11d48', '#9f1239', '#18181b', '#fecdd3']
  },
  {
    id: 'deep-ocean',
    name: 'المحيط الهادئ (أزرق نيلي) 🌊',
    bg: 'bg-slate-950',
    primary: 'border-cyan-500 text-cyan-400',
    accent: '#06b6d4',
    colors: ['#06b6d4', '#0284c7', '#0f172a', '#bae6fd']
  },
  {
    id: 'emerald-forest',
    name: 'الزمرد الأخضر (واحة خضراء) 🌲',
    bg: 'bg-stone-950',
    primary: 'border-emerald-500 text-emerald-400',
    accent: '#10b981',
    colors: ['#10b981', '#047857', '#0c1610', '#6ee7b7']
  }
];

export const WALLPAPERS_LIST = [
  { id: 'default', name: 'سادة هادئ', preview: 'bg-slate-950' },
  { id: 'stars', name: 'ليل النجوم المتلألئة 🌌', preview: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-black' },
  { id: 'desert', name: 'كثبان الرمال والصحراء 🏜️', preview: 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-950/40 via-stone-950 to-slate-950' },
  { id: 'arabesque', name: 'نقوش وزخارف إسلامية 🕌', preview: 'bg-slate-950 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]' },
  { id: 'luxury-wood', name: 'مجلس الخشب الفاخر 🪵', preview: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black' },
  { id: 'cyber-grid', name: 'شبكة السايبر ثلاثية الأبعاد 🌐', preview: 'bg-slate-950 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px]' }
];

export const FONTS_LIST = [
  { id: 'Noto Naskh Arabic', name: 'خط النسخ العادي (Naskh) - المعتمد والأصيل', family: "'Noto Naskh Arabic', sans-serif" },
  { id: 'Cairo', name: 'خط القاهرة (Cairo) - الأصلي المعتمد', family: "'Cairo', sans-serif" },
  { id: 'Tajawal', name: 'خط تجوال (Tajawal) - حديث وأنيق', family: "'Tajawal', sans-serif" },
  { id: 'Almarai', name: 'خط المراعي (Almarai) - ناعم ومريح', family: "'Almarai', sans-serif" },
  { id: 'Amiri', name: 'خط أميري (Amiri) - كلاسيكي للشعر والأدب', family: "'Amiri', serif" },
  { id: 'Aref Ruqaa', name: 'خط الرقعة (Aref Ruqaa) - أصيل وتراثي', family: "'Aref Ruqaa', cursive" },
];

export const BUBBLE_STYLES = [
  { id: 'modern', name: 'عصرية ناعمة (Modern Rounded)', desc: 'حواف مستديرة مع ظلال خفيفة' },
  { id: 'classic', name: 'كلاسيكية مؤطرة (Bordered Solid)', desc: 'إطار بارز وواضح' },
  { id: 'glass', name: 'زجاجية شفافة (Glassmorphism)', desc: 'خلفية شفافة وتأثير بلوري' },
  { id: 'neon', name: 'توهج نيون (Neon Glow)', desc: 'وهج مشع في الأطراف' },
];

export const ThemeAndWallpaperCenter: React.FC<ThemeAndWallpaperCenterProps> = ({
  isOpen,
  onClose,
  activeTheme,
  onChangeTheme,
  activeWallpaper,
  onChangeWallpaper,
  fontFamily,
  onChangeFontFamily,
  chatFontSize,
  onChangeFontSize,
  bubbleStyle,
  onChangeBubbleStyle,
  nameColor = '#d97706',
  onChangeNameColor,
  textColor = '#0f172a',
  onChangeTextColor,
  eyeComfort,
  onToggleEyeComfort,
  soundVolume,
  onChangeSoundVolume,
  particlesEnabled,
  onToggleParticles,
  currentUserRole,
  onApplyGlobalAppearance,
  onShowToast
}) => {
  if (!isOpen) return null;

  const isStaff = currentUserRole === 'admin' || currentUserRole === 'super';

  const PRESET_NAME_COLORS = [
    { name: 'الذهبي الملكي', color: '#d97706' },
    { name: 'العنبر الساطع', color: '#f59e0b' },
    { name: 'دم الغزال العنابي', color: '#be123c' },
    { name: 'الزمرد الأخضر', color: '#059669' },
    { name: 'الفيروزي السلطاني', color: '#06b6d4' },
    { name: 'الأزرق النيلي', color: '#2563eb' },
    { name: 'البنفسجي الملكي', color: '#9333ea' },
    { name: 'الوردي الزهري', color: '#ec4899' },
    { name: 'الأبيض الناصع', color: '#f8fafc' },
    { name: 'الأسود الفاحم', color: '#0f172a' },
  ];

  const PRESET_TEXT_COLORS = [
    { name: 'الأسود الليلي', color: '#0f172a' },
    { name: 'الرمادي الداكن', color: '#334155' },
    { name: 'البني الموكا', color: '#78350f' },
    { name: 'العنابي الداكن', color: '#881337' },
    { name: 'الكحلي الداكن', color: '#1e3a8a' },
    { name: 'الأخضر الزيتي', color: '#064e3b' },
    { name: 'الذهبي الداكن', color: '#b45309' },
    { name: 'البنفسجي الليلي', color: '#581c87' },
  ];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm animate-fade-in"
      dir="rtl"
    >
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-950/70 via-slate-900 to-purple-950/70 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-inner">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                مركز الثيمات، الخلفيات والمظهر البصري
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-2 py-0.5 rounded-full">
                  15 ستايلاً وثيماً حصرياً
                </span>
              </h2>
              <p className="text-xs text-slate-400">خصص مظهر الغرفة والخط العام بما يلائم ذوقك وراحتك البصرية</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto max-h-[calc(92vh-130px)] space-y-6">
          {/* 1. Theme Presets */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                ثيمك ومظهرك الشخصي (متعدد الألوان ومتناسق كلياً)
              </label>
              <span className="text-[11px] text-amber-400/90 font-medium">ينطبق على حسابك وواجهتك فقط ✓</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {THEMES_LIST.map((th) => {
                const isActive = activeTheme === th.id;
                return (
                  <button
                    key={th.id}
                    onClick={() => {
                      onChangeTheme(th.id);
                      onShowToast(`تم تطبيق ثيم: ${th.name}`, 'success');
                    }}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-slate-800 border-amber-500 ring-2 ring-amber-500/50 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    {/* Multi-color Palette Preview Swatch */}
                    <div className="flex items-center gap-1 mb-2 p-1 rounded-full bg-black/40 border border-white/10 shadow-inner">
                      {th.colors.map((c, idx) => (
                        <div
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full shadow-xs border border-white/20"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-200 line-clamp-1">{th.name}</span>
                    {isActive && (
                      <span className="mt-1 text-[10px] text-amber-400 font-extrabold flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> مفعل
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Wallpapers */}
          <div>
            <label className="text-xs font-bold text-slate-200 flex items-center gap-2 mb-3">
              <ImageIcon className="w-4 h-4 text-indigo-400" />
              خلفية مساحة المحادثة (Chat Wallpapers)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WALLPAPERS_LIST.map((wp) => {
                const isActive = activeWallpaper === wp.id;
                return (
                  <button
                    key={wp.id}
                    onClick={() => {
                      onChangeWallpaper(wp.id);
                      onShowToast(`تم تغيير خلفية الشات: ${wp.name}`, 'success');
                    }}
                    className={`h-20 rounded-xl border p-2 flex flex-col justify-end text-right transition-all relative overflow-hidden ${wp.preview} ${
                      isActive ? 'border-amber-500 ring-2 ring-amber-500/50' : 'border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-2 left-2 bg-amber-500 text-slate-950 rounded-full p-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                    <span className="text-xs font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded-md inline-block">
                      {wp.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Typography Font Family */}
          <div>
            <label className="text-xs font-bold text-slate-200 flex items-center gap-2 mb-3">
              <Type className="w-4 h-4 text-emerald-400" />
              الخط العربي المعتمد (Arabic Typography)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FONTS_LIST.map((f) => {
                const isActive = fontFamily === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      onChangeFontFamily(f.id);
                      onShowToast(`تم تغيير الخط إلى: ${f.name}`, 'success');
                    }}
                    style={{ fontFamily: f.family }}
                    className={`p-3 rounded-xl border text-right transition-all flex items-center justify-between text-sm ${
                      isActive
                        ? 'bg-emerald-950/30 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <span>{f.name}</span>
                    {isActive && <Check className="w-4 h-4 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Font Size & Bubble Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Font Size */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-3.5 space-y-2">
              <label className="text-xs font-bold text-slate-300 block">حجم خط الرسائل:</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'sm', label: 'صغير' },
                  { id: 'base', label: 'متوسط' },
                  { id: 'lg', label: 'كبير' },
                  { id: 'xl', label: 'ضخم' },
                ].map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => onChangeFontSize(sz.id as any)}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      chatFontSize === sz.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bubble Style */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-3.5 space-y-2">
              <label className="text-xs font-bold text-slate-300 block">شكل فقاعة الرسائل:</label>
              <div className="grid grid-cols-2 gap-1.5">
                {BUBBLE_STYLES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onChangeBubbleStyle(b.id)}
                    className={`p-2 rounded-lg text-[11px] font-bold border text-right transition-all ${
                      bubbleStyle === b.id
                        ? 'bg-indigo-600 text-white border-indigo-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Name and Chat Text Colors (ألوان الاسم ولون خط الرسائل - حفظ دائم) */}
          <div className="bg-slate-800/50 border border-amber-500/40 rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-2">
              <label className="text-xs font-bold text-amber-300 flex items-center gap-2">
                <Palette className="w-4 h-4 text-amber-400" />
                ألوان الاسم ولون خط الرسائل (تخصيص وحفظ دائم)
              </label>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold">
                ✓ يظل محفوظاً دائماً ولا يعود للافتراضي
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Color Control */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-3 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">لون اسمك في الشات:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={nameColor}
                      onChange={(e) => {
                        const col = e.target.value;
                        if (onChangeNameColor) onChangeNameColor(col);
                        onShowToast('تم حفظ لون الاسم بنجاح 👑', 'success');
                      }}
                      className="w-7 h-7 cursor-pointer rounded border border-slate-500 p-0.5 bg-slate-800"
                      title="اختر لون اسم مخصص"
                    />
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-black/60 border border-white/10" style={{ color: nameColor }}>
                      معاينة الاسم
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  {PRESET_NAME_COLORS.map((p) => (
                    <button
                      key={p.color}
                      type="button"
                      onClick={() => {
                        if (onChangeNameColor) onChangeNameColor(p.color);
                        onShowToast(`تم اختيار لون الاسم: ${p.name}`, 'success');
                      }}
                      className={`h-7 rounded-lg border flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ${
                        nameColor.toLowerCase() === p.color.toLowerCase() ? 'ring-2 ring-white border-white scale-105' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: p.color }}
                      title={p.name}
                    >
                      {nameColor.toLowerCase() === p.color.toLowerCase() && <Check className="w-3 h-3 text-white drop-shadow-md" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Text Color Control */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-3 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">لون خط كتابة الرسائل:</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => {
                        const col = e.target.value;
                        if (onChangeTextColor) onChangeTextColor(col);
                        onShowToast('تم حفظ لون خط الرسائل بنجاح ✍️', 'success');
                      }}
                      className="w-7 h-7 cursor-pointer rounded border border-slate-500 p-0.5 bg-slate-800"
                      title="اختر لون خط مخصص"
                    />
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10" style={{ color: textColor }}>
                      معاينة الخط
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  {PRESET_TEXT_COLORS.map((p) => (
                    <button
                      key={p.color}
                      type="button"
                      onClick={() => {
                        if (onChangeTextColor) onChangeTextColor(p.color);
                        onShowToast(`تم اختيار لون الخط: ${p.name}`, 'success');
                      }}
                      className={`h-7 rounded-lg border flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ${
                        textColor.toLowerCase() === p.color.toLowerCase() ? 'ring-2 ring-white border-white scale-105' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: p.color }}
                      title={p.name}
                    >
                      {textColor.toLowerCase() === p.color.toLowerCase() && <Check className="w-3 h-3 text-white drop-shadow-md" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Comfort, Sound & Performance Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Eye Comfort */}
            <button
              onClick={onToggleEyeComfort}
              className={`p-3 rounded-xl border flex items-center justify-between text-right transition-all ${
                eyeComfort
                  ? 'bg-amber-950/40 border-amber-500/50 text-amber-300'
                  : 'bg-slate-800/40 border-slate-700 text-slate-400'
              }`}
            >
              <div>
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  فلتر حماية العين (Warm Tint)
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">تقليل الضوء الأزرق المجهد</div>
              </div>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${eyeComfort ? 'bg-amber-500 text-black' : 'bg-slate-700'}`}>
                {eyeComfort && <Check className="w-3 h-3" />}
              </div>
            </button>

            {/* Particles Toggle */}
            <button
              onClick={onToggleParticles}
              className={`p-3 rounded-xl border flex items-center justify-between text-right transition-all ${
                particlesEnabled
                  ? 'bg-purple-950/40 border-purple-500/50 text-purple-300'
                  : 'bg-slate-800/40 border-slate-700 text-slate-400'
              }`}
            >
              <div>
                <div className="text-xs font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  مؤثرات الاحتفال والشرر
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">كونفيتي ورسوم حركية</div>
              </div>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${particlesEnabled ? 'bg-purple-500 text-white' : 'bg-slate-700'}`}>
                {particlesEnabled && <Check className="w-3 h-3" />}
              </div>
            </button>

            {/* Sound Volume Control */}
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-1">
                <span className="flex items-center gap-1.5">
                  {soundVolume > 0 ? <Volume2 className="w-3.5 h-3.5 text-indigo-400" /> : <VolumeX className="w-3.5 h-3.5 text-rose-400" />}
                  مستوى صوت التنبيهات
                </span>
                <span className="font-mono text-amber-400">{soundVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={soundVolume}
                onChange={(e) => onChangeSoundVolume(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>التفضيلات محفوظة تلقائياً في متصفحك</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
          >
            تم وإغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
