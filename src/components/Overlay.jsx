import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{ opacity: props.opacity }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12 border-3 border-gray-600 opacity-90">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);
  const scroll = useScroll();

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="text-2xl">Hola, I'm Lola Ramírez Castillo</h1>
          <p className="text-gray-500">Bienvenido a mi mundo miniatura ✨</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🎨 How to design adorable dioramas</li>
            <li>🧱 How to 3D print tiny magic</li>
            <li>📸 How to showcase vibes in isometric views</li>
          </ul>
          <p className="animate-bounce mt-6">^^</p>
        </Section>

        <Section right={true} opacity={opacitySecondSection}>
          <h1 className="text-2xl">Here are my specialties 🛠️</h1>
          <p className="text-gray-500">
            PS: Everything is handcrafted with ❤️ (and resin)
          </p>
          <p className="mt-3">
            <b>Mini Worlds 🌍</b>
          </p>
          <ul className="leading-9">
            <li>Isometric Room Design</li>
            <li>Diorama Layouts</li>
            <li>Kawaii Interior Concepts</li>
            <li>Anime & Game-inspired Scenes</li>
          </ul>
          <p className="mt-3">
            <b>Techie Side 🧠</b>
          </p>
          <ul className="leading-9">
            <li>3D Modeling (Blender, Fusion 360)</li>
            <li>Slicer Setup (Cura, PrusaSlicer)</li>
            <li>Post-Processing & Painting</li>
            <li>Custom Resin Printing</li>
          </ul>
          <p className="animate-bounce mt-6">^^</p>
        </Section>

        <Section opacity={opacityLastSection}>
          <h1 className="text-2xl">📬 Let’s build something tiny!</h1>
          <p className="text-gray-500">
            Commissions open — for those who love small things in a big way.
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 Number available at request
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
