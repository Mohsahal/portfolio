import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Mohsahal", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammedsahalpk",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:mohammedsahal1243@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-dark-100 border-t border-primary-500/20 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 md:mb-4">
              DevPortfolio
            </h3>
            <p className="text-sm md:text-base text-primary-300 mb-3 md:mb-4">
              Building amazing web experiences with modern technologies.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="md:w-[18px] md:h-[18px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-primary-100 mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5 md:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-sm md:text-base text-primary-300 hover:text-primary-500 transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-lg sm:text-xl font-bold text-primary-100 mb-3 md:mb-4">
              Stay Updated
            </h4>
            <p className="text-sm md:text-base text-primary-300 mb-3 md:mb-4">
              Subscribe to get notified about new projects and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 md:px-4 md:py-2 bg-dark-50 border border-primary-500/30 rounded-lg text-sm md:text-base text-primary-100 focus:outline-none focus:border-primary-500 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 md:px-6 md:py-2 bg-primary-500 text-black text-sm md:text-base font-semibold rounded-lg hover:bg-primary-400 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-primary-500/20 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs sm:text-sm md:text-base text-primary-300 text-center md:text-left">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-primary-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with{" "}
            <Heart className="text-primary-500 fill-current" size={14} /> by
            Mohammed Sahal PK
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
