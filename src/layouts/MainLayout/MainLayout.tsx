import { memo } from "react";
import type { MainLayoutProps } from "./types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import s from "./MainLayout.module.css";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className={s.wrap}>
      <Header />
      <div className={s.inner}>{children}</div>
      <Footer />
    </main>
  );
};

export default memo(MainLayout);
