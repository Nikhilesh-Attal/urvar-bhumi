"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Image from "next/image";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Mail, Phone } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant="secondary" className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  
  const bevisioneersLogo = PlaceHolderImages.find(img => img.id === 'logo-bevisioneers-white');

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Error",
          description: "Please check the form for errors.",
          variant: "destructive"
        })
      }
    }
  }, [state, toast]);

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s Connect
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Have a question or want to collaborate? We would love to hear from you.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:ankit2002121@gmail.com" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent"/>
                <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">ankit2002121@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 pt-4">
                  <a
                   href="https://www.linkedin.com/in/ankitkumar752/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>

                  <a
                    href="mailto:ankit2002121@gmail.com"
                    aria-label="Email"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    <Mail className="w-6 h-6" />
                  </a>

                  <a
                   href="tel:+917520140201"
                    aria-label="Phone"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8">
              {bevisioneersLogo && (
                <Image src='/beVisioneers_logo.png' alt="BeVisioneers Logo" width={300} height={80} data-ai-hint={bevisioneersLogo.imageHint} />
              )}
            </div>
          </div>
          <form action={dispatch} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-primary-foreground/80">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent" />
              {state.errors?.name && <p className="text-sm text-accent mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-primary-foreground/80">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"/>
               {state.errors?.email && <p className="text-sm text-accent mt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-primary-foreground/80">Message</Label>
              <Textarea id="message" name="message" placeholder="How can we work together?" required rows={5} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent"/>
               {state.errors?.message && <p className="text-sm text-accent mt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>Urvar Bhumi © {new Date().getFullYear()} | A BeVisioneers Fellowship Project</p>
        </div>
      </div>
    </footer>
  );
}
