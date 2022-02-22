import React, {useEffect, useState} from 'react';
import {Table, Row, Col, Button, Typography} from 'antd';
import {useHistory} from 'react-router';
import {useMoralis } from "react-moralis";

const {Title} = Typography;

const ManageNfts = () => {
  const { Moralis } = useMoralis();
  const history = useHistory();
  const [allData, setAllData] = useState([]);
  // const User = Moralis.Object.extend("User");

  // @ts-ignore
  Moralis.enableWeb3();

  const CONTRACT_ADDRESS = '0x1155bff43e0eb873651d851bc46a22d9cff9b385';
  let web3;

  useEffect(() => {

    Moralis.Cloud.run("loadUsers").then((data: any) => {
      console.log(data)
      setAllData(data.results)
    });
  }, []);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Accounts',
      dataIndex: 'accounts'
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt'
    },
    {
      title: 'Updated at',
      dataIndex: 'updatedAt'
    },
    {
      title: 'Hack Rabbit',
      dataIndex: 'hackRabbit'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Transfer NFT',
      key: 'transfer',
      dataIndex: 'transfer',
      render: (text: any, record: any) => (
        <button onClick={(evt: any)=> transfer(record.email, record.accounts.toString())}>
          Transfer
        </button>
      ),
    },
  ];

  const data = [{}];

  function getRandomInt(max: Number) {
    // @ts-ignore
    return Math.floor(Math.random() * max);
  }

  async function transfer(userEmail: string, receiverAddress: String) {
    let rabbitId = getRandomInt(8)+1;
    let amount = 1;

    const options = {
      type: "erc1155",
      receiver: receiverAddress,
      contractAddress: CONTRACT_ADDRESS,
      tokenId: rabbitId,
      amount: 1
    }

    // @ts-ignore
    let result = await Moralis.transfer(options)
    // number of owners should increase
    console.log(result);
    console.log(result.transactionHash);
    Moralis.Cloud.run("notifyReceiver", {txHash: result.transactionHash, receiverAddress, rabbitId, userEmail }).then((err)=> {
      console.log('notification sent!', err)
      alert("Successfully transferred! CryptoRabbit: " + rabbitId );
    });

  }

  allData.map((user: any) => {
    const { createdAt, updatedAt, hackRabbit, ethAddress, notificationEmail, status, accounts } = user.attributes;

    data.push({
      key: user.id,
      id: user.id,
      email: notificationEmail?.toString(),
      createdAt: createdAt?.toLocaleString(),
      updatedAt: updatedAt?.toLocaleString(),
      hackRabbit: hackRabbit?.toString(),
      status: status,
      accounts: accounts?.join(', ')
    })
    return data;
  });

  return (
    <div>
      <Row gutter={[40, 0]}>
        <Col span={18}>
          <Title level={2}>
            User List
          </Title>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Table columns={columns} dataSource={data}/>
        </Col>
      </Row>
    </div>
  );
}

export default ManageNfts;
