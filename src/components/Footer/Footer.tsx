import { memo } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { FooterProps } from "./types";
import { APP_VERSION } from "@/constants";
import Container from "@/ui/Container";
import Typography from "@/ui/Typography";
import Navigation from "@/components/Header/components/Navigation";
import s from "./Footer.module.css";

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(s.wrap, className)}>
      <Container className={s.inner}>
        <Image
          className={s.logo}
          src="/images/logo.svg"
          width={93}
          height={34}
          alt="ІТВС"
        />
        <Navigation
          className={s.list}
          itemClassName={s["nav-item"]}
          navLinkSize="lg"
        />
        <div>
          <Typography className="text-center text-grey-300" variant="sm">
            вул. С.Бандери, 28а, Львів-13, 79013.
          </Typography>
          <Typography className="text-center text-grey-300" variant="sm">
            Tел.{" "}
            <a className="focus-primary rounded-[4px]" href="tel:0322582779">
              (032) 258-27-79
            </a>
          </Typography>
          <Typography className="text-center text-grey-300" variant="sm">
            e-mail:{" "}
            <a
              className="focus-primary rounded-[4px]"
              href="mailto:itvs.dept@lpnu.ua"
            >
              itvs.dept@lpnu.ua
            </a>
          </Typography>
        </div>

        <Typography className="text-center mt-32 text-grey-100" variant="sm">
          version: {APP_VERSION}
        </Typography>
      </Container>
    </footer>
  );
};

export default memo(Footer);
