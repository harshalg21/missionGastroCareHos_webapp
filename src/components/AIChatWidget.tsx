import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  isEmergency?: boolean;
  options?: { label: string; action: string }[];
}

const emergencyKeywords = ['chest pain', 'severe bleeding', 'vomiting blood', 'unconscious', 'black stool', 'severe acute pain', 'faint'];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! I am the Mission Gastrocare AI Assistant. How can I help you today? You can ask me about GI symptoms, procedure preparation (Endoscopy/ERCP), doctor specialties, or hospital facilities in Vadodara.',
      options: [
        { label: 'Severe Stomach Pain Guidance', action: 'stomach_pain' },
        { label: 'Doctor Availability & Booking', action: 'book_doctor' },
        { label: 'What is ERCP & Endoscopy?', action: 'ercp_info' },
        { label: 'Hospital Location & OPD Hours', action: 'location_info' }
      ]
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    const lowerText = text.toLowerCase();
    const isEmergency = emergencyKeywords.some(keyword => lowerText.includes(keyword));

    setTimeout(() => {
      if (isEmergency) {
        const emergencyBotMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          isEmergency: true,
          text: '⚠️ EMERGENCY ALERT: Your symptoms may require immediate emergency medical attention. Please do not wait. Call 108 Emergency or contact our 24x7 Emergency Line (+91 99253 29142) or visit Mission Gastrocare ER immediately.',
          options: [
            { label: 'Call 24x7 Emergency Hotline', action: 'call_emergency' },
            { label: 'Book Immediate OPD Doctor', action: 'book_doctor' }
          ]
        };
        setMessages((prev) => [...prev, emergencyBotMsg]);
        return;
      }

      let replyText = "";
      let options: { label: string; action: string }[] | undefined = undefined;

      if (lowerText.includes('pain') || lowerText.includes('stomach') || lowerText.includes('acidity') || lowerText.includes('gerd')) {
        replyText = "Abdominal pain or acidity can stem from conditions such as GERD, gastritis, gallstones, or irritable bowel syndrome (IBS). Our specialists Dr. Jitendra Mistry and Dr. Deepali Mistry evaluate these conditions with advanced endoscopy. Would you like to schedule an OPD consultation?";
        options = [
          { label: 'Book Dr. Jitendra Mistry', action: 'book_jitendra' },
          { label: 'Book Dr. Deepali Mistry', action: 'book_deepali' }
        ];
      } else if (lowerText.includes('ercp') || lowerText.includes('endoscopy') || lowerText.includes('colonoscopy')) {
        replyText = "At Mission Gastrocare Vadodara, we perform therapeutic Endoscopy, Colonoscopy, and ERCP (Endoscopic Retrograde Cholangiopancreatography) for bile duct stones and pancreatic disorders in high-tech endoscopy suites under mild sedation. Fasting for 8 hours prior to the procedure is generally required.";
        options = [
          { label: 'Book Endoscopy / ERCP Slot', action: 'book_doctor' }
        ];
      } else if (lowerText.includes('doctor') || lowerText.includes('appointment') || lowerText.includes('book') || lowerText.includes('fee')) {
        replyText = "Our super-specialist doctors include Dr. Jitendra Mistry (Director & Gastroenterologist), Dr. Saurabh Dey (Laparoscopic GI Surgeon), Dr. Deepali Mistry (Gastroenterologist), Dr. Himani Patel (HPB & Liver), and Dr. Parul Mistry (Critical Care). OPD fees range between ₹600 - ₹800.";
        options = [
          { label: 'Go to Online Booking Page', action: 'book_doctor' }
        ];
      } else {
        replyText = "Thank you for reaching out to Mission Gastrocare. For direct appointment bookings, emergency support, or detailed doctor schedules, you can use our instant online booking tool or call (+91) 99253 29142.";
        options = [
          { label: 'Schedule Doctor Appointment', action: 'book_doctor' },
          { label: 'View Hospital Facilities', action: 'view_facilities' }
        ];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        options: options
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleOptionClick = (action: string) => {
    if (action === 'stomach_pain') handleSend('I have stomach pain and acidity issues');
    else if (action === 'ercp_info') handleSend('Tell me about ERCP and Endoscopy procedures');
    else if (action === 'location_info') handleSend('Where is Mission Gastrocare located in Vadodara?');
    else if (action === 'book_doctor' || action === 'book_jitendra' || action === 'book_deepali') { setIsOpen(false); navigate('/book-appointment'); }
    else if (action === 'call_emergency') window.location.href = 'tel:+919925329142';
    else if (action === 'view_facilities') { setIsOpen(false); navigate('/facilities'); }
    else handleSend(action);
  };

  return (
    <>
      {/* Floating Launcher Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-36 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 border border-emerald-500/50 text-white font-bold text-xs shadow-xl hover:bg-slate-800 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all group"
          aria-label="Open AI Medical Assistant"
        >
          <div className="w-7 h-7 rounded-full medical-emerald-gradient flex items-center justify-center text-white shadow-sm">
            <Bot className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-emerald-400 text-[10px] uppercase tracking-wider font-extrabold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              AI Assistant
            </span>
            <span className="text-slate-200 text-[11px] font-semibold">GI Triage Chat</span>
          </div>
        </button>
      )}

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 text-slate-800">
          
          {/* Drawer Header */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl medical-emerald-gradient flex items-center justify-center text-white shadow-sm">
                <Bot className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm flex items-center gap-1.5">
                  GastroCare AI Triage
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </h3>
                <p className="text-[10px] text-emerald-400 font-semibold">Informational &amp; Doctor Router</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs font-medium">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'medical-emerald-gradient text-white font-semibold rounded-br-none shadow-sm'
                      : msg.isEmergency
                      ? 'bg-rose-50 border border-rose-200 text-rose-900 rounded-bl-none shadow-md font-bold'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                  {/* Medical Compliance Disclaimer Tag for Bot */}
                  {msg.sender === 'bot' && !msg.isEmergency && (
                    <span className="block mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 italic">
                      ⚠️ Informational only. Does not diagnose or prescribe.
                    </span>
                  )}
                </div>

                {/* Interactive Option Chips */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt.action)}
                        className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-600 hover:text-white border border-slate-200 text-emerald-700 text-[11px] font-bold transition-all text-left shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Field */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about GI symptoms, procedures..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 font-medium"
              />
              <button
                type="submit"
                className="p-2 rounded-xl medical-emerald-gradient text-white font-bold hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
