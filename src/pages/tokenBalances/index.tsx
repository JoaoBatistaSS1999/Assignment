import { Avatar, List } from "antd";
import React from "react";
import styles from "./styles.module.css";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const TokenBalances: React.FC = () => (
  <div className={styles.container}>
    <List
      loading={false}
      bordered={true}
      dataSource={data}
      split={true}
      style={{ width: 600 }}
      header='ERC-20 Token Balance'
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.beingcrypto.com%2Fwp-content%2Fuploads%2F2018%2F02%2Ftether.png&f=1&nofb=1' />
            }
            title='Token Name'
            description='Amount'
          />
        </List.Item>
      )}
    />
  </div>
);

export default TokenBalances;
