import HeroGlassCube from "@/components/sections/hero/HeroGlassCube";
import GalleryGlassRail from "@/components/sections/gallery/GalleryGlassRail";
import ServicesGlassFacets from "@/components/sections/features/ServicesGlassFacets";
import PricingGlassColumns from "@/components/sections/pricing/PricingGlassColumns";
import TestimonialGlassQuotes from "@/components/sections/testimonial/TestimonialGlassQuotes";
import FaqCrossAccordion from "@/components/sections/faq/FaqCrossAccordion";
import ContactGlassForm from "@/components/sections/contact/ContactGlassForm";
import FacetGlowBackdrop from "@/components/kit/FacetGlowBackdrop";
import LoaderGlowRise from "@/components/loaders/LoaderGlowRise";

export default function HomePage() {
  return (
    <>
      <FacetGlowBackdrop

      />

      <LoaderGlowRise
        wordmark={[
          "Le Marché des Fleurs"
        ]}
        introDelay={1.3}
      />

      <div id="home" data-webild-section="HeroGlassCube" data-webild-section-id="HeroGlassCube-1" data-section="home">
        <HeroGlassCube
          titleLines={[
            {
              text: "L'art d'offrir"
            },
            {
              text: "des fleurs"
            },
            {
              text: "avec passion"
            }
          ]}
          primaryButton={{
            text: "Nos bouquets",
            href: "#shop"
          }}
          tag="Artisan fleuriste"
          statement="Créations florales uniques à Beauvais."
          label="Boutique Beauvais"
          description="Des bouquets frais et compositions sur mesure livrés le jour même."
          shape="cube"
          introDelay={1.3}
        />
      </div>

      <div id="shop" data-webild-section="GalleryGlassRail" data-webild-section-id="GalleryGlassRail-1" data-section="shop">
        <GalleryGlassRail
          tag="Atelier floral"
          title="Nos bouquets et assemblages"
          description="Choisissez parmi nos collections de saison ou commandez votre création sur mesure."
          items={[
            {
              title: "Bouquet Romantique",
              meta: "Roses & feuillages",
              imageSrc: "https://img.b2bpic.net/free-photo/look-from-rich-wedding-bouquet_8353-391.jpg",
              imageAlt: "Look from above at rich wedding bouquet",
              href: "#contact"
            },
            {
              title: "Bouquet de Saison",
              meta: "Fleurs fraîches",
              imageSrc: "https://img.b2bpic.net/free-photo/bouquet-orange-white-gerberas-vase-kitchen-interior_169016-49808.jpg",
              imageAlt: "A bouquet of orange and white gerberas in a vase in a kitchen interior",
              href: "#contact"
            },
            {
              title: "Fleurs Séchées",
              meta: "Élégance durable",
              imageSrc: "https://img.b2bpic.net/free-photo/floral-decoration-pink-wooden-surface_23-2147600604.jpg",
              imageAlt: "Floral decoration on pink wooden surface",
              href: "#contact"
            },
            {
              title: "Plantes d'Intérieur",
              meta: "Sélection verte",
              imageSrc: "https://img.b2bpic.net/free-photo/elegant-plants-decoration-vase_23-2149334644.jpg",
              imageAlt: "Elegant plants decoration vase",
              href: "#contact"
            },
            {
              title: "Bouquet Champêtre",
              meta: "Esprit sauvage",
              imageSrc: "https://img.b2bpic.net/free-photo/purple-flowers-tied-white-wooden-surface_23-2147600581.jpg",
              imageAlt: "Purple flowers tied on white wooden surface",
              href: "#contact"
            },
            {
              title: "Arrangement Floral",
              meta: "Composition sur vase",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-metallic-flower-vase_23-2151113093.jpg",
              imageAlt: "Close up on metallic flower vase",
              href: "#contact"
            },
            {
              title: "Bouquet sur Mesure",
              meta: "Création sur mesure",
              imageSrc: "https://img.b2bpic.net/free-photo/gardening-concept-with-female-hands_23-2148127942.jpg",
              imageAlt: "Gardening concept with female hands",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="ServicesGlassFacets" data-webild-section-id="ServicesGlassFacets-1" data-section="services">
        <ServicesGlassFacets
          tag="Sur mesure"
          title="Fleurs pour vos événements"
          description="Des compositions sur mesure pour célébrer vos mariages, honorer vos proches et fleurir vos espaces professionnels."
          items={[
            {
              title: "Objects",
              description: "Vases, bowls and weights in small runs of fifty.",
              imageSrc: "https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&w=900",
              imageAlt: "A ceramic piece on a counter",
              href: "#"
            },
            {
              title: "Lighting",
              description: "Cast glass shades that colour a room from inside.",
              imageSrc: "https://images.pexels.com/photos/9218551/pexels-photo-9218551.jpeg?auto=compress&w=900",
              imageAlt: "A minimal desk by a big window",
              href: "#"
            },
            {
              title: "Commissions",
              description: "One piece, made for one space, from the first sketch.",
              imageSrc: "https://images.pexels.com/photos/4968683/pexels-photo-4968683.jpeg?auto=compress&w=900",
              imageAlt: "Colour swatches on marble",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingGlassColumns" data-webild-section-id="PricingGlassColumns-1" data-section="pricing">
        <PricingGlassColumns
          tag="Abonnements"
          title="Des formules adaptées à vos envies"
          description="Profitez de fleurs fraîches livrées chez vous ou offrez un abonnement floral personnalisé à Beauvais."
          items={[
            {
              title: "Bouquet du Mois",
              price: "35 €",
              period: "par livraison",
              description: "Un bouquet de fleurs fraîches de saison composé selon l'inspiration du fleuriste.",
              features: [
                "Fleurs fraîches de saison",
                "Livraison à Beauvais",
                "Sans engagement"
              ],
              button: {
                text: "Commander",
                href: "#shop"
              }
            },
            {
              title: "Abonnement Serein",
              price: "65 €",
              period: "par mois",
              description: "Deux créations florales uniques livrées chaque mois directement chez vous ou au bureau.",
              features: [
                "2 bouquets par mois",
                "Vase offert le premier mois",
                "Livraison express incluse",
                "Résiliable à tout moment"
              ],
              button: {
                text: "Souscrire",
                href: "#contact"
              }
            },
            {
              title: "Décor Sur Mesure",
              price: "Sur devis",
              period: "par événement",
              description: "Compositions d'exception pour mariages, réceptions professionnelles et grands événements.",
              features: [
                "Rendez-vous sur mesure",
                "Scénographie florale complète",
                "Installation sur place"
              ],
              button: {
                text: "Demander un devis",
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialGlassQuotes" data-webild-section-id="TestimonialGlassQuotes-1" data-section="testimonial">
        <TestimonialGlassQuotes
          tag="Témoignages"
          title="Ce que nos clients racontent"
          items={[
            {
              quote: "La décoration florale de notre mariage à Beauvais était somptueuse. Les bouquets de pivoines et de roses correspondaient parfaitement à nos souhaits.",
              name: "Claire Roux",
              role: "Mariée à Beauvais",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-casual-peach-sweater-isolated-green-olive-wall-hold-orange-white-flower-box-composition-cotton-flowers-gypsophila-wheat-lagurus-gift-happy-surprised_343596-5215.jpg",
              imageAlt: "Young woman in casual peach sweater  isolated on green olive wall  hold  orange white flower box composition of cotton flowers, gypsophila, wheat and lagurus for a gift happy surprised"
            },
            {
              quote: "Fleurs d'une fraîcheur irréprochable et conseils très avisés. La livraison express le jour même m'a grandement rendu service pour un anniversaire.",
              name: "Karim Laurent",
              role: "Client régulier",
              imageSrc: "https://img.b2bpic.net/free-photo/handsome-man-with-roses_23-2147737323.jpg",
              imageAlt: "Handsome man with roses"
            },
            {
              quote: "Un bouquet champêtre sur mesure composé en dix minutes dans la boutique de la Rue de Calais. L'accueil y est chaleureux et attentionné.",
              name: "Pauline Blanc",
              role: "Habitante de Beauvais",
              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-smiling-holding-cauliflower_1303-24892.jpg",
              imageAlt: "Young woman smiling and holding cauliflower"
            },
            {
              quote: "L'abonnement floral pour nos locaux professionnels apporte une touche d'élégance chaque semaine. Un service régulier et des créations de saison.",
              name: "Thomas Mercier",
              role: "Gérant d'entreprise",
              imageSrc: "https://img.b2bpic.net/free-photo/man-wearing-t-shirt-gesturing_23-2149393674.jpg",
              imageAlt: "Man wearing t shirt gesturing"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqCrossAccordion" data-webild-section-id="FaqCrossAccordion-1" data-section="faq">
        <FaqCrossAccordion
          tag="Infos pratiques"
          title="Vos questions sur la boutique"
          description="Tout savoir avant de passer commande de fleurs ou de nous rendre visite à Beauvais."
          items={[
            {
              title: "Quelles sont vos zones de livraison ?",
              description: "Nous assurons la livraison express le jour même à Beauvais ainsi que dans toutes les communes environnantes pour vos bouquets et compositions."
            },
            {
              title: "Proposez-vous des abonnements floraux ?",
              description: "Oui, nous proposons des formules d'abonnement hebdomadaires ou mensuelles adaptées aux besoins des particuliers comme des entreprises et bureaux."
            },
            {
              title: "Puis-je commander un bouquet sur mesure ?",
              description: "Absolument. Contactez-nous par téléphone au 03 44 48 14 96 ou passez au 15 Rue de Calais pour composer un bouquet unique selon votre budget."
            },
            {
              title: "Comment conserver un bouquet plus longtemps ?",
              description: "Recoupez régulièrement les tiges en biseau sur un centimètre, enlevez le feuillage bas et nettoyez le vase en renouvelant l'eau fraîche tous les deux jours."
            },
            {
              title: "Quels sont les horaires de la fleuristerie ?",
              description: "La boutique vous accueille du mardi au samedi de 9h00 à 19h30 et le dimanche matin de 9h00 à 13h00 au centre-ville de Beauvais."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactGlassForm" data-webild-section-id="ContactGlassForm-1" data-section="contact">
        <ContactGlassForm
          title="Commandez vos fleurs sur mesure"
          fields={[
            {
              name: "name",
              label: "Votre nom",
              placeholder: "Ex: Sarah Moreau"
            },
            {
              name: "phone",
              label: "Téléphone",
              type: "tel",
              placeholder: "03 44 48 14 96"
            },
            {
              name: "email",
              label: "Adresse email",
              type: "email",
              placeholder: "contact@marchedesfleurs-beauvais.fr"
            },
            {
              name: "message",
              label: "Votre demande",
              type: "textarea",
              placeholder: "Type de bouquet, date, livraison..."
            }
          ]}
          buttonText="Envoyer le message"
          successText="Merci. Votre message a bien été transmis à notre boutique."
          imageSrc="https://img.b2bpic.net/free-photo/female-florist-making-beautiful-floral-arrangement_23-2148846504.jpg"
          imageAlt="Female florist making a beautiful floral arrangement"
        />
      </div>
    </>
  );
}
