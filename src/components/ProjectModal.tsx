import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, AlertTriangle, Layers, Calculator, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for Alyuca Interactive Demo
  const [alyucaTampered, setAlyucaTampered] = useState(false);
  const [alyucaLogMessage, setAlyucaLogMessage] = useState('Loan disbursed: $14,500 to Account #8841');

  // State for Carbon Tractor Calculator
  const [distance, setDistance] = useState<number>(45);
  const [transitMode, setTransitMode] = useState<'flight' | 'petrol_car' | 'ev' | 'train' | 'metro'>('petrol_car');

  // State for Context Studio
  const [selectedModel, setSelectedModel] = useState<'gemini' | 'gpt' | 'claude' | 'llama'>('gemini');
  const [workspaceContext, setWorkspaceContext] = useState(
    'Project: Fintech Compliance Engine\nSchema: Immutable audit chains\nStack: React + Node.js'
  );

  // Carbon Calculation
  const emissionFactors: Record<string, { factor: number; label: string }> = {
    flight: { factor: 0.255, label: 'Commercial Flight (Economy)' },
    petrol_car: { factor: 0.171, label: 'Average Petrol Car' },
    ev: { factor: 0.053, label: 'Electric Vehicle (Grid Mix)' },
    train: { factor: 0.035, label: 'Intercity Rail' },
    metro: { factor: 0.028, label: 'Electric Metro Rail' },
  };

  const calculatedCO2 = ((distance || 0) * emissionFactors[transitMode].factor).toFixed(2);
  const treesRequired = (parseFloat(calculatedCO2) / 21).toFixed(2); // ~21kg CO2 absorbed per tree/year

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden text-slate-900 animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
              {project.projectNumber} · {project.category}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-white border border-slate-200 text-slate-700">
              {project.statusBadge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              {project.title} {project.subtitle && <span className="text-sm font-normal text-slate-500 ml-2">{project.subtitle}</span>}
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-1">
              {project.domainOrScopeLabel}: {project.domainOrScopeValue}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
              System Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.fullDetails.overview}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-900 font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-900 inline-block" />
              KEY CAPABILITIES & ARCHITECTURE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.fullDetails.keyFeatures.map((feature, idx) => (
                <div key={idx} className="border border-slate-200 p-3 bg-white text-xs text-slate-700 leading-relaxed">
                  <div className="font-semibold text-slate-900 mb-1">
                    0{idx + 1}. {feature.split(':')[0]}
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    {feature.split(':')[1] || feature}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE DEMO ACCORDING TO PROJECT */}
          {project.fullDetails.liveDemoType === 'hash-verify' && (
            <div className="border border-slate-200 p-5 bg-slate-50/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  INTERACTIVE CRYPTOGRAPHIC CHAIN VALIDATOR
                </h4>
                <button
                  onClick={() => setAlyucaTampered(!alyucaTampered)}
                  className={`text-[11px] font-mono px-2.5 py-1 border transition-colors cursor-pointer ${
                    alyucaTampered
                      ? 'bg-rose-50 border-rose-300 text-rose-700'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-slate-800'
                  }`}
                >
                  {alyucaTampered ? 'Reset Tamper Simulation' : 'Simulate Silent Data Tamper'}
                </button>
              </div>

              <div className="space-y-3 text-xs font-mono">
                {/* Block 1 */}
                <div className={`p-3 border bg-white transition-colors ${alyucaTampered ? 'border-amber-400 bg-amber-50/20' : 'border-slate-200'}`}>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                    <span>ENTRY #01 (GENESIS)</span>
                    <span className="text-emerald-700 font-semibold">PRE-IMAGE HASH: 0x98a4e...</span>
                  </div>
                  <div className="text-slate-800 text-[11px]">
                    {alyucaTampered ? (
                      <span className="text-rose-600 font-bold bg-rose-50 px-1">
                        [TAMPERED] Loan disbursed: $94,500 to Account #8841 (Altered without secret key)
                      </span>
                    ) : (
                      alyucaLogMessage
                    )}
                  </div>
                  <div className="mt-1 text-[10px] text-slate-400">
                    HASH: {alyucaTampered ? '0xBAD0F42E... (INVALID)' : '0xa71b3e94...'}
                  </div>
                </div>

                <div className="flex justify-center text-slate-400 text-xs">↓ SHA-256 Link</div>

                {/* Block 2 */}
                <div className={`p-3 border bg-white transition-colors ${alyucaTampered ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'}`}>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                    <span>ENTRY #02 (LINKED AUDIT)</span>
                    <span className={alyucaTampered ? 'text-rose-600 font-bold' : 'text-emerald-700 font-semibold'}>
                      {alyucaTampered ? 'CRYPTOGRAPHIC CHAIN INVALIDATED ✕' : 'CHAIN INTEGRITY VERIFIED ✓'}
                    </span>
                  </div>
                  <div className="text-slate-800 text-[11px]">
                    Compliance check verified by Officer #412
                  </div>
                  <div className="mt-1 text-[10px] text-slate-400">
                    PARENT HASH LINK: {alyucaTampered ? 'BROKEN REFERENCE' : '0xa71b3e94...'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.fullDetails.liveDemoType === 'carbon-calc' && (
            <div className="border border-slate-200 p-5 bg-slate-50/50">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Calculator className="w-4 h-4 text-emerald-600" />
                LIVE CARBON FOOTPRINT SIMULATOR
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-500 mb-1">
                    Transit Distance (Kilometers)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={distance}
                    onChange={(e) => setDistance(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-xs font-mono focus:outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-500 mb-1">
                    Mode of Transportation
                  </label>
                  <select
                    value={transitMode}
                    onChange={(e) => setTransitMode(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 text-xs font-mono focus:outline-none focus:border-slate-900"
                  >
                    <option value="flight">Flight (Domestic/Economy)</option>
                    <option value="petrol_car">Petrol Car</option>
                    <option value="ev">Electric Vehicle (EV)</option>
                    <option value="train">Intercity Rail</option>
                    <option value="metro">Electric Metro Rail</option>
                  </select>
                </div>
              </div>

              {/* Real-time Calculation Result */}
              <div className="p-4 bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Calculated Carbon Output
                  </span>
                  <div className="text-2xl font-bold font-mono text-slate-900">
                    {calculatedCO2} <span className="text-xs font-normal text-slate-500">kg CO₂e</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Annual Tree Offset Equivalent
                  </span>
                  <div className="text-lg font-bold font-mono text-emerald-700">
                    ~{treesRequired} <span className="text-xs font-normal text-slate-600">trees</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.fullDetails.liveDemoType === 'context-switch' && (
            <div className="border border-slate-200 p-5 bg-slate-50/50">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-blue-600" />
                UNIFIED CONTEXT BRIDGE (ZERO CONTEXT LOSS SWITCHER)
              </h4>

              {/* Model tabs */}
              <div className="flex flex-wrap gap-2 mb-3">
                {(['gemini', 'gpt', 'claude', 'llama'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedModel(m)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase cursor-pointer border transition-colors ${
                      selectedModel === m
                        ? 'bg-[#122452] border-[#122452] text-white font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-white border border-slate-200 text-xs font-mono">
                <div className="text-[10px] text-slate-400 mb-1 flex items-center justify-between">
                  <span>ACTIVE INFERENCE: {selectedModel.toUpperCase()} ROUTER</span>
                  <span className="text-emerald-600 font-semibold">SHARED MEMORY: 100% PRESERVED</span>
                </div>
                <div className="text-slate-700 whitespace-pre-line bg-slate-50 p-2.5 border border-slate-100">
                  {workspaceContext}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="pt-2 border-t border-slate-200">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
              TECHNOLOGIES EMPLOYED
            </span>
            <div className="flex flex-wrap gap-2">
              {project.fullDetails.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
