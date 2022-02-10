import React, {useEffect, useState} from "react";
import {Button, Row, Col, Form, Input, Checkbox, Result} from "antd";
import {useMoralis} from "react-moralis";

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

function Airdrop() {
  const { refetchUserData, user } = useMoralis();
  const [email, setEmail] = useState();
  const [mallorcaClub, setMallorcaClub] = useState(false);

  useEffect(()=> {
    refetchUserData();
    console.log('user: ', user)
    console.log('role: ', user?.get('role'))
  } ,[])

  const handleGiveMe = () => {
    // @ts-ignore
    if (user) {
      user.set('airdropStatus', 'askedFor')
      user.set('notificationEmail', email)
      user.set('mallorcaClub', false)
      user.set('hackRabbit', true)
      user.save().then(user => {
        refetchUserData()
        console.log(user)
      });
    }
  }

  if (user && !user.get('airdropStatus')) {
    console.log(user.get('ethAddress'))
    console.log(user.get('airdropStatus'))
    return (
      <div>
        <Row>
          <Col span={5} xs={24}>
            <Form {...layout} style={{marginTop: "2rem"}}>
              <Form.Item name="email"
                 rules={[
                   {
                     required: true,
                     message: 'Please input your correct email',
                     type: 'email'
                   }
                 ]}
              >
                <Input placeholder="Email (to receive airdrop notification)" value={email} onChange={(event: any) => setEmail(event.currentTarget.value)}/>
              </Form.Item>
              <Form.Item name="mallorcaClub">
                <Button type={"primary"} onClick={handleGiveMe} disabled={!email}>
                  Give me NFT rabbit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Row>
          <Col span={24}>
          <Result
            status="success"
            title="Successfully applied for HackRabbit NFT!!!"
            subTitle="You will receive an email notification once NFT is transferred to your wallet"
          />
          </Col>
        </Row>
      </div>
    );
  }

  return null;
}

export default Airdrop;
