import React, { useState } from 'react';
import { Star, MessageSquare, Plus, CheckCircle, ThumbsUp, X, User } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  procedure: string;
  doctor: string;
  date: string;
  comment: string;
  helpfulCount: number;
}

const initialReviews: Review[] = [
  {
    id: "rev-1",
    name: "Rajesh Shah",
    rating: 5,
    procedure: "Therapeutic ERCP",
    doctor: "Dr. Jitendra Mistry",
    date: "2 weeks ago",
    comment: "Dr. Jitendra Mistry performed ERCP for my father's bile duct stone obstruction. The procedure was smooth, minimal discomfort, and he recovered completely within 2 days. Best gastroenterologist in Vadodara!",
    helpfulCount: 24
  },
  {
    id: "rev-2",
    name: "Pooja Patel",
    rating: 5,
    procedure: "Laparoscopic Cholecystectomy",
    doctor: "Dr. Saurabh Dey",
    date: "1 month ago",
    comment: "I underwent laparoscopic gallbladder removal by Dr. Saurabh Dey. Minimal pain and tiny incisions. The hospital staff, nursing team, and OT care were exceptionally supportive.",
    helpfulCount: 19
  },
  {
    id: "rev-3",
    name: "Amit Varma",
    rating: 5,
    procedure: "GERD & Endoscopy",
    doctor: "Dr. Deepali Mistry",
    date: "1 month ago",
    comment: "Best gastroenterology hospital in Vadodara. The AI chatbot helped me understand my symptoms and book Dr. Deepali Mistry instantly without waiting in long queues.",
    helpfulCount: 15
  },
  {
    id: "rev-4",
    name: "Kiran Solanki",
    rating: 5,
    procedure: "HPB Surgery",
    doctor: "Dr. Himani Patel",
    date: "2 months ago",
    comment: "Dr. Himani Patel performed liver resection for my brother. Highly skilled, patient in explaining risks, and excellent post-operative ICU care.",
    helpfulCount: 31
  }
];

