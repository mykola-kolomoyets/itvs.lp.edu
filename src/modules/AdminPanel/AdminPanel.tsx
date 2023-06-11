import { memo, useState } from "react";
import {
  Root as TabsRoot,
  List as TabsList,
  Trigger as TabsTrigger,
  Content as TabsContent,
} from "@radix-ui/react-tabs";
import clsx from "clsx";
import type { Session } from "next-auth";
import {
  ADMIN_PANEL_SIDEBAR_ITEMS,
  ADMIN_PANEL_SIDEBAR_LIST,
} from "./constants";
import SidebarOptionItem from "./components/SidebarOptionItem/SidebarOptionItem";
import dynamic from "next/dynamic";
import Loader from "@/ui/Loader/Loader";
import s from "./AdminPanel.module.css";

const UsersList = dynamic(
  () => {
    return import("./components/UsersList");
  },
  {
    loading() {
      return (
        <div className={s["content-loader-wrap"]}>
          <Loader size={100} />
        </div>
      );
    },
  }
);

const ArticlesList = dynamic(
  () => {
    return import("./components/ArticlesList");
  },
  {
    loading() {
      return (
        <div className={s["content-loader-wrap"]}>
          <Loader size={100} />
        </div>
      );
    },
  }
);

const AdminPanel: React.FC<{ session: Session }> = () => {
  const [activeTab, setActiveTab] = useState(ADMIN_PANEL_SIDEBAR_LIST[0].id);

  return (
    <div className={s.wrap}>
      <TabsRoot
        className={s["tabs-wrap"]}
        defaultValue={activeTab}
        onValueChange={setActiveTab}
      >
        <aside className={s.sidebar}>
          <TabsList
            className={s["tabs-list"]}
            aria-label="Select option to control"
          >
            {ADMIN_PANEL_SIDEBAR_LIST.map((item) => {
              return (
                <TabsTrigger
                  className={clsx(s["tabs-trigger"], "focus-primary")}
                  key={item.id}
                  value={item.id}
                >
                  <SidebarOptionItem active={activeTab === item.id} {...item} />
                </TabsTrigger>
              );
            })}
          </TabsList>
        </aside>
        <section className={s.content}>
          <TabsContent
            tabIndex={-1}
            className={s["tabs-content"]}
            value={ADMIN_PANEL_SIDEBAR_ITEMS.USERS}
          >
            <UsersList />
          </TabsContent>
          <TabsContent
            tabIndex={-1}
            className={s["tabs-content"]}
            value={ADMIN_PANEL_SIDEBAR_ITEMS.ARTICLES}
          >
            <ArticlesList />
          </TabsContent>
        </section>
      </TabsRoot>
    </div>
  );
};

export default memo(AdminPanel);
