import { Card } from "antd";
import { useContextComponent } from "../../../context/appContext";
import "./styles.module.css";

interface Props {
  title: string;
  description: string;
  img: string;
}

const NFTCard: React.FC<Props> = ({ title, description, img }) => {
  const { isConnected, setIsConnected, isLoading, setIsLoading, address } =
    useContextComponent();

  const { Meta } = Card;
  const avatar = <img src={img} alt='nft' />;

  return (
    <Card
      hoverable
      style={{ width: 270, backgroundColor: "#fff" }}
      cover={avatar}
      loading={isLoading}>
      <Meta title={title} description={description} />
    </Card>
  );
};
export default NFTCard;
