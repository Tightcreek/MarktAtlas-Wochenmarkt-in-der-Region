import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 MarktAtlas Deutschland. Alle Rechte vorbehalten.
          </div>
          <nav className="flex space-x-6">
            <Link 
              to="/impressum" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;