import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import Spinner from '../spinner';
import { useStore } from '../../stores/index';

export default function Layout() {
  const loading = useStore((state) => state.loading);

  return (
    <>
      <Header />
      <Content />
      <Footer />
      {loading && <Spinner isLoading={loading} />}
    </>
  );
}
