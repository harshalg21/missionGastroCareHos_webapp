import React, { useState, useEffect } from 'react';
import { X, Smartphone, Share2, Check, Sparkles } from 'lucide-react';
import QrcodeIcon from './icons/qrcode-icon';

interface QRCodeModalProps {
  variant?: 'banner' | 'default';
}

export default function QRCodeModal({ variant = 'default' }: QRCodeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const websiteUrl = window.location.origin || "http://mission-gastrocare-preview.s3-website.eu-north-1.amazonaws.com/";
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(websiteUrl)}&color=164E43&bgcolor=E1F2EE`;

  // CodeRabbit Quality Rule: Lock body scroll & add Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Trigger Button Variants */}
      {variant === 'banner' ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 bg-[#164E43] hover:bg-[#0B2E28] text-[#FDE047] hover:text-white px-2.5 py-0.5 rounded border border-[#2E7D72] text-[11px] font-extrabold transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer group"
          title="Scan QR Code to open Mission Gastrocare on Smartphone"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <QrcodeIcon size={14} color="#FDE047" className="group-hover:scale-110 transition-transform" />
          <span className="tracking-wide">QR Portal</span>
          <Sparkles className="w-3 h-3 text-amber-300 opacity-80" />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#5EEAD4] transition-colors cursor-pointer"
          title="Scan QR Code"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <QrcodeIcon size={14} color="#5EEAD4" />
          <span>QR Portal</span>
        </button>
      )}

      {/* QR Modal Backdrop */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl relative space-y-5 text-center text-[#1E293B] animate-in zoom-in-95 duration-200"
          >
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close QR Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-3 py-1 rounded-full border border-[#BDE3DB] inline-flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                Scan &amp; Connect On Smartphone
              </span>
              <h3 id="qr-modal-title" className="text-xl font-extrabold text-[#0F172A]">
                Mission Gastrocare QR Portal
              </h3>
              <p className="text-xs text-[#475569] font-medium">
                Scan this QR code with your phone camera to instantly open the OPD booking app &amp; WhatsApp assistance.
              </p>
            </div>

            {/* Generated QR Code Card */}
            <div className="p-4 rounded-2xl bg-[#E1F2EE] border-2 border-[#BDE3DB] inline-block shadow-inner">
              <img 
                src={qrImageUrl} 
                alt="Mission Gastrocare Mobile Portal QR Code" 
                className="w-48 h-48 rounded-xl mx-auto shadow-sm object-contain bg-white p-2"
              />
            </div>

            <div className="pt-1 flex items-center justify-center gap-2">
              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 rounded-xl pastel-emerald-gradient text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Website Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-white" />
                    <span>Copy Shareable Web Link</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
