import { TodoProvider } from "../store";
import { FC } from "react";

function combineProviders(...providers: FC[]) {
  return ({ children }: any) =>
    providers.reduce(
      // @ts-expect-error
      (prev, CurrentProvider) => <CurrentProvider>{prev}</CurrentProvider>,
      children
    );
}

const CombinedProviders = combineProviders(TodoProvider);

function AllProviders({ children }: any) {
  return <CombinedProviders>{children}</CombinedProviders>;
}

export { AllProviders };
