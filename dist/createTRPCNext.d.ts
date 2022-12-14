import { CreateReactUtilsProxy, DecoratedProcedureRecord } from '@trpc/react-query/shared';
import { AnyRouter } from '@trpc/server';
import { NextPageContext } from 'next/types';
import { WithTRPCNoSSROptions, WithTRPCSSROptions } from './withTRPC';
export declare function createTRPCNext<TRouter extends AnyRouter, TSSRContext extends NextPageContext = NextPageContext, TFlags = null>(opts: WithTRPCNoSSROptions<TRouter> | WithTRPCSSROptions<TRouter>): {
    useContext(): CreateReactUtilsProxy<TRouter, TSSRContext>;
    withTRPC: (AppOrPage: import("next/types").NextComponentType<any, any, any>) => import("next/types").NextComponentType<NextPageContext, {}, {}>;
} & DecoratedProcedureRecord<TRouter["_def"]["record"], TFlags, "">;
//# sourceMappingURL=createTRPCNext.d.ts.map