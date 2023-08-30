import { Header, Inner, Layout, Title } from "./cmnStyle";

const Container = props => {
  return (
    <Layout>
      <Header>
        <Title>{props.param.owner + " / " + props.param.repo}</Title>
      </Header>
      <Inner>{props.children}</Inner>
    </Layout>
  );
};

export default Container;
