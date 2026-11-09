export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  expYears: number;
  category: string;
  education: string;
  certifications: string[];
  photoUrl: string;
  rating: number;
  availableDays: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'diagnostic' | 'aesthetics' | 'implantation' | 'orthodontics' | 'therapy';
  duration: string;
  priceBYN: number;
  priceOldBYN?: number;
  description: string;
  includes: string[];
  popular?: boolean;
}

export interface TechSpec {
  id: string;
  name: string;
  manufacturer: string;
  country: string;
  flag: string;
  tagline: string;
  description: string;
  benefits: string[];
  photoUrl: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  doctorName: string;
  duration: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
  technologies: string[];
}

export interface AppointmentFormData {
  serviceId: string;
  doctorId: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  comment: string;
  agreeToPolicy: boolean;
}
