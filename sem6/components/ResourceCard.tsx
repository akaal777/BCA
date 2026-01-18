
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, BookOpen, FileText, Code } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  item: ResourceItem;
  buttonText?: string;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ item, buttonText = "View Now", index }) => {
  const getIcon = () => {
    if (item.tag?.toLowerCase().includes('watch') || buttonText.toLowerCase().includes('watch')) return <Play size={16} />;
    if (item.author) return <BookOpen size={16} />;
    if (item.type === 'Project') return <Code size={16} />;
    return <FileText size={16} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
          {getIcon()}
        </div>
        {(item.tag || item.type) && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-slate-800 text-slate-400 border border-slate-700">
            {item.tag || item.type}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        {item.title}
      </h3>
      
      {item.author && (
        <span className="text-xs text-slate-500 mb-2 block italic">By {item.author}</span>
      )}

      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {item.desc}
      </p>

      <a 
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white rounded-lg text-sm font-semibold transition-all border border-slate-700 group-hover:border-indigo-500"
      >
        {buttonText}
        <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
      </a>
    </motion.div>
  );
};

export default ResourceCard;
