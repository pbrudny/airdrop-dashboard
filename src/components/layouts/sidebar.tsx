import React from 'react';
import {Menu} from 'antd';
import {
  AimOutlined,
  BarsOutlined,
  PictureOutlined,
  PlusSquareOutlined,
  CloseSquareOutlined,
} from '@ant-design/icons';
import {useHistory} from 'react-router';
import {useMoralis} from "react-moralis";

const SideNav = () => {
  const history = useHistory();
  const { logout } = useMoralis();

  const handleUserClick = () => {
    history.push('/users');
  }

  const handleTokensClick = () => {
    history.push('/tokens');
  }

  const handleNftsClick = () => {
    history.push('/nfts');
  }

  const handleMintNFTClick = () => {
    history.push('/mint-nft');
  }

  const handleAirdropClick = () => {
    history.push('/airdrop');
  }

  return (
    <div>
      <div style={{height: "32px", margin: "16px"}}></div>
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" onClick={handleTokensClick}>
          <BarsOutlined />
          <span>Tokens</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleNftsClick}>
          <PictureOutlined />
          <span>NFTs</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleMintNFTClick}>
          <PlusSquareOutlined />
          <span>Mint NFT</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={handleAirdropClick}>
          <AimOutlined />
          <span>Airdrop</span>
        </Menu.Item>
        <Menu.Item key="5" onClick={() => logout()}>
          <CloseSquareOutlined />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default SideNav;
