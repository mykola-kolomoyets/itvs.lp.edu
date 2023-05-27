import { memo } from "react";
import clsx from "clsx";
import type { FooterProps } from "./types";
import { APP_VERSION } from "@/constants";
import { DEPARTMENT_EMAIL, DEPARTMENT_PHONE } from "./constants";
import { clearStringFrom } from "@/utils/clearStringFrom";
import Navigation from "@/components/Header/components/Navigation";
import Container from "@/ui/Container";
import Typography from "@/ui/Typography";
import Logo from "@/ui/Logo";
import s from "./Footer.module.css";

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(s.wrap, className)}>
      <Container className={s.inner}>
        <Logo />
        <Navigation
          className={s.list}
          itemClassName={s["nav-item"]}
          navLinkSize="lg"
        />
        <div>
          <Typography className={s["contact-row"]} variant="sm">
            вул. С.Бандери, 28а, Львів-13, 79013.
          </Typography>
          <Typography className={s["contact-row"]} variant="sm">
            Tел.{" "}
            <a
              className={clsx(s["contact-link"], "focus-primary")}
              href={`tel:${clearStringFrom(DEPARTMENT_PHONE, [" ", "(", ")"])}`}
            >
              {DEPARTMENT_PHONE}
            </a>
          </Typography>
          <Typography className={s["contact-row"]} variant="sm">
            e-mail:{" "}
            <a
              className={clsx(s["contact-link"], "focus-primary")}
              href={`mailto:${DEPARTMENT_EMAIL}`}
            >
              {DEPARTMENT_EMAIL}
            </a>
          </Typography>
        </div>

        {/* TODO: REMOVE */}
        <Typography className={clsx(s["contact-row"], s.version)} variant="sm">
          version: {APP_VERSION}
        </Typography>
      </Container>
    </footer>
  );
};

export default memo(Footer);
