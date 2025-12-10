import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  Wrench,
  MapPin,
} from "lucide-react";

// Small reusable button used for nav links (desktop & mobile)
// Props: children, onClick, className (optional), isMobile (optional)
function NavLinkButton({
  children,
  onClick,
  className = "",
  isMobile = false,
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const primaryRGBA = "rgba(22, 24, 83, 1)";

  const basePadding = isMobile ? "px-4 py-3 w-full text-left" : "px-4 py-2";
  const rounded = isMobile ? "rounded-sm" : "rounded-full";

  const style = {
    backgroundColor: hover ? "rgba(240, 240, 248, 0.7)" : "transparent",

    color: hover ? "rgba(22,24,83,1)" : primaryRGBA,
    border: "none",
    transform: press ? "scale(0.96)" : "scale(1)",
    transition:
      "background-color 180ms ease, color 180ms ease, border-color 180ms ease, transform 120ms ease",
  };

  const handleClick = (e) => {
    // press animation
    setPress(true);
    setTimeout(() => setPress(false), 140);
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      className={`${basePadding} ${rounded} font-medium transition-all ${className}`}
      style={style}
      aria-pressed={press}
    >
      {children}
    </button>
  );
}

export default function FullNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --------- EDIT THIS VALUE to increase / decrease navbar gradient opacity (0 to 1) ----------
  const topOpacity = 0.8; // 0 = fully transparent, 1 = fully opaque
  // ------------------------------------------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => window.open("tel:+919876543210");
  const handleWhatsApp = () =>
    window.open("https://wa.me/919876543210", "_blank");

  // inside FullNavbar component top
  const NAVBAR_HEIGHT = 80; // update to match your real navbar height

  const navLinks = [
    { name: "Home", targetId: "hero" },
    { name: "Services", targetId: "services" },
    { name: "About", targetId: "about" },
    { name: "Stories", targetId: "customer-stories" },
    { name: "Contact", targetId: "cta" },
    { name: "Q&A", targetId: "qanda" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const ids = navLinks.map((l) => l.targetId);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: `-${NAVBAR_HEIGHT}px 0px -40% 0px`,
        threshold: 0.2,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Inline gradient style — uses rgba alpha for reliable runtime opacity control
  const gradientStyle = {
    background: `linear-gradient(90deg,
      rgba(145,221,207,${topOpacity}) 0%,
      rgba(247,249,242,${topOpacity})  100%)`,
    borderBottom: isScrolled ? "transparent" : "1px solid rgba(0,0,0,0.06)",
  };

  // Call button color (target color)
  const primaryRGBA = "rgba(22, 24, 83, 1)";

  // Desktop Call Now styles now use same visual behavior as NavLinkButton but slightly different padding
  const [hoverDesktopCall, setHoverDesktopCall] = useState(false);
  const [pressDesktopCall, setPressDesktopCall] = useState(false);
  const [hoverMobileCall, setHoverMobileCall] = useState(false);
  const [pressMobileCall, setPressMobileCall] = useState(false);

  const desktopCallStyle = {
    backgroundColor: hoverDesktopCall ? primaryRGBA : "transparent",
    color: hoverDesktopCall ? "#ffffff" : primaryRGBA,
    border: hoverDesktopCall
      ? "1px solid transparent"
      : `1px solid ${primaryRGBA}`,
    transform: pressDesktopCall ? "scale(0.96)" : "scale(1)",
    transition:
      "background-color 180ms ease, color 180ms ease, border-color 180ms ease, transform 120ms ease",
  };

  const mobileCallStyle = {
    backgroundColor: hoverMobileCall ? primaryRGBA : "transparent",
    color: hoverMobileCall ? "#ffffff" : primaryRGBA,
    border: hoverMobileCall
      ? "1px solid transparent"
      : `1px solid ${primaryRGBA}`,
    transform: pressMobileCall ? "scale(0.96)" : "scale(1)",
    transition:
      "background-color 180ms ease, color 180ms ease, border-color 180ms ease, transform 120ms ease",
  };

  const triggerDesktopPress = () => {
    setPressDesktopCall(true);
    window.setTimeout(() => setPressDesktopCall(false), 150);
  };

  const triggerMobilePress = () => {
    setPressMobileCall(true);
    window.setTimeout(() => setPressMobileCall(false), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-450 ease-out ${
          isScrolled
            ? "backdrop-blur-sm shadow-sm"
            : "backdrop-blur-sm shadow-sm"
        }`}
        style={
          isScrolled
            ? { background: "transparent", borderBottom: "transparent" }
            : gradientStyle
        }
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* 1. LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Wrench size={20} fill="currentColor" />
            </div>
            <span className={`text-xl font-bold tracking-tight text-gray-900`}>
              HomeTech
            </span>
          </div>

          {/* 2. CENTER NAVIGATION (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLinkButton
                key={link.name}
                onClick={() => scrollToId(link.targetId)}
                className={`text-lg font-medium ${
                  activeId === link.targetId ? "opacity-100" : "opacity-90"
                }`}
                isMobile={false}
                aria-current={activeId === link.targetId ? "page" : undefined}
              >
                {link.name}
              </NavLinkButton>
            ))}
          </div>

          {/* 3. RIGHT ACTIONS (Call & WhatsApp) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all"
              title="WhatsApp Us"
            >
              <MessageCircle size={20} />
            </button>

            {/* DESKTOP: Call Now (shares same look & behavior) */}
            <button
              onClick={() => {
                triggerDesktopPress();
                handleCall();
              }}
              onMouseEnter={() => setHoverDesktopCall(true)}
              onMouseLeave={() => {
                setHoverDesktopCall(false);
                setPressDesktopCall(false);
              }}
              onMouseDown={() => setPressDesktopCall(true)}
              onMouseUp={() => setPressDesktopCall(false)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold shadow-md transition-all"
              style={desktopCallStyle}
            >
              <PhoneCall size={18} style={{ flexShrink: 0 }} />
              <span>Call Now</span>
            </button>

            {/* MOBILE: round call button (same behavior but round) */}
            <button
              onClick={() => {
                triggerMobilePress();
                handleCall();
              }}
              onMouseEnter={() => setHoverMobileCall(true)}
              onMouseLeave={() => {
                setHoverMobileCall(false);
                setPressMobileCall(false);
              }}
              onMouseDown={() => setPressMobileCall(true)}
              onMouseUp={() => setPressMobileCall(false)}
              className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all"
              style={mobileCallStyle}
            >
              <PhoneCall size={18} />
            </button>

            <button
              className="md:hidden ml-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 4. MOBILE MENU DROPDOWN */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col p-4 gap-4 transition-all duration-300 origin-top ${
            mobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            // use the same NavLinkButton but styled for mobile (full-width)
            <NavLinkButton
              key={link.name}
              onClick={() => {
                scrollToId(link.targetId);
                setMobileMenuOpen(false);
              }}
              className="text-base"
              isMobile
              aria-current={activeId === link.targetId ? "page" : undefined}
            >
              {link.name}
            </NavLinkButton>
          ))}
          <div className="flex items-center gap-2 text-sm text-gray-500 py-2">
            <MapPin size={16} />
            <span>Serving Greater Metro Area</span>
          </div>
        </div>
      </nav>
    </>
  );
}
