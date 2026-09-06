"use client";

import { useState, useEffect } from "react";
import { ShorthandNote } from "../../data/shorthand/types";
import { getShorthandNotes, saveShorthandNote, deleteShorthandNote } from "../../data/shorthand/storage";

export function ShorthandNotebook() {
  const [notes, setNotes] = useState<ShorthandNote[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // New Note fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<ShorthandNote["category"]>("Difficult Form");
  const [content, setContent] = useState("");

  useEffect(() => {
    setNotes(getShorthandNotes());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const updated = saveShorthandNote({ title, category, content });
    setNotes(updated);
    setTitle("");
    setContent("");
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this shorthand note?")) {
      const updated = deleteShorthandNote(id);
      setNotes(updated);
    }
  };

  const filteredNotes = notes.filter((n) => {
    const matchesCat = filterCategory === "All" || n.category === filterCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const categories = ["All", "Word", "Phrase", "Rule", "Difficult Form", "Mistake", "General"];

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100">Personal Shorthand Notebook</h3>
          <p className="text-xs text-slate-400">Save difficult outlines, custom phrases, rules & personal mistakes.</p>
        </div>

        <button
          type="button"
          onClick={() => setIsAdding((prev) => !prev)}
          className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shrink-0"
        >
          {isAdding ? "✕ Cancel" : "+ Add New Note"}
        </button>
      </div>

      {/* Add Note Form Drawer */}
      {isAdding && (
        <form onSubmit={handleSave} className="p-5 rounded-2xl bg-slate-900 border border-purple-500/40 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">New Note</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="text-[11px] text-slate-400 font-medium block mb-1">Title / Word / Phrase</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. In accordance with the law / Difficult joining"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ShorthandNote["category"])}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
              >
                <option value="Difficult Form">Difficult Form</option>
                <option value="Phrase">Phrase</option>
                <option value="Word">Word</option>
                <option value="Rule">Rule</option>
                <option value="Mistake">Mistake</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-400 font-medium block mb-1">Outline details / Reminders / Transcription</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note, rules to remember, or steno reminder here..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold"
            >
              Save Note
            </button>
          </div>
        </form>
      )}

      {/* Filter / Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilterCategory(c)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                filterCategory === c
                  ? "bg-purple-600 text-white"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search saved notes..."
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
        />
      </div>

      {/* Notes List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredNotes.map((n) => (
          <div key={n.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 relative group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                  {n.category}
                </span>
                <h4 className="font-bold text-slate-100 text-sm mt-1.5">{n.title}</h4>
              </div>
              <button
                onClick={() => handleDelete(n.id)}
                className="text-slate-500 hover:text-red-400 text-xs font-bold transition-colors p-1"
                title="Delete note"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{n.content}</p>
            <span className="text-[10px] text-slate-500 block pt-1">
              Updated: {new Date(n.updatedAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-10 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400">
          No notes found. Click "+ Add New Note" to save your first shorthand outline reminder!
        </div>
      )}
    </div>
  );
}
