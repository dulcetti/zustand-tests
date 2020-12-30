import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import Spinner from '../spinner';
import { useStoreLoading } from '../../stores/loading';

export default function Layout() {
  const loading = useStoreLoading((state) => state.loading);

  return (
    <>
      <Header />
      <Content />
      <Footer />
      {loading && <Spinner isLoading={loading} />}
    </>
  );
}
