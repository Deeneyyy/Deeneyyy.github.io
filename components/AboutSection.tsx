
import React, { useState, useCallback } from 'react';
import Section from './Section';
import { DESIGNER_NAME, DESIGNER_INTRO, DESIGN_PHILOSOPHY_KEYWORDS } from '../constants';
import { geminiService } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

const AboutSection: React.FC = () => {
  const [philosophy, setPhilosophy] = useState<string | null>(null);
  const [isLoadingPhilosophy, setIsLoadingPhilosophy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDesignPhilosophy = useCallback(async () => {
    setIsLoadingPhilosophy(true);
    setError(null);
    try {
      const randomKeyword = DESIGN_PHILOSOPHY_KEYWORDS[Math.floor(Math.random() * DESIGN_PHILOSOPHY_KEYWORDS.length)];
      const prompt = `Generate a concise and inspiring design philosophy (max 100 words) for a designer named ${DESIGNER_NAME} specializing in ${randomKeyword}. Focus on creativity, user impact, and continuous learning. Make it sound authentic and personal.`;
      const generatedPhilosophy = await geminiService.generateText(prompt);
      setPhilosophy(generatedPhilosophy);
    } catch (err) {
      console.error("Failed to generate design philosophy:", err);
      setError('Failed to load AI-generated philosophy. Please try again.');
      setPhilosophy(null); // Clear any previous philosophy
    } finally {
      setIsLoadingPhilosophy(false);
    }
  }, []);

  return (
    <Section id="about" className="bg-gray-900" titleClassName="text-indigo-400">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src={`https://picsum.photos/seed/${DESIGNER_NAME.replace(/\s+/g, '')}/500/500`}
            alt={DESIGNER_NAME}
            className="rounded-lg shadow-2xl relative w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-400">{DESIGNER_NAME}</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            {DESIGNER_INTRO}
          </p>
          
          {!philosophy && !isLoadingPhilosophy && (
            <button
              onClick={fetchDesignPhilosophy}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Discover My Design Philosophy (AI)
            </button>
          )}

          {isLoadingPhilosophy && <LoadingSpinner message="Crafting my philosophy..." />}
          
          {error && <p className="text-red-400 mt-4">{error}</p>}

          {philosophy && !isLoadingPhilosophy && (
            <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">My AI-Generated Design Philosophy:</h3>
              <p className="text-gray-300 italic">"{philosophy}"</p>
               <button
                onClick={fetchDesignPhilosophy}
                className="mt-4 text-sm text-indigo-400 hover:text-indigo-300"
              >
                Regenerate
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
