import { FunctionComponent } from "react";
import { Col, Card } from "antd";

interface Props {
  label: string;
  response: string;

}

const Response: FunctionComponent<Props> = (props) => {
  const { label, response} = props;

  return (
    <Col md={{span:10}}>
      <Card style={{width:"30rem"}} bordered={true}>
        <h1>{label}</h1>
        <h2>{`${response}`}</h2>

      </Card>

    </Col>
  );
};

export default Response;
