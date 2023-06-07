import { memo } from "react";
import type { CollectiveListProps } from "./types";
import Container from "@/ui/Container/Container";
import Typography from "@/ui/Typography/Typography";
import CollectivePerson from "@/components/CollectivePerson/CollectivePerson";
import s from "./CollectiveList.module.css";

const CollectiveList: React.FC<CollectiveListProps> = ({ collective }) => {
  if (!collective) {
    return null;
  }

  return (
    <Container className={s.wrap}>
      <div className={s.top}>
        <Typography className={s.title} variant="3xl" component="h1">
          Колектив
        </Typography>
      </div>
      <section className={s.content}>
        {collective.map((person) => {
          return <CollectivePerson key={person.id} {...person} />;
        })}
      </section>
    </Container>
  );
};

export default memo(CollectiveList);
