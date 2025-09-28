import React, { useEffect } from 'react';

import { View } from 'react-native';

import CustomLoader from '@components/CustomLoader/CustomLoader';
import { CustomToast } from '@components/CustomToast/CustomToast';
import { showErrorToast } from '@utils/helpers';

import CustomErrorHandlerFlatlist from '../CustomErrorHandlerFlatlist/CustomErrorHandlerFlatlist';

import styles from './styles';

type FooterFlatlistProps = {
  isLoadingMore?: boolean;
  loadingMoreError?: string;
  getMoreData?: () => void;
};

const FooterFlatlist: React.FC<FooterFlatlistProps> = ({
  getMoreData,
  isLoadingMore,
  loadingMoreError
}): React.JSX.Element => {
  useEffect(() => {
    if (getMoreData && !isLoadingMore && loadingMoreError) {
      showErrorToast(loadingMoreError);
    }
  }, [getMoreData, isLoadingMore, loadingMoreError]);

  if (isLoadingMore) {
    return (
      <View style={styles.footer}>
        <CustomLoader />
      </View>
    );
  }

  if (getMoreData && !isLoadingMore && loadingMoreError) {
    return (
      <View style={styles.footer}>
        <CustomErrorHandlerFlatlist
          errorMessage={loadingMoreError}
          onButtonPress={getMoreData}
        />
        <CustomToast position="bottom" />
      </View>
    );
  }
  return <></>;
};

export default FooterFlatlist;
