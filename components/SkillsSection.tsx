
import React, { useState, useCallback } from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';
import { geminiService } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [skillExplanation, setSkillExplanation] = useState<string | null>(null);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSkillClick = useCallback(async (skill: Skill) => {
    if (selectedSkill?.id === skill.id && skillExplanation) {
      // If already selected and explanation exists, clear to close
      setSelectedSkill(null);
      setSkillExplanation(null);
      return;
    }

    setSelectedSkill(skill);
    setIsLoadingExplanation(true);
    setError(null);
    setSkillExplanation(null); // Clear previous explanation immediately

    try {
      const prompt = `Explain the importance and core activities of '${skill.name}' in the design process in a concise and engaging way (max 70 words) for a portfolio.`;
      const explanation = await geminiService.generateText(prompt);
      setSkillExplanation(explanation);
    } catch (err) {
      console.error(`Failed to explain skill ${skill.name}:`, err);
      setError(`Oops! Couldn't get an explanation for ${skill.name}. Please try another skill.`);
      setSkillExplanation(null);
    } finally {
      setIsLoadingExplanation(false);
    }
  }, [selectedSkill, skillExplanation]);

  return (
    <Section id="skills" title="My Skills" className="bg-gray-800">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
        {SKILLS_DATA.map((skill) => (
          <div
            key={skill.id}
            onClick={() => handleSkillClick(skill)}
            className={`p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-indigo-500/30 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center
                        ${selectedSkill?.id === skill.id ? 'ring-2 ring-indigo-500 bg-gray-600' : 'hover:bg-gray-600'}`}
          >
            <div className="mb-3 text-indigo-400">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-100 mb-1">{skill.name}</h3>
            {skill.level && (
                 <div className="w-full bg-gray-500 rounded-full h-2.5 mt-2">
                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
            )}
          </div>
        ))}
      </div>

      {isLoadingExplanation && <div className="flex justify-center mt-8"><LoadingSpinner message={`Explaining ${selectedSkill?.name}...`} /></div>}
      
      {error && !isLoadingExplanation && (
         <div className="mt-8 p-6 bg-red-900/30 border border-red-700 text-red-300 rounded-lg text-center">
            <p>{error}</p>
         </div>
      )}

      {skillExplanation && !isLoadingExplanation && selectedSkill && (
        <div className="mt-8 p-6 bg-gray-700/50 backdrop-blur-sm rounded-lg shadow-xl border border-indigo-500/30 animate-fadeIn">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
            Understanding: {selectedSkill.name}
          </h3>
          <p className="text-gray-200 leading-relaxed">{skillExplanation}</p>
        </div>
      )}
       {!selectedSkill && !isLoadingExplanation && !error && (
        <p className="text-center text-gray-400 mt-8">Click on a skill to learn more about it (AI-powered explanation)!</p>
      )}
    </Section>
  );
};

export default SkillsSection;

// Minimal CSS for fade-in animation if not using a library
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
