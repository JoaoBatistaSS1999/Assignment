// import styles from "./styles.module.css";
// import NFTCard from "../../components/UI/nftCard/index";
// import { useMoralis, useNFTBalances } from "react-moralis";
// import { useVerifyMetadata } from "../../hooks/useVerifyMetaData";
// import { useEffect, useState } from "react";
// import { useContextComponent } from "../../context/appContext";
// import { List } from "antd";

// const NFTDisplay: React.FC = () => {
//   const { data: NFTBalances } = useNFTBalances();
//   const { verifyMetadata } = useVerifyMetadata();
//   const { network, isUserUpdating } = useMoralis();

//   const { setIsLoading } = useContextComponent();

//   const [nftBalances, setNftBalances] = useState<JSX.Element[] | undefined>(
//     NFTBalances?.result?.map((nft) => {
//       nft = verifyMetadata(nft);

//       return (
//         <NFTCard
//           description={nft.symbol}
//           title={nft.name}
//           img={nft?.metadata.image}
//           key={nft.metadata.image}
//         />
//       );
//     })
//   );

//   const setNftData = () => {
//     setNftBalances(
//       NFTBalances?.result?.map((nft) => {
//         nft = verifyMetadata(nft);

//         return (
//           <List>
//             <NFTCard
//               description={nft.symbol}
//               title={nft.name}
//               img={nft?.metadata.image}
//               key={nft.metadata.image}
//             />
//           </List>
//         );
//       })
//     );

//     setIsLoading(false);
//   };

//   const emptyNFTBalance = (
//     <h2>Opssss... Looks like you don't have any NFTs on this network. 😥</h2>
//   );

//   useEffect(() => {
//     console.log("use effect nfts");
//     setIsLoading(true);
//     setNftData();
//   });

//   return (
//     <div className={styles.container}>
//       {nftBalances?.length ? nftBalances : emptyNFTBalance}
//     </div>
//   );
// };
// export default NFTDisplay;

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
      {NFTBalances?.result?.length
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
