export type OptionalPayload<P> = undefined extends P ? {payload?: P} : {payload: P};

export type ActionBase<T, P = undefined> = {
    type: T;
} & OptionalPayload<P>;
