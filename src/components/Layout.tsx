import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TargetCursor from "./TargetCursor";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <TargetCursor
      spinDuration={1.2}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.1}
    />
    <Navbar />
    <main className="min-h-screen pt-20">{children}</main>
    <Footer />
  </>
);

export default Layout;
