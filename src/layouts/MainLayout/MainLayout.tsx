import { memo } from "react";
import type { MainLayoutProps } from "./types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import s from "./MainLayout.module.css";

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  headerClasses,
  footerClasses,
}) => {
  return (
    <main className={s.wrap}>
      <Header className={headerClasses} />
      <div className={s.inner}>{children}</div>
      <Footer className={footerClasses} />
    </main>
  );
};

export default memo(MainLayout);
