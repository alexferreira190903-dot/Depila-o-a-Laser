import { LucideIcon } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  contraindications: string[];
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}