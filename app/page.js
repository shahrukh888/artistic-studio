import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistIntro from "@/components/ArtistIntro";
import FeaturedArtwork from "@/components/FeaturedArtwork";
import Collections from "@/components/Collections";
import ImmersiveGallery from "@/components/ImmersiveGallery";
import DigitalWorks from "@/components/DigitalWorks";
import ArtInSpace from "@/components/ArtInSpace";
import CreativeProcess from "@/components/CreativeProcess";
import AvailableWorks from "@/components/AvailableWorks";
import CustomCommissions from "@/components/CustomCommissions";
import AboutArtist from "@/components/AboutArtist";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <ArtistIntro />

      <FeaturedArtwork />

      <Collections />

      <ImmersiveGallery />

      <DigitalWorks />

      <ArtInSpace />

      <CreativeProcess />

      <AvailableWorks />

      <CustomCommissions />

      <AboutArtist />

      <ContactCTA />

      <Footer />
    </main>
  );
}