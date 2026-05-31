import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import "./App.css";
import NavBarComponent from "./components/Navbar";
import HeaderComponent from "./components/Header";
import WorkComponent from "./components/Work";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import FooterComponent from "./components/Footer";
import Cross from "./components/Cross";
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function App() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 100]);
  const eyebrowY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 70]);
  const titleY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 38]);
  const leadY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 16]);

  return (
    <div className="sheet">
      <span className="reg reg--tl" aria-hidden="true" />
      <span className="reg reg--tr" aria-hidden="true" />
      <span className="reg reg--bl" aria-hidden="true" />
      <span className="reg reg--br" aria-hidden="true" />

      <div className="page">
        <NavBarComponent />
        <HeaderComponent />

        <WorkComponent />

        <AboutComponent />

        <ContactComponent/>

        <FooterComponent />
      </div>
    </div>
  );
}
