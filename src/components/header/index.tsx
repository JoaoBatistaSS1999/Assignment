import React, { useState } from "react";
import { Button } from "antd";
import styles from "./styles.module.css";
import { useContextComponent } from "../../context/appContext";

const Header: React.FC = () => {
  const [isDisabled, setDisabled] = useState(false);

  const address = "0x08...45d";

  const { isConnected, setIsConnected, isLoading, setIsLoading } =
    useContextComponent(); // importing the context

  const changeStatus = () => {
    setDisabled((prevState) => !prevState);
    setIsConnected(true);
  };

  return (
    <nav className={styles.container}>
      <h1 className='logo'>Criptonomia Project</h1>

      <Button
        type='primary'
        disabled={isDisabled}
        onClick={changeStatus}
        size='large'>
        {isConnected ? address : "Connect"}
      </Button>
    </nav>
  );
};
export default Header;
