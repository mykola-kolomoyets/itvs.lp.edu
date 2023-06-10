import type { GetServerSideProps, NextPage } from "next";
import AdminPanel from "@/modules/AdminPanel";
import { getServerSession, type Session } from "next-auth";
import { authOptions } from "@/server/auth";
import { USER_ROLES } from "@/constants";

export const AdminPanelPage: NextPage<{ session: Session }> = ({ session }) => {
  return <AdminPanel session={session} />;
};

export default AdminPanelPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || session.user.role !== USER_ROLES.ADMIN) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
