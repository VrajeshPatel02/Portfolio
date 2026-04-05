import React from 'react'
import Heading from '@/components/ui/Heading'
import { Feature197, FeatureItem } from "@/components/accordion-feature-section"
import TechStack from "@/components/TechStack";

const demoData: {features: FeatureItem[]} = {
  features: [
    {
      id: 1,
      title: "Development",
      image: "/speciality/development.jpg",
      description:
        "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
      icon: 'CodeXml'
    },
    {
      id: 2,
      title: "UI/UX Design",
      image: "/speciality/uiux.jpg",
      description:
        "Designing user-centric, modern interfaces that shapes how the audience interacts with the product.",
      icon: 'PenTool'
    },
    {
      id: 3,
      title: "Branding",
      image: "/speciality/branding.jpg",
      description:
        "Building brand identities working on logo, typography, iconography, colour palette, visual language, and brand personality.",
      icon: 'SwatchBook'
    }
  ],
};

function Feature197Demo() {
  return <Feature197 {...demoData} />;
}

const Speciality = () => {
  return (
    <>
    <section className='my-24'>
    <Heading badge='speciality' heading='Areas of Expertise' />
    <Feature197Demo />
    <TechStack />
    </section>
    </>
  )
}

export default Speciality