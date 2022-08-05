import { Card, Image } from "antd";
import { useContextComponent } from "../../../context/appContext";
import "./styles.module.css";
import nftIcon from "../../../assets/empty.png";

interface Props {
  title: string;
  description: string;
  img: string;
}

const NFTCard: React.FC<Props> = ({ title, description, img }) => {
  const { isLoading } = useContextComponent();

  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 270, backgroundColor: "#fff" }}
      cover={
        <Image
          preview={false}
          src={img}
          fallback={nftIcon}
          alt='nft'
          style={{ height: "300px" }}
        />
      }
      loading={isLoading}>
      <Meta title={title} description={description} />
    </Card>
  );
};
export default NFTCard;
