import Campaigns from "../components/home/campaigns"
import Explore from "../components/home/explore"
import Featureds from "../components/home/featureds"
import BuyNFTs from "../components/home/BuyNTFs"

export default function Home() {
  return (
    <div className="pt-12">
      <nav className="flex justify-end pr-4 mb-3">
        <button className="btn btn-secondary text-xs">Connect Wallet</button>
      </nav>

      <Explore />

      <Featureds />

      <Campaigns />

      <BuyNFTs />
    </div>
  )
}
