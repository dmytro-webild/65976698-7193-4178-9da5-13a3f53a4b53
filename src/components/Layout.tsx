import { Outlet } from "react-router-dom";
import NavbarCrossMark from "@/components/navbars/NavbarCrossMark";
import FooterGlowWordmark from "@/components/sections/footer/FooterGlowWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="glass" data-pattern="grain">
      <header data-webild-section="Header">
        <NavbarCrossMark
          brand="Le Marché des Fleurs"
          navItems={[
            {
              name: "Accueil",
              href: "#home"
            },
            {
              name: "Nos Bouquets",
              href: "#shop"
            },
            {
              name: "Événements",
              href: "#services"
            },
            {
              name: "Avis Clients",
              href: "#testimonial"
            },
            {
              name: "Contact",
              href: "#contact"
            }
          ]}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="glass" data-pattern="grain">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterGlowWordmark
          brand="Le Marché des Fleurs"
          note="Fleuriste artisanal au cœur de Beauvais. Bouquets uniques, compositions florales sur mesure pour événements et livraison express à domicile."
          columns={[
            {
              title: "Boutique",
              links: [
                {
                  text: "Nos bouquets",
                  href: "#shop"
                },
                {
                  text: "Mariage & Événements",
                  href: "#services"
                },
                {
                  text: "Avis clients",
                  href: "#testimonial"
                }
              ]
            },
            {
              title: "Informations",
              links: [
                {
                  text: "Foire aux questions",
                  href: "#faq"
                },
                {
                  text: "Nous contacter",
                  href: "#contact"
                },
                {
                  text: "Mentions légales",
                  href: "#"
                }
              ]
            },
            {
              title: "Suivez-nous",
              links: [
                {
                  text: "Instagram",
                  href: "#"
                },
                {
                  text: "Facebook",
                  href: "#"
                }
              ]
            }
          ]}
          copyright="© 2026 Le Marché des Fleurs de Beauvais. Tous droits réservés."
          wordmark={[
            "Marché des Fleurs",
            "Beauvais"
          ]}
        />
      </footer>
    </div>
  );
}
