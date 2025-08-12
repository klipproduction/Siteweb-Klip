import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const services = [
    "Vidéo promotionnelle",
    "Photographie corporate",
    "Prises de vue aériennes",
    "Événement d'entreprise",
    "Contenu pour réseaux sociaux",
    "Autre",
  ];

  const benefits = [
    "Équipe créative expérimentée",
    "Solutions adaptées à vos besoins",
    "Livraison rapide et professionnelle",
    "Support client personnalisé",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Remplace par tes propres valeurs EmailJS (voir https://dashboard.emailjs.com/)
  const EMAILJS_SERVICE_ID = "service_4qmn0mf";
  const EMAILJS_TEMPLATE_ID = "template_jpigfi7";
  const EMAILJS_USER_ID = "Nm9qJSKU3g5ujr9vn";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID
      )
      .then(() => {
        toast({
          title: "Message envoyé !",
          description:
            "Nous vous contacterons bientôt pour discuter de votre projet.",
        });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Erreur EmailJS:", error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer plus tard.",
          variant: "destructive",
        });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt à <span className="text-primary">démarrer</span> votre projet ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en
            création de contenu visuel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-md border border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envoyez-nous un message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="bg-background/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="bg-background/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">
                  Entreprise
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nom de votre entreprise"
                  className="bg-background/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez-nous votre projet et vos besoins..."
                  required
                  rows={5}
                  className="bg-background/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={sending}
              >
                {sending ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-md border border-border/50 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      info@klipproduction.ca
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">418-333-6044</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Zone de service
                    </p>
                    <p className="text-muted-foreground">
                      Thetford Mines et région
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lévis, Beauce, Estrie
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-primary/10 border border-primary/20 p-8">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Pourquoi choisir KLIP ?
              </h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary text-white p-1 rounded-full">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
