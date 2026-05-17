import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell
} from 'recharts';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Globe, 
  Layout as LayoutIcon,
  ArrowRight,
  ShieldCheck,
  ZapIcon,
  ChevronRight
} from 'lucide-react';

// --- Data & Constants ---

const COLORS = ['#C65D3D', '#7A9D8F', '#6B6B6B', '#2D2D2D'];

const marketSizeData = [
  { name: 'Total Art', value: 57.5, label: '$57.5B' },
  { name: 'Paper Art', value: 12, label: '$12.0B' },
];

const revenueForecastData = [
  { name: 'B2B (70%)', value: 1610, label: '$1.61B', percent: '70%', description: 'License & Sub' },
  { name: 'B2C (20%)', value: 460, label: '$460M', percent: '20%', description: 'Direct Member' },
  { name: 'Other (10%)', value: 230, label: '$230M', percent: '10%', description: 'API & Data' },
];

const pricingData = [
  { name: 'B2B Basic', price: 150, category: 'B2B', label: '$150/mo' },
  { name: 'B2B Prem', price: 600, category: 'B2B', label: '$600/mo' },
  { name: 'B2B Ent', price: 1800, category: 'B2B', label: '$1,800/mo' },
  { name: 'B2C Piece', price: 80, category: 'B2C', label: '$80/ea' },
  { name: 'B2C VIP', price: 680, category: 'B2C', label: '$680/ea' },
];

const appDevCostData = [
  { name: 'Frontend', value: 60, label: '$60k' },
  { name: 'Backend', value: 55, label: '$55k' },
  { name: 'AI Models', value: 40, label: '$40k' },
  { name: 'UI/UX', value: 25, label: '$25k' },
];

const team = [
  {
    name: 'Yanni Zhou',
    role: 'CEO',
    bio: 'MPhil (Oxford). Global art market resources & cross-border trading expert. Master of industry insights and international gallery networks.',
    img: 'yanni_zhou_pencil_v3_1778997181281.png'
  },
  {
    name: 'Tiffany Truong',
    role: 'Valuation Strategy',
    bio: 'DPhil (Oxford), NYU Neuroscience. Expert in quantitative economic modeling, scientific pricing systems, and behavior economics.',
    img: 'tiffany_truong_pencil_v3_1778997195626.png'
  },
  {
    name: 'Adithi Rajesh',
    role: 'CTO',
    bio: 'MSc Chemistry (Imperial). Technical framework architect specializing in art transaction data collection and valuation algorithm iteration.',
    img: 'adithi_rajesh_pencil_v3_1778997214109.png'
  }
];

// --- Components ---

const BentoCard = ({ children, className = "", title, icon: Icon, span = "col-span-1" }: { children: ReactNode, className?: string, title?: string, icon?: any, span?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`bg-[#F0EBE4] bento-hover border border-[#2D2D2D10] rounded-2xl p-5 flex flex-col shadow-sm pointer-events-auto h-full overflow-hidden ${span} ${className}`}
  >
    {title && (
      <div className="flex items-center gap-3 mb-4 border-b border-[#2D2D2D08] pb-2">
        {Icon && <Icon className="w-4 h-4 text-brand-terracotta" />}
        <h2 className="text-[12px] font-display font-semibold uppercase tracking-[0.25em] text-brand-terracotta italic">
          {title}
        </h2>
      </div>
    )}
    <div className="flex-1 flex flex-col justify-center gap-3">
      {children}
    </div>
  </motion.div>
);

