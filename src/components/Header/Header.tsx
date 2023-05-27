import { memo } from "react";
import Image from "next/image";
import Container from "@/ui/Container";
import Navigation from "./components/Navigation/Navigation";
import AuthShowcase from "./components/AuthShowcase";
import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.wrap}>
      <Container className={s.inner}>
        <div className={s["logo-wrap"]}>
          <Image src="/images/logo.svg" width={93} height={34} alt="ІТВС" />
        </div>
        <Navigation navLinkSize="base" withDivider />
        <AuthShowcase />
      </Container>
    </header>
  );
};

export default memo(Header);
