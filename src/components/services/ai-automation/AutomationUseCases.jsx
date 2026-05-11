'use client';

import {
  TrendingUp, Receipt, ShoppingBag, Headphones, Settings2, BarChart2,
} from 'lucide-react';
import ServiceUseCases from '@/components/services/common/ServiceUseCases';
import { useCases } from '@/data/use-cases/ai-automation-use-cases';

const config = [
  { icon: TrendingUp,  iconColor: 'text-amber-400',   iconBg: 'bg-amber-400/10 border-amber-400/25',   glow: 'rgba(251,191,36,0.25)',      ring: '#fbbf24',              tagBg: 'bg-amber-400/10 border-amber-400/25 text-amber-400' },
  { icon: Receipt,     iconColor: 'text-blue-400',    iconBg: 'bg-blue-500/10 border-blue-400/25',      glow: 'rgba(96,165,250,0.25)',      ring: '#60a5fa',              tagBg: 'bg-blue-400/10 border-blue-400/25 text-blue-400' },
  { icon: ShoppingBag, iconColor: 'text-emerald-400', iconBg: 'bg-emerald-400/10 border-emerald-400/25',glow: 'rgba(52,211,153,0.25)',      ring: '#34d399',              tagBg: 'bg-emerald-400/10 border-emerald-400/25 text-emerald-400' },
  { icon: Headphones,  iconColor: 'text-violet-400',  iconBg: 'bg-violet-500/10 border-violet-400/25',  glow: 'rgba(167,139,250,0.25)',     ring: '#a78bfa',              tagBg: 'bg-violet-400/10 border-violet-400/25 text-violet-400' },
  { icon: Settings2,   iconColor: 'text-primary',     iconBg: 'bg-primary/10 border-primary/25',        glow: 'hsl(var(--primary) / 0.25)', ring: 'hsl(var(--primary))', tagBg: 'bg-primary/10 border-primary/25 text-primary' },
  { icon: BarChart2,   iconColor: 'text-pink-400',    iconBg: 'bg-pink-500/10 border-pink-400/25',      glow: 'rgba(244,114,182,0.25)',     ring: '#f472b6',              tagBg: 'bg-pink-400/10 border-pink-400/25 text-pink-400' },
];

export default function AutomationUseCases() {
  return (
    <ServiceUseCases
      useCases={useCases}
      config={config}
      description="Every operation has repetitive tasks eating your team's time. We automate them end-to-end."
    />
  );
}
