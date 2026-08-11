import PageMeta from "../components/PageMeta";

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy — JishAtlas"
        description="JishAtlas Privacy Policy explaining how information is processed and handled when using the application."
      />
      <div className="section pt-[clamp(3.5rem,7vw,5.5rem)]">
        <div className="container max-w-[800px]">
          <h1 className="mb-2 text-[clamp(2rem,4vw,2.8rem)] font-bold text-ink" data-reveal>
            JishAtlas Privacy Policy
          </h1>
          <p className="mb-8 font-mono text-[0.9rem] text-ink-3" data-reveal style={{ "--reveal-delay": "50ms" }}>
            Last updated: August 11, 2026
          </p>

          <div className="prose max-w-none text-ink-2 space-y-8" data-reveal style={{ "--reveal-delay": "100ms" }}>
            <p className="text-[1.05rem] leading-relaxed">
              JishAtlas is an AI-powered file organization application developed by <strong>JishWorks</strong>. This Privacy Policy explains how JishAtlas handles information when you use the application.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">1. Information JishAtlas Processes</h2>
              <p className="leading-relaxed">
                JishAtlas may process information necessary to provide its features, including:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 leading-relaxed">
                <li>File and folder names</li>
                <li>File metadata</li>
                <li>Files and folders selected by the user</li>
                <li>Application settings and preferences</li>
                <li>Information required to organize or classify files</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">2. How Information Is Used</h2>
              <p className="leading-relaxed">
                Information processed by JishAtlas is used to provide features such as:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 leading-relaxed">
                <li>File organization</li>
                <li>File classification</li>
                <li>Searching and managing files</li>
                <li>AI-powered file organization features</li>
                <li>Improving the functionality and reliability of the application</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">3. Personal Information</h2>
              <p className="leading-relaxed">
                JishWorks does not sell users' personal information.
              </p>
              <p className="leading-relaxed">
                JishAtlas is designed to process information only as necessary to provide its features. The application does not intentionally collect personal information for advertising or sale.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">4. AI Processing</h2>
              <p className="leading-relaxed">
                JishAtlas uses artificial intelligence to provide certain application features.
              </p>
              <p className="leading-relaxed">
                Depending on the implementation of the application, information required for AI processing may be processed locally on the user's device or sent to a third-party AI service.
              </p>
              <p className="leading-relaxed">
                Users should only provide files and information that they are comfortable processing through the application's available features.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">5. Third-Party Services</h2>
              <p className="leading-relaxed">
                JishAtlas may use third-party services to provide certain functionality.
              </p>
              <p className="leading-relaxed">
                When third-party services are used, information shared with those services is limited to what is necessary to provide the relevant functionality.
              </p>
              <p className="leading-relaxed">
                Third-party services may have their own privacy policies and terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">6. Data Storage and Retention</h2>
              <p className="leading-relaxed">
                JishWorks does not intentionally retain users' files on its servers unless explicitly stated for a particular feature.
              </p>
              <p className="leading-relaxed">
                Files and information stored locally by JishAtlas remain under the user's control and may be removed by uninstalling the application or deleting the relevant data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">7. Data Security</h2>
              <p className="leading-relaxed">
                JishWorks takes reasonable measures to protect information processed by JishAtlas.
              </p>
              <p className="leading-relaxed">
                However, no method of electronic storage or transmission can be guaranteed to be completely secure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">8. Microsoft Store</h2>
              <p className="leading-relaxed">
                JishAtlas may be distributed through the Microsoft Store. Microsoft may process information in accordance with Microsoft's own privacy policies and terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                JishAtlas does not intentionally collect personal information from children.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">10. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                This Privacy Policy may be updated from time to time.
              </p>
              <p className="leading-relaxed">
                When changes are made, the <strong>Last updated</strong> date at the top of this page will be updated.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-ink">11. Contact</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or JishAtlas's privacy practices, please contact JishWorks through the official website:
              </p>
              <p className="leading-relaxed">
                <a
                  href="https://jishworks.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  https://jishworks.in/
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
