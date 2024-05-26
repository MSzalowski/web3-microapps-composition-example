import { Routes as BaseRoutes, Route } from "react-router-dom";
// wallet connect pillar does not have types
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import WalletConnectPillar from "@pillars/wallet-connect-pillar";

/**
 * Renders the routes for the application.
 * @returns The JSX element representing the routes.
 */
export const Routes = () => {
  return (
    <BaseRoutes>
      <Route path="/*" element={<WalletConnectPillar />} />
    </BaseRoutes>
  );
};
