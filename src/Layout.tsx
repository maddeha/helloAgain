import { CustomToast } from '@components/CustomToast/CustomToast';

import Navigation from './navigation/NavigationContainer';

const Layout = (): React.JSX.Element => {
  return (
    <>
      <Navigation />
      <CustomToast />
    </>
  );
};

export default Layout;
