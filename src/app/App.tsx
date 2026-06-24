import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import dgrLogo from "@/imports/DGR-LOGO.png";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Car,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Coffee,
  Droplets,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  RefreshCw,
  Shield,
  Sparkles,
  Star,
  Tv,
  Users,
  Utensils,
  Wifi,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const GOLD = "#C9A84C";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
  viewport: { once: true },
});

// ─── Gold divider ──────────────────────────────────────────────────────────
function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-12 h-px bg-[#C9A84C]" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]" />
      <div className="w-12 h-px bg-[#C9A84C]" />
    </div>
  );
}

// ─── Section label ─────────────────────────────────────────────────────────
function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <span
      className="font-['Montserrat'] text-[10px] tracking-[0.4em] uppercase"
      style={{ color: light ? "rgba(201,168,76,0.9)" : GOLD }}
    >
      {children}
    </span>
  );
}

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "#hero" },
    { label: "Nos Espaces", href: "#espaces" },
    { label: "Services", href: "#services" },
    { label: "Événements", href: "#evenements" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D0D0D]/96 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <ImageWithFallback
            src={dgrLogo}
            alt="De Gaulle Résidence logo"
            className="h-10 w-auto object-contain"
          />
          {/* <div className="flex flex-col leading-none">
            <span className="font-['Playfair_Display'] text-white text-base font-semibold tracking-widest">
              DE GAULLE
            </span>
            <span className="font-['Montserrat'] text-[#C9A84C] text-[7px] tracking-[0.45em] uppercase mt-0.5">
              RÉSIDENCE
            </span>
          </div> */}
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-['DM_Sans'] text-white/75 text-sm hover:text-[#C9A84C] transition-colors duration-300 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#111] px-6 py-3 hover:bg-[#b8973b] transition-colors duration-300"
          >
            Réserver
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#C9A84C]/20 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-['DM_Sans'] text-white/80 text-base hover:text-[#C9A84C] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#111] px-5 py-3.5 text-center hover:bg-[#b8973b] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Réserver
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex flex-col bg-[#0D0D0D]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://ayilaa.s3.eu-west-1.amazonaws.com/attraction/logos/670dd3df49800_1728959455_De%20Gaulle%20Residence%20(6).jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/40 to-[#0D0D0D]/80" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          <SectionLabel light>Logpom — Douala, Cameroun</SectionLabel>
          <GoldDivider />
          <h1 className="font-['Playfair_Display'] text-white text-5xl sm:text-7xl md:text-8xl font-semibold leading-[1.05] tracking-tight">
            Votre adresse
            <br />
            <em className="text-[#C9A84C] not-italic">à Douala.</em>
          </h1>
          <p className="font-['DM_Sans'] text-white/70 text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Studios, appartements et bureaux meublés haut de gamme — à Logpom,
            au cœur de Douala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#contact"
              className="font-['Montserrat'] text-[11px] tracking-[0.25em] uppercase bg-[#C9A84C] text-[#111] px-10 py-4 hover:bg-[#b8973b] transition-colors duration-300"
            >
              Réserver maintenant
            </a>
            <a
              href="#espaces"
              className="font-['Montserrat'] text-[11px] tracking-[0.25em] uppercase border border-white/60 text-white px-10 py-4 hover:bg-white hover:text-[#111] transition-colors duration-300"
            >
              Découvrir nos espaces
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 flex flex-col items-center pb-8 gap-2"
      >
        <span className="font-['Montserrat'] text-white/40 text-[9px] tracking-[0.3em] uppercase">
          Découvrir
        </span>
        <ChevronDown size={16} className="text-[#C9A84C] animate-bounce" />
      </motion.div>

      {/* Reassurance band */}
      <div className="relative z-10 bg-[#C9A84C]/10 border-t border-[#C9A84C]/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Wifi, label: "Wi-Fi Haut Débit" },
            { icon: Car, label: "Parking Sécurisé 24h/24" },
            { icon: Zap, label: "Groupe Électrogène & Forage" },
            { icon: Sparkles, label: "Service Ménage Inclus" },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-3">
              <Icon size={15} className="text-[#C9A84C] shrink-0" />
              <span className="font-['DM_Sans'] text-white/75 text-xs tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="apropos" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <motion.div
          {...fadeUp(0)}
          className="md:col-span-3 flex flex-col gap-7"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>Notre Histoire</SectionLabel>
            <GoldDivider className="justify-start" />
            <h2 className="font-['Playfair_Display'] text-[#1A1A1A] text-4xl md:text-5xl font-semibold leading-tight">
              Chez De Gaulle Résidence, nous avons réinventé ce que signifie
              <em className="text-[#C9A84C] italic"> se sentir chez soi.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-['DM_Sans'] text-[#4A4A4A] text-base leading-relaxed">
              Nichée dans le quartier paisible de Logpom à Douala, face au
              Collège Charles de Gaulle, notre résidence est bien plus qu'un
              simple hébergement. C'est un espace de vie pensé pour ceux qui
              exigent confort, élégance et tranquillité — qu'ils soient en
              déplacement professionnel, en famille, ou en quête d'un nouveau
              chez-soi.
            </p>
            <p className="font-['DM_Sans'] text-[#4A4A4A] text-base leading-relaxed">
              Depuis notre ouverture, nous accueillons des résidents, des
              expatriés, des hommes et femmes d'affaires, et des familles qui
              choisissent De Gaulle Résidence pour sa qualité irréprochable, ses
              services hôteliers et son ambiance unique. Ici, chaque détail
              compte.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-2">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "Des espaces soigneusement aménagés, équipés des meilleures commodités modernes.",
              },
              {
                icon: RefreshCw,
                title: "Flexibilité",
                desc: "Courte ou longue durée, meublé ou non — nous nous adaptons à votre rythme.",
              },
              {
                icon: Heart,
                title: "Service",
                desc: "Un accueil 24h/24, un personnel attentionné et des services hôteliers de prestige.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-4 border border-[#C9A84C]/20 bg-white"
              >
                <Icon size={18} style={{ color: GOLD }} />
                <span className="font-['Montserrat'] text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A] font-semibold">
                  {title}
                </span>
                <p className="font-['DM_Sans'] text-[#4A4A4A] text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="md:col-span-2">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A84C]/30" />
            <img
              src="https://images.unsplash.com/photo-1646991761123-d83ce47c30c9?w=700&h=900&fit=crop&auto=format"
              alt="Lobby élégant de De Gaulle Résidence"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── NOS ESPACES ───────────────────────────────────────────────────────────
function Espaces() {
  const [filter, setFilter] = useState("Tous");
  const filters = ["Tous", "Studios", "Appartements", "Bureaux"];

  const spaces = [
    {
      tag: "Studios",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop&auto=format",
      title: "Studio Meublé",
      subtitle: "L'essentiel du confort en format compact.",
      desc: "Idéal pour les professionnels en déplacement ou les séjours solo. Équipé avec goût, connecté et fonctionnel.",
      features: [
        "Cuisine équipée",
        "TV Canal+",
        "Wi-Fi haut débit",
        "Balcon",
        "Climatisation",
      ],
      price: "À partir de 40 000 XAF / nuit",
      cta: "Réserver ce studio",
    },
    {
      tag: "Appartements",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop&auto=format",
      title: "Appartement Meublé",
      subtitle: "Votre résidence secondaire à Douala.",
      desc: "Pour les familles, les équipes ou les séjours prolongés. Espace de vie généreux, cuisine complète, chambres séparées.",
      features: [
        "Salon séparé",
        "1 à 3 chambres",
        "Cuisine entièrement équipée",
        "Wi-Fi",
        "Balcon",
      ],
      price: "Tarif sur demande — séjour minimum 1 semaine",
      cta: "Demander un devis",
    },
    {
      tag: "Bureaux",
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop&auto=format",
      title: "Bureau Meublé ou Non Meublé",
      subtitle: "Travaillez dans un cadre à la hauteur de vos ambitions.",
      desc: "Nos bureaux discrets et bien situés sont idéaux pour professionnels indépendants, représentations, ou petites équipes.",
      features: [
        "Options meublé ou vide",
        "Accès sécurisé",
        "Wi-Fi dédié",
        "Salle de réunion disponible",
      ],
      price: "Contrat mensuel ou annuel — tarifs préférentiels",
      cta: "Nous contacter",
    },
  ];

  const visible = spaces.filter((s) => filter === "Tous" || s.tag === filter);

  return (
    <section id="espaces" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-14"
        >
          <SectionLabel light>Nos Espaces</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl font-semibold">
            Choisissez votre espace idéal
          </h2>
          <p className="font-['DM_Sans'] text-white/55 text-base max-w-xl leading-relaxed">
            Des espaces conçus pour chaque style de vie — du studio fonctionnel
            à l'appartement de standing.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-colors duration-300 ${
                  filter === f
                    ? "bg-[#C9A84C] text-[#111]"
                    : "border border-white/20 text-white/60 hover:border-[#C9A84C]/60 hover:text-[#C9A84C]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((space, i) => (
            <motion.div
              key={space.title}
              {...fadeUp(i * 0.15)}
              className="group bg-[#1A1A1A] border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-400 flex flex-col"
            >
              <div
                className="relative overflow-hidden bg-[#0D0D0D]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <SectionLabel light>{space.tag}</SectionLabel>
                  <h3 className="font-['Playfair_Display'] text-white text-xl mt-1">
                    {space.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[#C9A84C] text-sm mt-1 italic">
                    {space.subtitle}
                  </p>
                </div>
                <p className="font-['DM_Sans'] text-white/60 text-sm leading-relaxed">
                  {space.desc}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {space.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle size={12} style={{ color: GOLD }} />
                      <span className="font-['DM_Sans'] text-white/55 text-xs">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-3">
                  <span className="font-['DM_Sans'] text-white/80 text-sm font-medium">
                    {space.price}
                  </span>
                  <a
                    href="#contact"
                    className="font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase bg-[#C9A84C] text-[#111] px-5 py-3 text-center hover:bg-[#b8973b] transition-colors duration-300"
                  >
                    {space.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.3)}
          className="text-center mt-10 font-['DM_Sans'] text-white/40 text-sm"
        >
          Vous ne trouvez pas ce qu'il vous faut ?{" "}
          <a href="#contact" className="text-[#C9A84C] hover:underline">
            Contactez-nous pour un espace personnalisé →
          </a>
        </motion.p>
      </div>
    </section>
  );
}

// ─── ÉQUIPEMENTS ───────────────────────────────────────────────────────────
function Equipements() {
  const items = [
    {
      icon: Wifi,
      title: "Wi-Fi Haut Débit",
      desc: "Connexion rapide et stable dans tous les espaces — incluse.",
    },
    {
      icon: Coffee,
      title: "Cuisine Équipée",
      desc: "Réfrigérateur, four, micro-ondes, cafetière, bouilloire électrique.",
    },
    {
      icon: Tv,
      title: "TV Canal+",
      desc: "Accès aux chaînes Canal+ dans chaque espace pour vos soirées.",
    },
    {
      icon: Wind,
      title: "Balcon Privatif",
      desc: "Chaque unité dispose d'un balcon — parfait pour les matins tranquilles.",
    },
    {
      icon: Building2,
      title: "Ascenseur",
      desc: "Accès facile à tous les étages, adapté aux bagages et PMR.",
    },
    {
      icon: Zap,
      title: "Groupe Électrogène",
      desc: "Continuité d'électricité garantie, 24h/24 — même en cas de coupure.",
    },
    {
      icon: Droplets,
      title: "Forage Eau Privé",
      desc: "Alimentation en eau autonome pour un approvisionnement sans interruption.",
    },
    {
      icon: Car,
      title: "Parking Sécurisé",
      desc: "Espace de stationnement surveillé, couvert et réservé aux résidents.",
    },
    {
      icon: Sparkles,
      title: "Service Ménage",
      desc: "Nettoyage régulier des espaces assuré par notre équipe dédiée.",
    },
    {
      icon: Heart,
      title: "Service de Pressing",
      desc: "Entretien et repassage de vos vêtements sur place, à la demande.",
    },
    {
      icon: Utensils,
      title: "Restaurant-Bar",
      desc: "Profitez d'une cuisine savoureuse et de boissons sélectionnées sur place.",
    },
    {
      icon: Shield,
      title: "Sécurité 24h/24",
      desc: "Agent de sécurité présent à l'entrée en permanence pour votre tranquillité.",
    },
  ];

  return (
    <section id="equipements" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-16"
        >
          <SectionLabel>Équipements & Services</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-[#1A1A1A] text-4xl md:text-5xl font-semibold">
            Tout ce dont vous avez besoin,{" "}
            <em className="text-[#C9A84C]">déjà là.</em>
          </h2>
          <p className="font-['DM_Sans'] text-[#4A4A4A] text-base max-w-lg leading-relaxed">
            Chaque espace est pensé pour vous offrir la liberté de vous
            concentrer sur ce qui compte vraiment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C9A84C]/10">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(Math.floor(i / 4) * 0.1)}
              className="bg-[#FAFAF7] hover:bg-white transition-colors duration-300 p-6 flex flex-col gap-3 group"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors duration-300">
                <Icon size={16} style={{ color: GOLD }} />
              </div>
              <span className="font-['Montserrat'] text-[11px] tracking-[0.15em] uppercase text-[#1A1A1A] font-semibold">
                {title}
              </span>
              <p className="font-['DM_Sans'] text-[#4A4A4A] text-xs leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES PREMIUM ──────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?w=700&h=500&fit=crop&auto=format",
      title: "Conciergerie Personnalisée",
      subtitle: "Votre assistant à Douala.",
      desc: "Réservation de taxi, courses, recommandations locales, gestion de vos démarches — notre équipe est à votre service pour rendre votre quotidien plus simple et agréable.",
      badge: "Disponible 7j/7 — Sur demande",
    },
    {
      image:
        "https://images.unsplash.com/photo-1641924676093-42e61835bbe2?w=700&h=500&fit=crop&auto=format",
      title: "Room Service & Restauration",
      subtitle: "La cuisine livrée à votre porte.",
      desc: "Notre cuisine prépare des repas maison et des boissons fraîches livrés directement dans votre espace. Menu varié, disponible selon les horaires de notre restaurant-bar.",
      badge: "Disponible aux heures de service — Sur commande",
    },
    {
      image:
        "https://images.unsplash.com/photo-1740933084056-078fac872bff?w=700&h=500&fit=crop&auto=format",
      title: "Salle de Réunion Équipée",
      subtitle: "Impressionnez vos partenaires.",
      desc: "Un espace professionnel climatisé, équipé d'un écran de projection, connexion Wi-Fi dédiée et mobilier de qualité — idéal pour vos réunions, formations ou présentations.",
      badge: "Réservation à l'heure ou à la journée",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522255272218-7ac5249be344?w=700&h=500&fit=crop&auto=format",
      title: "Transfert Aéroport",
      subtitle: "Arrivez et repartez en toute sérénité.",
      desc: "Nous organisons votre transfert depuis ou vers l'Aéroport International de Douala avec un chauffeur privé partenaire, ponctuel et discret.",
      badge: "Sur réservation anticipée",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=700&h=500&fit=crop&auto=format",
      title: "Blanchisserie Express",
      subtitle: "Toujours impeccable.",
      desc: "Notre service de blanchisserie prend en charge votre linge et vous le restitue propre et parfaitement repassé — en 24h ou en express selon vos besoins.",
      badge: "Service quotidien — Sur demande",
    },
    {
      image:
        "https://images.unsplash.com/photo-1643267514395-b36b3f7e8281?w=700&h=500&fit=crop&auto=format",
      title: "Coffre-Fort en Chambre",
      subtitle: "Vos valeurs en sécurité.",
      desc: "Chaque espace est équipé d'un coffre-fort numérique personnel pour protéger vos documents, espèces et objets de valeur durant votre séjour.",
      badge: "Inclus dans chaque unité",
    },
  ];

  return (
    <section id="services" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-16"
        >
          <SectionLabel light>Services Premium</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl font-semibold">
            Une résidence. <em className="text-[#C9A84C]">Une expérience.</em>
          </h2>
          <p className="font-['DM_Sans'] text-white/55 text-base max-w-lg leading-relaxed">
            Parce que vous méritez plus que quatre murs — nous proposons des
            services qui font toute la différence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.1)}
              className="group flex flex-col sm:flex-row bg-[#1A1A1A] border border-white/5 hover:border-[#C9A84C]/25 transition-all duration-400 overflow-hidden"
            >
              <div className="sm:w-48 shrink-0 bg-[#0D0D0D] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: "160px" }}
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div>
                  <h3 className="font-['Playfair_Display'] text-white text-lg">
                    {s.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[#C9A84C] text-sm italic">
                    {s.subtitle}
                  </p>
                </div>
                <p className="font-['DM_Sans'] text-white/55 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span className="font-['Montserrat'] text-[9px] tracking-[0.2em] uppercase text-[#C9A84C]/80 border border-[#C9A84C]/25 px-3 py-1 w-fit">
                  {s.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ÉVÉNEMENTS ────────────────────────────────────────────────────────────
function Evenements() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    date: "",
    guests: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const eventTypes = [
    { icon: Star, label: "Anniversaires & Fêtes Privées" },
    { icon: Heart, label: "Mariages & Cérémonies" },
    { icon: Users, label: "Soirées Entreprise & Team Building" },
    { icon: Building2, label: "Séminaires & Formations" },
  ];

  const inputClass =
    "w-full bg-white/5 border border-white/15 focus:border-[#C9A84C] outline-none text-white placeholder-white/30 font-['DM_Sans'] text-sm px-4 py-3 transition-colors duration-300";

  return (
    <section id="evenements" className="relative py-24 md:py-32 bg-[#0D0D0D]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=1920&h=800&fit=crop&auto=format)",
        }}
      />
      <div className="absolute inset-0 bg-[#0D0D0D]/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-12"
        >
          <SectionLabel light>Événements & Réceptions</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl font-semibold max-w-3xl">
            Célébrez vos moments les plus précieux dans un cadre d'exception.
          </h2>
          <p className="font-['DM_Sans'] text-white/60 text-base max-w-2xl leading-relaxed">
            De Gaulle Résidence met ses espaces à votre disposition pour vos
            événements privés et professionnels — avec un soin particulier pour
            chaque détail.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {eventTypes.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-5 border border-[#C9A84C]/20 bg-white/5 text-center"
            >
              <Icon size={20} style={{ color: GOLD }} />
              <span className="font-['DM_Sans'] text-white/75 text-xs leading-tight">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="bg-[#1A1A1A]/90 border border-[#C9A84C]/20 p-8 md:p-10"
        >
          <h3 className="font-['Playfair_Display'] text-white text-2xl mb-2">
            Un événement ? Parlez-nous de votre projet.
          </h3>
          <p className="font-['DM_Sans'] text-white/50 text-sm mb-7">
            Notre équipe vous recontactera dans les 24 heures pour discuter de
            votre devis personnalisé.
          </p>
          {sent ? (
            <div className="flex items-center gap-3 py-8 justify-center">
              <CheckCircle size={22} style={{ color: GOLD }} />
              <span className="font-['DM_Sans'] text-white text-base">
                Merci ! Nous vous répondons dans les 24h.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
              <input
                className={inputClass}
                placeholder="Nom complet"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className={inputClass}
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className={inputClass}
                placeholder="Téléphone (WhatsApp)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <select
                className={`${inputClass} appearance-none`}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="" disabled className="bg-[#1A1A1A]">
                  Type d'événement
                </option>
                <option value="anniversaire" className="bg-[#1A1A1A]">
                  Anniversaire & Fête Privée
                </option>
                <option value="mariage" className="bg-[#1A1A1A]">
                  Mariage & Cérémonie
                </option>
                <option value="entreprise" className="bg-[#1A1A1A]">
                  Soirée Entreprise
                </option>
                <option value="seminaire" className="bg-[#1A1A1A]">
                  Séminaire & Formation
                </option>
              </select>
              <input
                className={inputClass}
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
              <input
                className={inputClass}
                type="number"
                placeholder="Nombre d'invités"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
              />
              <textarea
                className={`${inputClass} md:col-span-2 resize-none`}
                rows={4}
                placeholder="Décrivez votre projet..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="font-['Montserrat'] text-[11px] tracking-[0.25em] uppercase bg-[#C9A84C] text-[#111] px-10 py-4 hover:bg-[#b8973b] transition-colors duration-300"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── TARIFS ────────────────────────────────────────────────────────────────
function Tarifs() {
  const plans = [
    {
      tag: "Courte Durée",
      title: "Nuitée",
      price: "À partir de 40 000 XAF",
      period: "/ nuit",
      desc: "Idéal pour les séjours ponctuels, les professionnels en déplacement ou les visiteurs de passage.",
      features: [
        "Wi-Fi inclus",
        "Ménage quotidien",
        "Parking",
        "Groupe électrogène",
      ],
      cta: "Réserver une nuit",
      featured: false,
    },
    {
      tag: "Recommandé",
      title: "Séjour Semaine",
      price: "Tarif préférentiel",
      period: "contactez-nous",
      desc: "Pour les séjours de 5 à 30 jours. Réduction sur le tarif nuitée, tous services inclus.",
      features: [
        "Tout inclus",
        "Pressing hebdomadaire",
        "Priorité sur les espaces",
        "Wi-Fi inclus",
      ],
      cta: "Demander le tarif semaine",
      featured: true,
    },
    {
      tag: "Long Séjour",
      title: "Résidence Mensuelle",
      price: "Tarif mensuel",
      period: "sur devis personnalisé",
      desc: "Pour les expatriés, familles ou professionnels qui s'installent à Douala. Contrat souple.",
      features: [
        "Tarif réduit",
        "Adresse postale fournie",
        "Services à la carte",
        "Renouvellement simplifié",
      ],
      cta: "Nous contacter",
      featured: false,
    },
  ];

  return (
    <section id="tarifs" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-14"
        >
          <SectionLabel>Tarifs & Disponibilités</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-[#1A1A1A] text-4xl md:text-5xl font-semibold">
            Des tarifs transparents,{" "}
            <em className="text-[#C9A84C]">des séjours sans surprise.</em>
          </h2>
          <p className="font-['DM_Sans'] text-[#4A4A4A] text-base max-w-lg leading-relaxed">
            Choisissez la formule qui correspond à votre rythme de vie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              {...fadeUp(i * 0.15)}
              className={`flex flex-col p-8 border ${
                plan.featured
                  ? "bg-[#1A1A1A] border-[#C9A84C] shadow-xl shadow-[#C9A84C]/10"
                  : "bg-white border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors duration-300"
              }`}
            >
              {plan.featured && (
                <div className="bg-[#C9A84C] text-[#111] font-['Montserrat'] text-[9px] tracking-[0.3em] uppercase px-3 py-1 w-fit mb-4">
                  ✦ Recommandé
                </div>
              )}
              <SectionLabel light={plan.featured}>{plan.tag}</SectionLabel>
              <h3
                className={`font-['Playfair_Display'] text-2xl mt-2 mb-1 ${plan.featured ? "text-white" : "text-[#1A1A1A]"}`}
              >
                {plan.title}
              </h3>
              <div className="mb-4">
                <span
                  className={`font-['Playfair_Display'] text-3xl font-semibold ${plan.featured ? "text-[#C9A84C]" : "text-[#1A1A1A]"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-['DM_Sans'] text-sm ml-1 ${plan.featured ? "text-white/50" : "text-[#999]"}`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`font-['DM_Sans'] text-sm leading-relaxed mb-5 ${plan.featured ? "text-white/55" : "text-[#4A4A4A]"}`}
              >
                {plan.desc}
              </p>
              <ul className="flex flex-col gap-2 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle size={13} style={{ color: GOLD }} />
                    <span
                      className={`font-['DM_Sans'] text-xs ${plan.featured ? "text-white/65" : "text-[#4A4A4A]"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase px-5 py-3.5 text-center transition-colors duration-300 ${
                  plan.featured
                    ? "bg-[#C9A84C] text-[#111] hover:bg-[#b8973b]"
                    : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#111]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.3)}
          className="text-center mt-10 font-['DM_Sans'] text-[#999] text-xs italic"
        >
          Tous nos tarifs sont exprimés en Franc CFA (XAF). Paiement accepté :
          Orange Money, MTN MoMo, virement bancaire, espèces. Caution
          remboursable exigée à l'entrée.
        </motion.p>
      </div>
    </section>
  );
}

// ─── GALERIE ───────────────────────────────────────────────────────────────
function Galerie() {
  const [activeFilter, setActiveFilter] = useState("Tout voir");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filters = ["Tout voir", "Intérieurs", "Extérieurs", "Espaces Communs"];

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop&auto=format",
      alt: "Chambre studio",
      cat: "Intérieurs",
      tall: false,
    },
    {
      src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=800&fit=crop&auto=format",
      alt: "Salon appartement",
      cat: "Intérieurs",
      tall: true,
    },
    {
      src: "https://images.unsplash.com/photo-1661777997325-136841e872e5?w=600&h=400&fit=crop&auto=format",
      alt: "Façade extérieure",
      cat: "Extérieurs",
      tall: false,
    },
    {
      src: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=600&h=400&fit=crop&auto=format",
      alt: "Chambre deluxe",
      cat: "Intérieurs",
      tall: false,
    },
    {
      src: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=800&fit=crop&auto=format",
      alt: "Salon spacieux",
      cat: "Intérieurs",
      tall: true,
    },
    {
      src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop&auto=format",
      alt: "Espace bureau",
      cat: "Espaces Communs",
      tall: false,
    },
    {
      src: "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=600&h=400&fit=crop&auto=format",
      alt: "Salle de réception",
      cat: "Espaces Communs",
      tall: false,
    },
    {
      src: "https://images.unsplash.com/photo-1646991761123-d83ce47c30c9?w=600&h=400&fit=crop&auto=format",
      alt: "Lobby résidence",
      cat: "Espaces Communs",
      tall: false,
    },
    {
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&h=800&fit=crop&auto=format",
      alt: "Salon moderne",
      cat: "Intérieurs",
      tall: true,
    },
  ];

  const visible = photos.filter(
    (p) => activeFilter === "Tout voir" || p.cat === activeFilter,
  );

  return (
    <section id="galerie" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-12"
        >
          <SectionLabel light>Galerie</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl font-semibold">
            De Gaulle Résidence <em className="text-[#C9A84C]">en images.</em>
          </h2>
          <p className="font-['DM_Sans'] text-white/55 text-base max-w-lg leading-relaxed">
            Chaque espace témoigne d'une attention particulière portée à
            l'esthétique et au confort.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-['Montserrat'] text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-300 ${
                  activeFilter === f
                    ? "bg-[#C9A84C] text-[#111]"
                    : "border border-white/20 text-white/55 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {visible.map((photo, i) => (
            <motion.div
              key={photo.src + i}
              {...fadeUp(i * 0.08)}
              className="break-inside-avoid group relative overflow-hidden bg-[#0D0D0D] cursor-pointer"
              onClick={() => setLightbox(photo.src.replace("w=600", "w=1200"))}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${photo.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
              <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/40 transition-all duration-400 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-['Montserrat'] text-[9px] tracking-[0.3em] uppercase border border-white/60 px-4 py-2">
                  Voir
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0D0D0D]/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white/60 hover:text-white">
            <X size={26} />
          </button>
          <img
            src={lightbox}
            alt="Galerie"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

// ─── TÉMOIGNAGES ───────────────────────────────────────────────────────────
function Temoignages() {
  const reviews = [
    {
      initials: "A.M",
      name: "A. Mbarga",
      role: "Consultante, séjour professionnel",
      stars: 5,
      text: "J'étais en mission à Douala pour 3 semaines. De Gaulle Résidence m'a offert tout le confort d'un hôtel, avec l'intimité d'un appartement. Je ne logerais nulle part ailleurs désormais.",
    },
    {
      initials: "K.T",
      name: "K. Tagne",
      role: "Directeur Commercial, Douala",
      stars: 5,
      text: "La connexion Wi-Fi est excellente, le parking sécurisé, et le personnel est d'une discrétion et d'une efficacité remarquables. Un vrai coup de cœur.",
    },
    {
      initials: "F.N",
      name: "F. & C. Ndi",
      role: "Résidents Douala",
      stars: 5,
      text: "Nous avons célébré l'anniversaire de ma femme ici. L'équipe a été aux petits soins, la décoration était magnifique et le restaurant a régalé tous nos invités. Merci De Gaulle Résidence !",
    },
  ];

  return (
    <section id="temoignages" className="bg-[#F5F2EA] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-14"
        >
          <SectionLabel>Témoignages</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-[#1A1A1A] text-4xl md:text-5xl font-semibold">
            Ce que disent <em className="text-[#C9A84C]">nos résidents.</em>
          </h2>
          <p className="font-['DM_Sans'] text-[#4A4A4A] text-base max-w-lg leading-relaxed">
            Des témoignages authentiques de celles et ceux qui ont fait de De
            Gaulle Résidence leur adresse à Douala.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              {...fadeUp(i * 0.15)}
              className="bg-white border border-[#C9A84C]/15 p-7 flex flex-col gap-5 hover:border-[#C9A84C]/35 transition-colors duration-300"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={13} fill={GOLD} stroke="none" />
                ))}
              </div>
              <blockquote className="font-['Playfair_Display'] text-[#1A1A1A] text-base leading-relaxed italic flex-1">
                "{r.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#C9A84C]/15">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: GOLD }}
                >
                  <span className="font-['Montserrat'] text-[10px] font-semibold text-[#111]">
                    {r.initials}
                  </span>
                </div>
                <div>
                  <span className="font-['DM_Sans'] text-[#1A1A1A] text-sm font-medium">
                    {r.name}
                  </span>
                  <p className="font-['DM_Sans'] text-[#999] text-xs">
                    {r.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.3)}
          className="text-center mt-10 font-['DM_Sans'] text-[#4A4A4A] text-sm"
        >
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
          >
            <Star size={14} fill={GOLD} stroke="none" />
            Laisser un avis Google
            <ArrowRight size={13} />
          </a>
        </motion.p>
      </div>
    </section>
  );
}

// ─── LOCALISATION ──────────────────────────────────────────────────────────
function Localisation() {
  return (
    <section id="localisation" className="bg-[#FAFAF7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          {...fadeUp(0)}
          className="md:col-span-3 bg-[#1A1A1A] overflow-hidden"
          style={{ aspectRatio: "4/3" }}
        >
          <iframe
            title="De Gaulle Résidence — Logpom, Douala"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.86!2d9.7679!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d4900000001%3A0x1!2sLogpom%2C+Douala%2C+Cameroun!5e0!3m2!1sfr!2scm!4v1"
            className="w-full h-full border-0 grayscale"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="md:col-span-2 flex flex-col gap-7"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel>Localisation</SectionLabel>
            <GoldDivider className="justify-start" />
            <h2 className="font-['Playfair_Display'] text-[#1A1A1A] text-3xl md:text-4xl font-semibold">
              Nous trouver <em className="text-[#C9A84C]">à Douala.</em>
            </h2>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-['DM_Sans'] text-[#1A1A1A] font-medium text-base">
              De Gaulle Résidence — Logpom, Route en Pavé, avant le Carrefour
              Andem
            </p>
            <p className="font-['DM_Sans'] text-[#4A4A4A] text-sm">
              Douala, Cameroun
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              "Face au Collège Charles de Gaulle",
              "Avant le carrefour Andem",
              "À proximité du Marché de Logpom",
              "Axe principal Logpom — facilement accessible",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                <span className="font-['DM_Sans'] text-[#4A4A4A] text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-[#C9A84C]/20 pt-5">
            {[
              {
                label: "En voiture",
                desc: "Depuis le centre de Douala, prendre la direction Logpom. Chercher l'enseigne De Gaulle Résidence avant le carrefour Andem. Parking sur place.",
              },
              {
                label: "En taxi ou moto-taxi",
                desc: "Demandez 'De Gaulle Résidence, face au Collège Charles de Gaulle, Logpom.' Tout chauffeur du quartier connaît le repère.",
              },
            ].map(({ label, desc }) => (
              <div key={label}>
                <span className="font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C]">
                  {label}
                </span>
                <p className="font-['DM_Sans'] text-[#4A4A4A] text-sm mt-1 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://maps.google.com/?q=Logpom+Douala+Cameroun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase border border-[#C9A84C] text-[#C9A84C] px-6 py-3 w-fit hover:bg-[#C9A84C] hover:text-[#111] transition-colors duration-300"
          >
            <MapPin size={13} />
            Ouvrir dans Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    {
      q: "Quelle est la durée minimale de séjour ?",
      a: "Nous acceptons les séjours à partir d'une nuit. Pour les appartements et bureaux, une durée minimale d'une semaine peut s'appliquer selon les disponibilités. Contactez-nous pour confirmer.",
    },
    {
      q: "Y a-t-il une caution à verser ?",
      a: "Oui, une caution remboursable est demandée à l'entrée. Son montant varie selon le type d'espace réservé. Elle est restituée intégralement à votre départ, sous réserve d'aucune dégradation.",
    },
    {
      q: "Quels modes de paiement acceptez-vous ?",
      a: "Nous acceptons : Orange Money, MTN MoMo, virement bancaire et paiement en espèces (XAF). Un reçu officiel est fourni pour tout paiement.",
    },
    {
      q: "Les animaux de compagnie sont-ils acceptés ?",
      a: "Nous étudions les demandes au cas par cas. Contactez-nous avant votre réservation pour en discuter et connaître les conditions applicables.",
    },
    {
      q: "Le Wi-Fi est-il inclus dans le tarif ?",
      a: "Oui, la connexion Wi-Fi haut débit est incluse dans tous nos tarifs, pour tous les types d'espaces.",
    },
    {
      q: "Puis-je recevoir des visiteurs ?",
      a: "Oui, la visite de proches est possible. Les visiteurs doivent être annoncés à la réception et enregistrés pour des raisons de sécurité.",
    },
    {
      q: "Proposez-vous des contrats de location longue durée ?",
      a: "Absolument. Nous proposons des contrats mensuels et annuels pour les résidents souhaitant s'installer durablement. Contactez-nous pour un devis personnalisé.",
    },
    {
      q: "Que faire en cas de panne ou de problème dans mon espace ?",
      a: "Notre équipe de maintenance est disponible 7j/7. Un simple appel ou message à la réception suffit — nous intervenons dans les meilleurs délais.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#FAFAF7] py-24 md:py-32 border-t border-[#C9A84C]/10"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-14"
        >
          <SectionLabel>FAQ</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-[#1A1A1A] text-4xl md:text-5xl font-semibold">
            Vos questions, <em className="text-[#C9A84C]">nos réponses.</em>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Accordion.Root type="single" collapsible className="flex flex-col">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border-b border-[#C9A84C]/15 last:border-b-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left">
                    <span className="font-['DM_Sans'] text-[#1A1A1A] text-base font-medium pr-4 group-data-[state=open]:text-[#C9A84C] transition-colors duration-300">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-[#C9A84C] shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_200ms_ease] data-[state=closed]:animate-[slideUp_200ms_ease]">
                  <p className="font-['DM_Sans'] text-[#4A4A4A] text-sm leading-relaxed pb-5 pr-8">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 focus:border-[#C9A84C] outline-none text-white placeholder-white/30 font-['DM_Sans'] text-sm px-4 py-3 transition-colors duration-300";

  return (
    <section id="contact" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="text-center flex flex-col items-center gap-4 mb-14"
        >
          <SectionLabel light>Contact & Réservation</SectionLabel>
          <GoldDivider />
          <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl font-semibold">
            Parlons de <em className="text-[#C9A84C]">votre séjour.</em>
          </h2>
          <p className="font-['DM_Sans'] text-white/55 text-base max-w-lg leading-relaxed">
            Notre équipe est disponible 24h/24 pour répondre à toutes vos
            questions et faciliter votre réservation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div {...fadeUp(0.1)}>
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-16 border border-[#C9A84C]/20">
                <CheckCircle size={32} style={{ color: GOLD }} />
                <p className="font-['DM_Sans'] text-white text-base text-center">
                  Merci ! Nous vous répondons dans les 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className={inputClass}
                    placeholder="Prénom & Nom"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    className={inputClass}
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
                <input
                  className={inputClass}
                  placeholder="Téléphone / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <select
                  className={`${inputClass} appearance-none`}
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                >
                  <option value="" disabled className="bg-[#1A1A1A]">
                    Objet
                  </option>
                  <option value="reservation" className="bg-[#1A1A1A]">
                    Réservation
                  </option>
                  <option value="evenement" className="bg-[#1A1A1A]">
                    Événement
                  </option>
                  <option value="information" className="bg-[#1A1A1A]">
                    Information
                  </option>
                  <option value="autre" className="bg-[#1A1A1A]">
                    Autre
                  </option>
                </select>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={5}
                  placeholder="Votre message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="font-['Montserrat'] text-[11px] tracking-[0.25em] uppercase bg-[#C9A84C] text-[#111] px-8 py-4 hover:bg-[#b8973b] transition-colors duration-300 w-fit"
                >
                  Envoyer
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-7">
            {[
              {
                icon: Phone,
                label: "Téléphone / WhatsApp",
                value: "+237 657 575 328",
              },
              {
                icon: Clock,
                label: "Disponibilité",
                value: "Accueil disponible 24h/24 — 7j/7",
              },
              {
                icon: MapPin,
                label: "Adresse",
                value:
                  "Logpom, Route en Pavé avant le Carrefour Andem\nFace au Collège Charles de Gaulle — Douala, Cameroun",
              },
              {
                icon: Mail,
                label: "Email",
                value: "(À compléter par le client)",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                  <Icon size={16} style={{ color: GOLD }} />
                </div>
                <div>
                  <span className="font-['Montserrat'] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C]">
                    {label}
                  </span>
                  <p className="font-['DM_Sans'] text-white/75 text-sm mt-1 whitespace-pre-line leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* Social icons */}
            <div className="flex gap-4 mt-2 pt-4 border-t border-white/10">
              {[
                {
                  label: "WhatsApp",
                  href: "https://wa.me/237657575328",
                  color: "#25D366",
                  icon: MessageCircle,
                },
                { label: "Facebook", href: "#", color: "#1877F2", icon: Users },
                {
                  label: "Instagram",
                  href: "#",
                  color: "#E4405F",
                  icon: Calendar,
                },
              ].map(({ label, href, color, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 transition-all duration-300 hover:border-transparent hover:text-white"
                  style={{ ["--hover-bg" as string]: color }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={dgrLogo}
              alt="De Gaulle Résidence logo"
              className="h-12 w-auto object-contain"
            />
            {/* <div className="flex flex-col leading-none">
              <span className="font-['Playfair_Display'] text-white text-lg font-semibold tracking-widest">
                DE GAULLE
              </span>
              <span className="font-['Montserrat'] text-[#C9A84C] text-[7px] tracking-[0.45em] uppercase mt-0.5">
                RÉSIDENCE
              </span>
            </div> */}
          </div>
          <p className="font-['DM_Sans'] text-[#999] text-sm leading-relaxed">
            Votre adresse de prestige à Douala.
          </p>
          <div className="w-8 h-px bg-[#C9A84C]/50 mt-1" />
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <span className="font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">
            Navigation
          </span>
          <div className="flex flex-col gap-2.5">
            {[
              "Accueil",
              "À Propos",
              "Nos Espaces",
              "Services",
              "Galerie",
              "Événements",
              "Tarifs",
              "Contact",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="font-['DM_Sans'] text-[#999] text-sm hover:text-[#C9A84C] transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <span className="font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">
            Nos Services
          </span>
          <div className="flex flex-col gap-2.5">
            {[
              "Studios Meublés",
              "Appartements",
              "Bureaux",
              "Restaurant-Bar",
              "Conciergerie",
              "Transfert Aéroport",
              "Événements Privés",
            ].map((s) => (
              <span key={s} className="font-['DM_Sans'] text-[#999] text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span className="font-['Montserrat'] text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">
            Contact
          </span>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <Phone
                size={13}
                style={{ color: GOLD }}
                className="mt-0.5 shrink-0"
              />
              <span className="font-['DM_Sans'] text-[#999] text-sm">
                +237 657 575 328 (WhatsApp)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin
                size={13}
                style={{ color: GOLD }}
                className="mt-0.5 shrink-0"
              />
              <span className="font-['DM_Sans'] text-[#999] text-sm">
                Logpom, Douala — Cameroun
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Clock
                size={13}
                style={{ color: GOLD }}
                className="mt-0.5 shrink-0"
              />
              <span className="font-['DM_Sans'] text-[#999] text-sm">
                Disponible 24h/24 — 7j/7
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-['DM_Sans'] text-[#666] text-xs">
            © 2025 De Gaulle Résidence — Tous droits réservés.
          </span>
          <div className="flex gap-5">
            {[
              "Mentions légales",
              "Politique de confidentialité",
              "Conditions générales",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="font-['DM_Sans'] text-[#666] text-xs hover:text-[#C9A84C] transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────
export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#FAFAF7]">
      {/* Scroll progress bar */}
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Espaces />
      <Equipements />
      <Services />
      <Evenements />
      <Tarifs />
      <Galerie />
      <Temoignages />
      <Localisation />
      <FAQ />
      <Contact />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/237657575328"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-xl hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 border border-[#C9A84C]/50 bg-[#0D0D0D]/80 text-[#C9A84C] rounded-full p-3 hover:bg-[#C9A84C] hover:text-[#111] transition-colors duration-300"
          aria-label="Retour en haut"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}

// ─── Scroll progress bar ───────────────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-transparent">
      <div
        className="h-full bg-[#C9A84C] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
