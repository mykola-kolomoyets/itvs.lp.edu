import { memo } from "react";
import Container from "@/ui/Container";
import Logo from "@/ui/Logo";
import Navigation from "./components/Navigation/Navigation";
import AuthShowcase from "./components/AuthShowcase";
import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.wrap}>
      <Container className={s.inner}>
        <Logo />
        <Navigation navLinkSize="base" withDivider />
        <AuthShowcase />
      </Container>
    </header>
  );
};

export default memo(Header);
