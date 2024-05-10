import Footer from '@/components/footer';
import Header from '@/components/header';

const AppLayout = (props: { children?: JSX.Element }) => {
  return (
    <div className="main">
      <Header />
      <main className="mx-auto max-w-screen-xl">{props.children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
