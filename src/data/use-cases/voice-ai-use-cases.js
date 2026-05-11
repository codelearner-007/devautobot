import type { UseCase } from '@/components/services/common/ServicePricing';

export const useCases = [
  { emoji: '🏠', industry: 'Real Estate', title: 'Property Enquiry Forms', description: 'Visitor fills a "Book a Viewing" form → AI calls within 60 seconds, asks about budget, area preference, and move-in timeline, then locks in a viewing appointment.' },
  { emoji: '⚖️', industry: 'Legal / Law Firms', title: 'Case Intake Forms', description: 'Potential client submits a consultation request → AI calls to gather case details, urgency, and contact preference, then routes qualified cases to the right attorney.' },
  { emoji: '🏥', industry: 'Healthcare & Clinics', title: 'Appointment Request Forms', description: "Patient fills out a booking form → AI calls to confirm availability, collect insurance details, and book the appointment directly into the clinic's calendar system." },
  { emoji: '🎓', industry: 'Education & Coaching', title: 'Course Enquiry Forms', description: 'Prospective student submits an enquiry → AI calls to answer programme questions, check eligibility, and enrol them in a free intro session or info call.' },
  { emoji: '🔧', industry: 'Home Services', title: 'Service Quote Request Forms', description: 'Homeowner requests a quote for plumbing, HVAC, or renovation → AI calls to clarify the job scope, schedule a site visit, and confirm the booking.' },
  { emoji: '💼', industry: 'B2B / SaaS', title: 'Demo & Contact Forms', description: 'Prospect fills a "Request a Demo" form → AI calls within minutes, qualifies company size, use case, and urgency, then books a slot with your sales team.' },
];
