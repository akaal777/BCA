
import React from 'react';
import { motion } from 'framer-motion';
import { ResourceItem } from '../types';
import ResourceCard from './ResourceCard';

interface SectionProps {
  id: string;
  title: string;
  icon: string;
  items: ResourceItem[];
  buttonText?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, items, buttonText }) => {
  return (
    <section id={id} className="py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="h-[2px] flex-grow bg-slate-900 ml-4 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <ResourceCard 
              key={item.title + idx} 
              item={item} 
              index={idx}
              buttonText={buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
