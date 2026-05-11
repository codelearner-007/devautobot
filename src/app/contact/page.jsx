import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Book a free strategy call or send us a message. We\'ll get back to you within 24 hours.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
