import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechBentoSection } from './components/TechBentoSection';
import { ServicesSection } from './components/ServicesSection';
import { SmileCalculator } from './components/SmileCalculator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { DoctorsSection } from './components/DoctorsSection';
import { PricingSection } from './components/PricingSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { CookieBanner } from './components/CookieBanner';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Pre-selected parameters for booking modal
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>();
  const [calculatorSummary, setCalculatorSummary] = useState<string | undefined>();

  const handleOpenBooking = () => {
    setSelectedServiceId(undefined);
    setSelectedDoctorId(undefined);
    setCalculatorSummary(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDoctorId(undefined);
    setCalculatorSummary(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectDoctor = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    setSelectedServiceId(undefined);
    setCalculatorSummary(undefined);
    setBookingModalOpen(true);
  };

  const handleCalculatorEstimate = (estimate: { total: number; summary: string }) => {
    setCalculatorSummary(`Расчет в калькуляторе на сумму ~${estimate.total} BYN: ${estimate.summary}`);
    setBookingModalOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      {/* Header Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenCalculator={scrollToCalculator}
        />

        {/* 2. Advanced Tech Bento Section */}
        <TechBentoSection onOpenBooking={handleOpenBooking} />

        {/* 3. Comprehensive Dental Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Interactive Smile Cost Calculator in BYN */}
        <SmileCalculator onProceedWithEstimate={handleCalculatorEstimate} />

        {/* 5. Before & After Cases with Interactive Drag Slider */}
        <BeforeAfterSlider />

        {/* 6. Doctors Team Showcase */}
        <DoctorsSection onSelectDoctor={handleSelectDoctor} />

        {/* 7. Transparent BYN Pricing List */}
        <PricingSection onSelectService={handleSelectService} />

        {/* 8. Clinic Location, Parking, FAQ & Working Hours */}
        <ContactsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Online Booking Wizard Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialDoctorId={selectedDoctorId}
        calculatorSummary={calculatorSummary}
      />

      {/* Law of Belarus № 99-З Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenPrivacy={() => setPrivacyModalOpen(true)} />
    </div>
  );
}

export default App;
