import axios from 'axios'
import {ethers} from 'ethers'

let Web3 = require("web3")
let ContractKit = require("@celo/contractkit")

let marketData = require("../../../backend/contracts/NFTMarket.sol/NFTMarket.json")
let nftData = require("../../../backend/contracts/NFT.sol/NFT.json")

let kit
let marketContract
let nftContract

import {
    nftaddress, nftmarketaddress
} from '../../../backend/config'


export const connectCeloWallet = async function () {
    if (window.ethereum) {
        try {
            // Enable the extension to access the page if it isn't already enabled
            await window.ethereum.enable()

            // Get the ethereum provider injected by metamask
            const web3 = new Web3(window.ethereum)
            kit = ContractKit.newKitFromWeb3(web3)

            // Get the users accounts
            const accounts = await kit.web3.eth.getAccounts()
            kit.defaultAccount = accounts[0]

            // Init the contracts
            marketContract = new kit.web3.eth.Contract(marketData.abi, nftmarketaddress)

            nftContract = new kit.web3.eth.Contract(nftData.abi, nftaddress)
        } catch (error) {
            console.log(`⚠️ ${error}.`)
        }
    } else {
        console.log("⚠️ Please install Metamask.")
    }
}

export const loadNFTs = async function () {
    let _ = await connectCeloWallet()

    let networkType = await kit.web3.currentProvider.connection.web3.eth.net.getNetworkType()

    // TODO this is a workaround
    if (networkType.toString() !== 'private')
        return undefined


    let data = await marketContract.methods.fetchMarketItems().call()
    return await Promise.all(data.map(async i => {
        const tokenUri = await nftContract.methods.tokenURI(i.tokenId).call()
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
            price,
            tokenId: i.tokenId,
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
        }
        return item
    }))
}

export const createSale = async function (url, inputPrice) {
    /* Connect wallet, if needed, and create contracts */
    let _ = await  connectCeloWallet()

    /* next, create the item */
    let nftTx = await nftContract.methods.createToken(url, nftmarketaddress).send({
        from: kit.defaultAccount
    })
    console.log(nftTx)
    let tokenId = nftTx.events.Transfer.returnValues.tokenId

    const price = ethers.utils.parseUnits(inputPrice, 'ether')

    /* then list the item for sale on the marketplace */
    let listingPrice = await marketContract.methods.getListingPrice().call()
    listingPrice = listingPrice.toString()

    let listMktTx = await marketContract.methods.createMarketItem(nftaddress, tokenId, price).send({
        from: kit.defaultAccount,
        value: listingPrice
    })
    console.log(listMktTx)
}
