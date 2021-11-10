export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext
) => Promise<TResult> | TResult;

export type Query<TResult, TParent, TContext, TArgs> = Record<
  string,
  ResolverFn<TResult, TParent, TContext, TArgs>
>;

export type Mutation<TResult, TParent, TContext, TArgs> = Record<
  string,
  ResolverFn<TResult, TParent, TContext, TArgs>
>;

export type Resolver<TResult, TParent, TContext, TArgs> = {
  Query?: Query<TResult, TParent, TContext, TArgs>;
  Mutation?: Mutation<TResult, TParent, TContext, TArgs>;
};
