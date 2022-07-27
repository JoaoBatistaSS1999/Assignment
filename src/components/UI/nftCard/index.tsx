import { Card } from "antd";
import { useContextComponent } from "../../../context/appContext";
import "./styles.module.css";

import nft from "../../../assets/nft.png";

interface Props {
  title: string;
  description: string;
  img: string;
}

const NFTCard: React.FC<Props> = ({ title, description, img }) => {
  const { isConnected, setIsConnected, isLoading, setIsLoading } =
    useContextComponent();

  const { Meta } = Card;

  const avatar = <img src={nft} alt='nft' />;

  return (
    <Card
      hoverable
      style={{ width: 200, backgroundColor: "#ffffff" }}
      cover={avatar}
      loading={isLoading}>
      <Meta title={title} description={description} />
    </Card>
  );
};
export default NFTCard;
