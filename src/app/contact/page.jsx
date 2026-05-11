import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: "Let's build something great together. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
