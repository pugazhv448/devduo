export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-primary">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-light">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-accent/20 flex items-center justify-center border border-accent/40">
              <span className="font-display font-bold text-accent text-xl">D</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-wide">
              Devduo
            </span>
          </div>
          <p className="text-light/70 max-w-sm leading-relaxed text-sm">
            We craft premium digital experiences for local
            businesses — websites that convert visitors into loyal customers.
          </p>
          <div className="tag-pill">Crafted for Growth</div>
        </div>

        {/* Company Column */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-lg">Company</h4>
          <ul className="space-y-3">
            {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-light/60 hover:text-accent transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-lg">Services</h4>
          <ul className="space-y-3">
            {[
              'Business Websites',
              'Gym Websites',
              'Landing Pages',
              'Agency Sites',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  className="text-light/60 hover:text-accent transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-lg">Connect</h4>
          <ul className="space-y-3">
            <li>
              <a href="https://instagram.com/devduo" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-accent transition-colors text-sm">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/devduo" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-accent transition-colors text-sm">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/917894561230" target="_blank" rel="noopener noreferrer" className="text-light/60 hover:text-accent transition-colors text-sm">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:hello@devduo.in" className="text-light/60 hover:text-accent transition-colors text-sm">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between text-sm text-light/50">
        <p>© {new Date().getFullYear()} Devduo. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-4 md:mt-0">
          Built with <span className="text-red-500">❤️</span> in Chennai, India
        </p>
      </div>
    </footer>
  );
}
