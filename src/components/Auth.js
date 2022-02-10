import React from 'react';
import {useMoralis} from 'react-moralis';
import {
  Button,
  Alert,
  Col,
  Row,
  Typography
} from 'antd';

const {Title} = Typography;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

export const Auth = () => {
  const {authenticate, isAuthenticating, authError} = useMoralis();

  return (
    <div style={{height: "100vh", marginTop: "4rem"}}>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          <Title style={{textAlign: 'center'}} level={2}>
            Want some free HackRabbit NFTs?
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{textAlign: 'center'}}>
            <img src={'https://media.giphy.com/media/ZtcfojuInM5pINYAEh/giphy.gif'}/>
          </div>
        </Col>
      </Row>
      <Row gutter={[40, 0]}>
        <Col span={24}>
          {authError && (
            <Alert
              type="error"
              message={`Authentication has failed: ` + authError.message}
              closable
            />
          )}
          <div style={{textAlign: "center", paddingTop: '2rem'}}>
            <Button type="primary" isLoading={isAuthenticating} onClick={() => authenticate()}>
              Login with Metamask
            </Button>
          </div>
          <div style={{textAlign: "center", paddingTop: '2rem'}}>
            <Button type="primary" isLoading={isAuthenticating}
                    onClick={() => authenticate({provider: 'walletconnect'})}>
              Login with Walletconnect
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
