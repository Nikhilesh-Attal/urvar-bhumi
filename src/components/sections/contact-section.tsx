"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Instagram, Mail } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else if (state.errors && Object.keys(state.errors).length > 0) {
        // You could toast each error, but it might be overwhelming.
        // The UI will show errors inline.
        toast({
          title: "Error",
          description: "Please check the form for errors.",
          variant: "destructive"
        })
      }
    }
  }, [state, toast]);

  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let’s Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or want to collaborate? Reach out.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:ankitk2002121@gmail.com" className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary"/>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">ankitk2002121@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 pt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Button>
              </div>
            </div>
          </div>
          <form action={dispatch} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
               {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="How can we work together?" required rows={5}/>
               {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Urvar Bhumi © {new Date().getFullYear()} | A BeVisioneers Fellowship Project</p>
          <p className="mt-1">Made with purpose in Bihar, India.</p>
        </div>
      </div>
    </footer>
  );
}
