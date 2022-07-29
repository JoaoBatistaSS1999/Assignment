import styles from "./styles.module.css";
import NFTCard from "../../components/UI/nftCard/index";
import { useNFTBalances } from "react-moralis";
import { useVerifyMetadata } from "../../hooks/useVerifyMetaData";

const NFTDisplay: React.FC = () => {
  const { data: NFTBalances } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();
  const emptyNFTBalance = (
    <h2>Opssss... Looks like you dont have any NFTs on this network.</h2>
  );

  return (
    <div className={styles.container}>
      {NFTBalances?.result
        ? NFTBalances.result.map((nft) => {
            nft = verifyMetadata(nft);

            return (
              <NFTCard
                description={nft.symbol}
                title={nft.name}
                img={nft?.metadata.image}
                key={nft.metadata.image}
              />
            );
          })
        : emptyNFTBalance}
    </div>
  );
};
export default NFTDisplay;
