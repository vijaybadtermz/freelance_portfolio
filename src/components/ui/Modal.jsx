import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm sm:backdrop-blur-md"
          />

          {/* Modal Dialog Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[88vh] bg-[#0b0e17] border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto z-10 p-5 sm:p-8 space-y-4 scrollbar-thin"
          >
            {/* Sticky Close Button Header */}
            <div className="sticky top-0 z-20 flex justify-end pb-2 -mt-2 -mr-2 sm:mr-0 pointer-events-none">
              <button
                onClick={onClose}
                className="pointer-events-auto p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-cyan-500/50 shadow-md backdrop-blur-md transition-all"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="-mt-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
