import { List } from "antd";
import React, { useEffect, useState } from "react";
import { useContextComponent } from "../../context/appContext";
import { useMoralisWeb3Api } from "react-moralis";
import styles from "./styles.module.css";
import TokenCard from "../../components/UI/tokenCard";

interface ITokenData {
  name: string;
  symbol: string;
  logo: string;
  balance: string;
}

const TokenBalances: React.FC = () => {
  const Web3Api = useMoralisWeb3Api();

  const { isLoading, setIsLoading, address, isConnected } =
    useContextComponent();

  const [tokenData, setTokenData] = useState<ITokenData[]>([]);

  const options = {
    address: address,
  };

  const fetchTokenBalances = async () => {
    const balances = await Web3Api.account.getTokenBalances(options);

    const tokensInfo: ITokenData[] = balances.map((e) => {
      return {
        balance: e.balance,
        logo: e.logo ? e.logo : "",
        symbol: e.symbol,
        name: e.name,
      };
    });

    setTokenData(tokensInfo);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTokenBalances();
  }, []);

  return (
    <div className={styles.container}>
      <List
        bordered
        split
        loading={isLoading}
        dataSource={tokenData}
        style={{ width: 600 }}
        header='ERC-20 Mainnet Tokens'
        renderItem={(item) => (
          <TokenCard
            name={item.name}
            symbol={item.symbol}
            logo={item.logo}
            balance={item.balance}
          />
        )}
      />
    </div>
  );
};

export default TokenBalances;
