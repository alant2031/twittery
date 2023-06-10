import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "./root";
import SuperJSON from "superjson";
import { createInnerTRPCContext } from "./trpc";

export const ssgHelper = () => {
  return createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: createInnerTRPCContext({ session: null }),
  });
};