export default function ReviewSystem() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form states
  const [newName, setNewName] = useState("");
  const [newDoctor, setNewDoctor] = useState("Dr. Jitendra Mistry");
  const [newProcedure, setNewProcedure] = useState("Medical Gastroenterology");
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const filterOptions = ["All", "Therapeutic ERCP", "Laparoscopic Cholecystectomy", "GERD & Endoscopy", "HPB Surgery"];

  const filteredReviews = selectedFilter === "All"
    ? reviews
    : reviews.filter(r => r.procedure === selectedFilter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newRevObj: Review = {
      id: `rev-${Date.now()}`,
      name: newName || "Anonymous Patient",
      rating: newRating,
      procedure: newProcedure,
      doctor: newDoctor,
      date: "Just now",
      comment: newComment,
      helpfulCount: 0
    };
    setReviews([newRevObj, ...reviews]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsModalOpen(false);
      setNewName("");
      setNewComment("");
    }, 1800);
  };

  const handleHelpful = (id: string) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r));
  };

  return (
    <section className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 shadow-md space-y-8 text-[#1E293B]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full pastel-teal-badge text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-4 h-4 text-amber-500 fill-current" />
            <span>Verified Patient Experience &amp; Google Reviews</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Patient Ratings &amp; Feedback System</h2>
          <p className="text-xs text-[#475569] mt-1 font-medium">Real reviews from patients treated at Mission Gastrocare Vadodara.</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-white pastel-emerald-gradient font-bold text-xs hover:opacity-95 transition-all shadow-md active:scale-95 shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Write a Patient Review</span>
        </button>
      </div>

      {/* Trust Rating Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#FAFBFB] border border-[#A9C3C9] p-6 rounded-2xl items-center">
        
        {/* Overall Score */}
        <div className="md:col-span-4 text-center md:border-r border-slate-200 pr-0 md:pr-6 space-y-2">
          <div className="text-4xl sm:text-5xl font-extrabold text-[#0F172A]">4.8 <span className="text-lg text-slate-400 font-bold">/ 5</span></div>
          <div className="flex justify-center text-amber-500 gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-xs font-bold text-[#1D5E54]">500+ Verified Patient Reviews on Google</p>
        </div>

        {/* Breakdown Bars */}
        <div className="md:col-span-8 space-y-2 text-xs font-medium">
          <div className="flex items-center gap-3">
            <span className="w-12 text-[#334155] font-bold">5 Stars</span>
            <div className="flex-grow h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[92%]"></div>
            </div>
            <span className="w-10 text-right text-slate-500 font-bold">92%</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 text-[#334155] font-bold">4 Stars</span>
            <div className="flex-grow h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 w-[6%]"></div>
            </div>
            <span className="w-10 text-right text-slate-500 font-bold">6%</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 text-[#334155] font-bold">3 Stars</span>
            <div className="flex-grow h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 w-[2%]"></div>
            </div>
            <span className="w-10 text-right text-slate-500 font-bold">2%</span>
          </div>
        </div>

      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-[#334155] mr-2">Filter by Treatment:</span>
        {filterOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelectedFilter(opt)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedFilter === opt
                ? 'bg-[#1D5E54] text-white shadow-sm'
                : 'bg-[#EBF0F5] text-[#334155] hover:bg-[#DEE7F0]'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Reviews Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div key={rev.id} className="bg-[#FAFBFB] border border-[#A9C3C9] p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E1F2EE] border border-[#BDE3DB] flex items-center justify-center text-[#1D5E54] font-extrabold text-sm">
                    {rev.name[0]}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-[#0F172A]">{rev.name}</h3>
                    <p className="text-[11px] text-[#1D5E54] font-bold">{rev.doctor}</p>
                  </div>
                </div>

                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1D5E54] bg-[#E1F2EE] px-2.5 py-0.5 rounded border border-[#BDE3DB]">
                {rev.procedure}
              </span>

              <p className="text-xs text-[#475569] leading-relaxed font-medium">
                &quot;{rev.comment}&quot;
              </p>

            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>{rev.date}</span>
              <button
                onClick={() => handleHelpful(rev.id)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#1D5E54] hover:text-[#164E43]"
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Helpful ({rev.helpfulCount})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#A9C3C9] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-extrabold text-lg text-[#0F172A]">
                <MessageSquare className="w-5 h-5 text-[#2E7D72]" />
                <span>Write Patient Review</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-[#0F172A]">Thank You for Your Feedback!</h3>
                <p className="text-xs text-[#475569]">Your review has been submitted and published to Mission Gastrocare feedback roster.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block text-[#334155] font-bold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#334155] font-bold mb-1">Attending Doctor</label>
                    <select
                      value={newDoctor}
                      onChange={(e) => setNewDoctor(e.target.value)}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    >
                      <option value="Dr. Jitendra Mistry">Dr. Jitendra Mistry</option>
                      <option value="Dr. Saurabh Dey">Dr. Saurabh Dey</option>
                      <option value="Dr. Deepali Mistry">Dr. Deepali Mistry</option>
                      <option value="Dr. Himani Patel">Dr. Himani Patel</option>
                      <option value="Dr. Parul Mistry">Dr. Parul Mistry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#334155] font-bold mb-1">Star Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                    >
                      <option value={5}>5 Stars (Excellent)</option>
                      <option value={4}>4 Stars (Good)</option>
                      <option value={3}>3 Stars (Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#334155] font-bold mb-1">Procedure / Treatment Received</label>
                  <input
                    type="text"
                    required
                    value={newProcedure}
                    onChange={(e) => setNewProcedure(e.target.value)}
                    placeholder="e.g. Therapeutic ERCP / Laparoscopic Surgery"
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                  />
                </div>

                <div>
                  <label className="block text-[#334155] font-bold mb-1">Review Comments</label>
                  <textarea
                    rows={4}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your experience with our doctors, hospital facilities, nursing staff, or emergency response..."
                    className="w-full bg-[#FAFBFB] border border-[#A9C3C9] rounded-xl p-3 text-[#1E293B] focus:outline-none focus:border-[#2E7D72]"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-white pastel-emerald-gradient font-bold shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
