
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Python Study Hub Pro. Built for modern developers.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-slate-600 hover:text-indigo-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
