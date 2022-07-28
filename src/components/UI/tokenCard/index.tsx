import React from "react";
import { Avatar, List } from "antd";

interface ITokenCardProps {
  balance: string;
  logo: string;
  name: string;
  symbol: string;
}

const TokenCard: React.FC<ITokenCardProps> = ({
  name,
  symbol,
  logo,
  balance,
}) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={logo} />}
        title={`${name} (${symbol})`}
        description={`balance $ ${balance}`}
      />
    </List.Item>
  );
};
export default TokenCard;
