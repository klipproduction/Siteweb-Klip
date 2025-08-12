const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-foreground mb-6 md:mb-0">
            KLIP
          </div>
          
          {/* Contact Info */}
          <div className="text-right">
            <p className="text-foreground mb-1">info@klipproduction.ca</p>
            <p className="text-muted-foreground mb-4">Basé à Thetford Mines, Québec</p>
            <p className="text-muted-foreground text-sm">
              © 2025 KLIP — Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;