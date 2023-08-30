import { Header, Inner, Layout } from "./cmnStyle";

const Container = props => {
  return (
    <Layout>
      <Header>
        <span>Head</span>
      </Header>
      <Inner>{props.children}</Inner>
    </Layout>
  );
};

export default Container;
