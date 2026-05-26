export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/30">
          AI Security
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Detect Prompt Injection Attacks{' '}
          <span className="text-[#58a6ff]">Before They Strike</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time scanner that analyzes user inputs for prompt injection patterns, jailbreaking attempts, and malicious prompts before they reach your AI models.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Protecting — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-lg hover:border-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['Pattern Matching', 'Rule-based filters for known attack vectors'],['ML Detection', 'Adaptive models catch novel injection attempts'],['API Ready', 'Drop-in endpoint for any AI application']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/50 rounded-xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {['Unlimited API calls','Real-time injection detection','Pattern + ML-based analysis','Dashboard & monitoring','Email alerts on threats','Priority support'].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            ['What is a prompt injection attack?','A prompt injection attack is when a malicious user crafts input designed to override or hijack an AI model\'s instructions, causing it to behave in unintended or harmful ways.'],
            ['How does the detector work?','We combine rule-based pattern matching against known attack signatures with ML models trained on thousands of injection examples, giving you layered defense with low false-positive rates.'],
            ['How do I integrate it into my app?','Send a POST request to our API endpoint with the user input. You\'ll receive a risk score and classification in milliseconds — add it as middleware before any AI call.']
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Prompt Injection Attack Detector. All rights reserved.
      </footer>
    </main>
  )
}
