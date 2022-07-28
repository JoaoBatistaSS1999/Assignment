import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import NFTCard from "../../components/UI/nftCard/index";
import { useMoralisWeb3Api } from "react-moralis";
import { useContextComponent } from "../../context/appContext";

interface INFTInfo {
  image: string;
  amount?: string;
  name: string;
  symbol: string;
}

const NFTDisplay: React.FC = () => {
  const { setIsLoading, address } = useContextComponent();
  const Web3Api = useMoralisWeb3Api();

  const [nftsData, setNftsData] = useState<INFTInfo[]>([]);

  const fetchNFTs = async () => {
    const options = {
      address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
    };

    const nftPlaceHolder = "https://api.clayfriends.io/friend/image/4009.png";

    const userEthNFTs = await Web3Api.account.getNFTs(options);
    console.log();

    // const promises = userEthNFTs.result!.map(async (item) => {
    //   const test = await fetch(item.token_uri!)
    //     .then((res) => res.json())
    //     .then((data) => data.image);
    //   return console.log(test);
    // });

    // const nftsData = await Promise.all(promises);
    // console.log(nftsData);

    const nftDataArray: INFTInfo[] = userEthNFTs.result!.map((item, index) => {
      console.log(item.token_uri);
      return {
        // image: nftsData[index],
        image: nftPlaceHolder,
        amount: item.amount,
        name: item.name,
        symbol: item.symbol,
      };
    });

    setIsLoading(false);
    setNftsData(nftDataArray);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchNFTs();
  }, []);

  return (
    <div className={styles.container}>
      {nftsData.map((e) => (
        <NFTCard
          description={e.symbol}
          title={e.name}
          img={e.image}
          // key={e.image}
        />
      ))}
    </div>
  );
};
export default NFTDisplay;