const Metric = ({ label, value, sub, large = false, color = "text-brand-charcoal" }: { label: string, value: string, sub?: string, large?: boolean, color?: string }) => (
  <div className="metric-hover group cursor-default">
    <p className={`${large ? 'text-[11px]' : 'text-[10px]'} uppercase tracking-[0.1em] text-brand-gray mb-1 font-medium`}>{label}</p>
    <div className="flex items-baseline gap-2">
      <span className={`${large ? 'text-4xl md:text-5xl ' + color : 'text-2xl ' + color} font-serif font-bold metric-underline leading-none`}>
        {value}
      </span>
      {sub && <span className={`${large ? 'text-sm' : 'text-xs'} text-brand-sage font-display font-semibold opacity-80`}>{sub}</span>}
    </div>
  </div>
);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-brand-ivory border border-brand-charcoal/30 p-4 rounded-xl shadow-2xl text-[14px] z-50 min-w-[140px]">
        <p className="font-bold text-brand-charcoal mb-2 border-b border-brand-charcoal/10 pb-1">{data.name}</p>
        <p className="text-brand-terracotta font-serif text-lg font-bold">{data.label || `$${data.value}k`}</p>
        {data.percent && <p className="text-brand-sage font-semibold uppercase tracking-wider text-[11px] mt-1">{data.percent} Total Share</p>}
        {data.description && <p className="text-brand-gray italic mt-2 text-[12px] leading-snug">{data.description}</p>}
      </div>
    );
  }
  return null;
};

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-brand-ivory p-5 md:p-8 flex flex-col font-sans">
      {/* Grid Layout - Now flexible to allow content expansion and scrolling */}
      <div className="grid grid-cols-12 grid-rows-[repeat(12,minmax(70px,auto))] lg:grid-rows-[repeat(12,minmax(80px,auto))] gap-5 flex-1 lg:max-h-none lg:mx-auto lg:w-full max-w-7xl pb-12">
        
        {/* Module 1: Header (3x4) */}
        <div className="col-span-3 row-span-4 flex flex-col justify-center px-4">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
            <h1 className="text-5xl font-serif font-light mb-2 tracking-tighter hover:text-brand-terracotta transition-colors cursor-default leading-none">Art<span className="text-brand-terracotta">Valo</span></h1>
            <p className="text-lg font-display leading-tight text-brand-charcoal mb-4 font-light italic">
              Scientific valuation for the world's finest works on paper.
            </p>
            <div className="h-[2px] w-16 bg-brand-terracotta/40 mb-6" />
            <p className="text-sm text-brand-gray leading-relaxed font-light">
              Bridging the gap between fine art and quantitative analysis in a high-growth <span className="text-brand-charcoal font-medium">$12.0B market segment</span>.
            </p>
          </motion.div>
        </div>

        {/* Module 2: Problem & Solution / Market Opportunity (6x4) */}
        <BentoCard title="Strategic Market Opportunity" icon={Zap} span="col-span-6 row-span-4">
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-3 flex flex-col justify-center gap-4">
              <div className="grid grid-cols-1 gap-4">
                <Metric label="Sector Addressable Market" value="$12.0B" sub="+35% Year-on-Year" large color="text-brand-terracotta" />
                <Metric label="Global Ecosystem Scale" value="$57.5B" sub="Institutional Reach" large color="text-brand-sage" />
              </div>
              <p className="text-sm leading-relaxed text-brand-gray font-light">
                Traditional expert appraisals are manually intensive and exclusionary. ArtValo standardizes valuation through proprietary AI, eliminating the <span className="font-semibold text-brand-charcoal italic">5–10x pricing discrepancy</span> common in paper art collectibles.
              </p>
            </div>
            <div className="col-span-2 bg-[#F8F6F3]/60 rounded-2xl p-5 border border-[#2D2D2D08] flex flex-col justify-center shadow-inner">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal/50 mb-4 font-bold">Value Multipliers</h4>
              <ul className="space-y-3 text-[12px] text-brand-gray font-light">
                <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 mt-0.5 text-brand-terracotta flex-shrink-0" /> <span className="metric-hover"><span className="metric-underline">Quantitative Predictive Models</span></span></li>
                <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 mt-0.5 text-brand-terracotta flex-shrink-0" /> <span className="metric-hover"><span className="metric-underline">Cross-Border Asset Liquidity</span></span></li>
                <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 mt-0.5 text-brand-terracotta flex-shrink-0" /> <span className="metric-hover"><span className="metric-underline">Verified Industry Interoperability</span></span></li>
                <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 mt-0.5 text-brand-terracotta flex-shrink-0" /> <span className="metric-hover"><span className="metric-underline">Direct API Institutional Feeds</span></span></li>
              </ul>
            </div>
          </div>
        </BentoCard>

        {/* Module 4: Core Team (3x4) */}
        <BentoCard title="Platform Architecture" icon={Users} span="col-span-3 row-span-4">
          <div className="flex flex-col gap-4 py-1 justify-center">
            {team.map((member, i) => (
              <div key={i} className="flex gap-4 group items-center">
                <div className="w-14 h-14 rounded-full border-2 border-[#C65D3D20] overflow-hidden flex-shrink-0 bg-white ring-4 ring-[#F8F6F3] shadow-md group-hover:ring-brand-terracotta/10 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover filter contrast-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[12px] font-bold text-brand-charcoal leading-none mb-1 group-hover:text-brand-terracotta transition-colors">{member.name}</h4>
                  <p className="text-[10px] text-brand-terracotta font-semibold mb-1 uppercase tracking-widest">{member.role}</p>
                  <p className="text-[10px] text-brand-gray leading-snug font-light line-clamp-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Module 3: Revenue Forecast (3x4) */}
        <BentoCard title="Revenue Distribution (2030)" icon={TrendingUp} span="col-span-3 row-span-4">
          <div className="flex flex-col p-1">
            <div className="flex justify-between items-center mb-2">
              <p className="text-[11px] text-brand-gray font-medium tracking-wide">Market Share Target</p>
              <div className="text-right">
                 <span className="text-xl font-serif font-bold text-brand-terracotta">$2.3B</span>
                 <p className="text-[8px] uppercase text-brand-sage font-bold tracking-widest">Annual TAM</p>
              </div>
            </div>
            <div className="h-44 border-y border-brand-charcoal/5 py-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueForecastData}
                    innerRadius="35%"
                    outerRadius="75%"
                    paddingAngle={6}
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {revenueForecastData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} className="stroke-brand-ivory stroke-[2px] hover:opacity-80 transition-opacity cursor-pointer outline-none" />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2">
              {revenueForecastData.map((d, i) => (
                <div key={i} className="flex items-center justify-between text-[10px] font-medium group cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full ring-2 ring-brand-ivory shadow-sm group-hover:scale-125 transition-transform" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-brand-gray uppercase tracking-widest text-[8px]">{d.name.split(' ')[0]} Sector</span>
                  </div>
                  <span className="text-brand-charcoal border-b border-transparent group-hover:border-brand-terracotta transition-all">{d.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Module 8: Detailed Business Model (6x4) */}
        <BentoCard title="Subscription & Fee Architecture" icon={DollarSign} span="col-span-6 row-span-4">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-7 flex flex-col justify-center gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-brand-terracotta uppercase tracking-widest border-l-4 border-brand-terracotta pl-3 pb-0.5">B2B Institutional</h4>
                  <div className="space-y-2">
                    <div className="flex flex-col"><span className="text-[9px] uppercase text-brand-gray font-bold mb-0.5">Basic Feed</span><span className="text-base font-serif font-bold text-brand-charcoal">$150<span className="text-xs font-normal text-brand-gray">/mo</span></span></div>
                    <div className="flex flex-col"><span className="text-[9px] uppercase text-brand-gray font-bold mb-0.5">Professional</span><span className="text-base font-serif font-bold text-brand-charcoal">$600<span className="text-xs font-normal text-brand-gray">/mo</span></span></div>
                    <div className="flex flex-col"><span className="text-[9px] uppercase text-brand-gray font-bold mb-0.5">Enterprise</span><span className="text-base font-serif font-bold text-brand-charcoal">$1.8k<span className="text-xs font-normal text-brand-gray">/mo</span></span></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-brand-sage uppercase tracking-widest border-l-4 border-brand-sage pl-3 pb-0.5">B2C Discovery</h4>
                  <div className="space-y-2">
                    <div className="flex flex-col"><span className="text-[9px] uppercase text-brand-gray font-bold mb-0.5">Single Valuation</span><span className="text-base font-serif font-bold text-brand-charcoal">$80<span className="text-xs font-normal text-brand-gray">/ea</span></span></div>
                    <div className="flex flex-col"><span className="text-[9px] uppercase text-brand-gray font-bold mb-0.5">VIP Full Guard</span><span className="text-base font-serif font-bold text-brand-charcoal">$680<span className="text-xs font-normal text-brand-gray">/ea</span></span></div>
                    <div className="flex flex-col"><span className="text-[9px] uppercase text-brand-gray font-bold mb-0.5">Collector Club</span><span className="text-base font-serif font-bold text-brand-charcoal">$45<span className="text-xs font-normal text-brand-gray">/mo</span></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex flex-col bg-[#F8F6F3]/60 rounded-2xl p-5 border border-[#2D2D2D08] shadow-inner">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-charcoal/50 mb-3 font-bold">Relative Yield Potential</p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pricingData} margin={{ left: -35, top: 10, right: 5 }}>
                    <XAxis dataKey="name" hide />
                    <Bar dataKey="price" radius={[4, 4, 0, 0]} barSize={22}>
                      {pricingData.map((d, i) => <Cell key={i} fill={d.category === 'B2B' ? '#C65D3D' : '#7A9D8F'} className="hover:opacity-80 transition-opacity" />)}
                    </Bar>
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#2D2D2D05' }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-brand-gray py-2 mt-3 border-t border-brand-charcoal/5 text-center font-light italic">
                B2B Licensing constitutes <span className="text-brand-terracotta font-bold">70%</span> of projected annual revenue.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Module 7: App Dev Cost (3x4) */}
        <BentoCard title="Ecosystem Build Matrix ($180k)" icon={LayoutIcon} span="col-span-3 row-span-4">
          <div className="flex flex-col justify-between p-1">
            <div className="h-48 border-b border-brand-charcoal/5 mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={appDevCostData} layout="vertical" margin={{ left: -35, right: 30, top: 10, bottom: 10 }}>
                  <YAxis dataKey="name" type="category" hide />
                  <XAxis type="number" hide />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={16}>
                    {appDevCostData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} className="hover:opacity-85 transition-opacity" />)}
                  </Bar>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 px-1">
              {appDevCostData.map((item, i) => (
                <div key={i} className="flex justify-between items-center group cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm group-hover:rotate-45 transition-transform" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-[11px] text-brand-gray font-light group-hover:text-brand-charcoal transition-colors uppercase tracking-wider">{item.name}</span> 
                  </div>
                  <span className="text-[12px] font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] text-brand-gray text-center font-light italic opacity-60">Full-stack deployment inclusive of AI.</p>
          </div>
        </BentoCard>

        {/* Module 6: GTM (6x4) */}
        <BentoCard title="GTM & Institutional Entry" icon={Globe} span="col-span-6 row-span-4">
          <div className="flex flex-col justify-center px-6">
            <div className="space-y-6">
              <p className="text-[16px] lg:text-[18px] leading-[1.5] text-brand-charcoal font-light italic">
                ArtValo establishes authority by infiltrating <span className="text-brand-terracotta border-b-2 border-brand-terracotta/20 font-semibold not-italic">elite tier-one auctions</span>, leveraging acquisition as a validation loop for our global liquidity layer.
              </p>
              <div className="grid grid-cols-2 gap-6 bg-brand-sage/5 p-6 rounded-2xl border border-brand-sage/15 relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                  <Globe className="w-32 h-32 text-brand-sage" />
                </div>
                <div className="z-10 relative">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-brand-sage font-bold mb-3">Strategic Vision</p>
                  <p className="text-[14px] font-serif italic text-brand-charcoal leading-relaxed">"The premier institutional-grade validator for world-class paper art and rare manuscripts."</p>
                </div>
                <div className="flex flex-col justify-end items-end z-10 relative">
                  <div className="bg-brand-ivory px-4 py-3 rounded-xl shadow-sm border border-brand-charcoal/5 flex flex-col items-center gap-1.5 group-hover:shadow-md transition-all">
                    <ShieldCheck className="w-6 h-6 text-brand-sage" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-charcoal">Verified Integrity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Module 5: Use of Funds (6x4) */}
        <BentoCard title="Seed Capital Allocation ($500k)" icon={DollarSign} span="col-span-6 row-span-4">
          <div className="flex flex-col justify-center px-6">
            <div className="relative w-full h-10 bg-brand-charcoal/5 rounded-xl overflow-hidden flex mb-8 border-2 border-brand-charcoal/5 shadow-inner p-1">
              <div className="h-full bg-brand-charcoal rounded-lg mr-1 relative group" style={{ width: '4%' }}><div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" /></div>
              <div className="h-full bg-brand-terracotta rounded-lg mr-1 relative group" style={{ width: '36%' }}><div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" /></div>
              <div className="h-full bg-brand-sage rounded-lg mr-1 relative group" style={{ width: '30%' }}><div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" /></div>
              <div className="h-full bg-brand-gray rounded-lg mr-1 relative group" style={{ width: '20%' }}><div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" /></div>
              <div className="h-full bg-brand-charcoal/30 rounded-lg relative group" style={{ width: '10%' }}><div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" /></div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {[
                { label: 'Artwork', amount: '20k', color: 'bg-brand-charcoal' },
                { label: 'R&D Build', amount: '180k', color: 'bg-brand-terracotta' },
                { label: 'Dataset', amount: '150k', color: 'bg-brand-sage' },
                { label: 'Marketing', amount: '100k', color: 'bg-brand-gray' },
                { label: 'Reserves', amount: '50k', color: 'bg-brand-charcoal/30' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-md ring-2 ring-white group-hover:scale-125 transition-transform`} />
                    <span className="text-[13px] font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">${item.amount}</span>
                  </div>
                  <p className="text-[10px] text-brand-gray leading-tight uppercase tracking-[0.1em] font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

      </div>

      {/* Grid Border Overlay (Apple Aesthetic Detail) */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-brand-ivory z-[60]" />
    </div>
  );
}
