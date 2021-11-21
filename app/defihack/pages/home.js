import Campaigns from "../components/home/campaigns"
import Explore from "../components/home/explore"
import Featureds from "../components/home/featureds"
import BuyNFTs from "../components/home/BuyNTFs"

import { useContractKit } from '@celo-tools/use-contractkit';
import { ContractKitProvider } from '@celo-tools/use-contractkit';
import '@celo-tools/use-contractkit/lib/styles.css';
import { useEffect, useState } from 'react'

function Home() {
    const { address, connect } = useContractKit()
    const [connectButtonText, setConnectButtonText] = useState(null)

    useEffect(() => {
        setConnectButtonText(address ? address : 'Connect Wallet');
    }, [address]);
  return (
    <div className="pt-12">
      <nav className="flex justify-end pr-4 mb-3">
        <button className="btn btn-secondary text-xs" onClick={connectWallet}>{connectButtonText}</button>
      </nav>

      <Explore />

      <Featureds />

      <Campaigns />

      <BuyNFTs />
    </div>
  )

    async function connectWallet() {
        try {
            let connector = await connect()
            setConnectButtonText(connector.account)
        } catch (error) {
            console.log(error)
        }
    }
}




function WrappedApp() {
    return (
        <ContractKitProvider
            dapp={{
                name: "beNFT",
                description: "beNFT, marketing NFTs for good causes!",
                url: "",
            }}
        >
            <Home />
        </ContractKitProvider>
    );
}
export default WrappedApp;