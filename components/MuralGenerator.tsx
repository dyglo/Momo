import React, { useState, useEffect } from 'react';
import { ImageSize, AspectRatio } from '../types';
import { generateMuralVisualization, checkApiKey, promptApiKey } from '../services/geminiService';
import { Loader2, Wand2, Download, Maximize2 } from 'lucide-react';
import gsap from 'gsap';

const MuralGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>(ImageSize.OneK);
  const [aspect, setAspect] = useState<AspectRatio>(AspectRatio.Landscape);
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkApiKey().then(setHasKey);
  }, []);

  const handleConnect = async () => {
    try {
      await promptApiKey();
      const valid = await checkApiKey();
      setHasKey(valid);
    } catch (e) {
      console.error("Failed to connect API key", e);
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasKey) {
      await handleConnect();
      return;
    }

    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResultImage(null);

    try {
      // Small animation for loading start
      gsap.to("#generator-canvas", { opacity: 0.5, duration: 0.3 });
      
      const base64Image = await generateMuralVisualization(prompt, size, aspect);
      setResultImage(base64Image);
      
      // Animate result in
      gsap.fromTo("#result-image", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });

    } catch (err) {
      setError("Failed to generate mural. Please try again.");
    } finally {
      setLoading(false);
      gsap.to("#generator-canvas", { opacity: 1, duration: 0.3 });
    }
  };

  return (
    <section id="generator" className="py-24 bg-black text-mammoth-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <h2 className="font-display text-6xl md:text-8xl text-mammoth-yellow uppercase mb-4">
            Visualize It <br /> Before We Paint It.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Use our AI Studio powered by Gemini to transform your blank walls into potential masterpieces instantly. Experiment with concepts before booking a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4 bg-zinc-900/50 p-8 border border-zinc-800 backdrop-blur-sm">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block font-condensed font-bold uppercase text-mammoth-yellow mb-2 tracking-widest">
                  Describe Your Vision
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., A giant octopus wrapping around a brick building in a steampunk style, sunset colors... Be specific about the location and style!"
                  className="w-full bg-black border border-zinc-700 p-4 text-white focus:border-mammoth-yellow focus:outline-none min-h-[150px] resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-condensed font-bold uppercase text-mammoth-yellow mb-2 tracking-widest">
                    Resolution
                  </label>
                  <select 
                    value={size} 
                    onChange={(e) => setSize(e.target.value as ImageSize)}
                    className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-mammoth-yellow focus:outline-none appearance-none"
                  >
                    <option value={ImageSize.OneK}>1K (Fast)</option>
                    <option value={ImageSize.TwoK}>2K (High Res)</option>
                    <option value={ImageSize.FourK}>4K (Ultra)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-condensed font-bold uppercase text-mammoth-yellow mb-2 tracking-widest">
                    Format
                  </label>
                  <select 
                    value={aspect} 
                    onChange={(e) => setAspect(e.target.value as AspectRatio)}
                    className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-mammoth-yellow focus:outline-none appearance-none"
                  >
                    <option value={AspectRatio.Landscape}>16:9 Landscape</option>
                    <option value={AspectRatio.Portrait}>9:16 Portrait</option>
                    <option value={AspectRatio.Square}>1:1 Square</option>
                  </select>
                </div>
              </div>

              {!hasKey ? (
                <button
                  type="button"
                  onClick={handleConnect}
                  className="w-full bg-mammoth-blue text-black font-condensed font-bold text-xl uppercase py-4 tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  Connect API Key
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full font-condensed font-bold text-xl uppercase py-4 tracking-widest transition-all flex items-center justify-center gap-2
                    ${loading ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' : 'bg-mammoth-yellow text-black hover:bg-white'}
                  `}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" /> Painting...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} /> Generate Concept
                    </>
                  )}
                </button>
              )}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          </div>

          {/* Preview Area */}
          <div id="generator-canvas" className="lg:col-span-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center min-h-[500px] relative overflow-hidden group">
            {resultImage ? (
              <div className="relative w-full h-full flex items-center justify-center">
                 <img 
                  id="result-image"
                  src={resultImage} 
                  alt="Generated Mural" 
                  className="max-w-full max-h-[700px] object-contain shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={resultImage} download="mammoth-mural-concept.png" className="bg-black text-white p-3 hover:bg-mammoth-yellow hover:text-black transition-colors">
                        <Download size={20} />
                    </a>
                </div>
              </div>
            ) : (
              <div className="text-center p-12 opacity-30">
                <div className="font-display text-9xl text-mammoth-yellow mb-4">?</div>
                <p className="font-condensed uppercase tracking-widest text-2xl">Your Masterpiece Awaits</p>
                <p className="mt-2 text-sm">Select resolution and describe your idea to begin.</p>
              </div>
            )}
            
            {loading && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20">
                 <div className="w-64 h-2 bg-zinc-800 rounded overflow-hidden">
                    <div className="h-full bg-mammoth-yellow animate-[progress_2s_ease-in-out_infinite]"></div>
                 </div>
                 <p className="mt-4 font-condensed uppercase tracking-widest text-mammoth-yellow animate-pulse">
                    AI Artist is thinking...
                 </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes progress {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default MuralGenerator;