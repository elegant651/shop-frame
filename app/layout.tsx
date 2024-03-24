'use client'
import { DynamicContextProvider, DynamicWidget, } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { EthersExtension } from '@dynamic-labs/ethers-v6';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID!,
          walletConnectors: [EthereumWalletConnectors],
          walletConnectorExtensions: [EthersExtension],
        }}>
        <body>
          {children}
          <DynamicWidget />
        </body>
      </DynamicContextProvider>
    </html>
  );
}
