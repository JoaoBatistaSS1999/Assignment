import React from "react";
import styles from "./styles.module.css";
import NFTCard from "../../components/UI/nftCard/index";

const NFTDisplay: React.FC = () => {
  const imgLink = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";

  return (
    <div className={styles.container}>
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
      <NFTCard description='Description text' title='Title' img={imgLink} />
    </div>
  );
};
export default NFTDisplay;
