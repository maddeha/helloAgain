import { Text, View } from 'react-native';

import CustomButton from '@components/CustomButton/CustomButton';
import { Reward } from '@models/Rewards/Rewards';
import { selectUser } from '@store/features/user/userSlice';
import { useAppSelector } from '@store/hooks';
import { useTranslation } from 'react-i18next';

import styles from './styles';

interface RewardsListItemProps {
  reward: Reward;
  onPress?: () => void;
}

const RewardsListItem = ({
  reward,
  onPress
}: RewardsListItemProps): React.JSX.Element => {
  const { name, description, amount } = reward;

  const { t } = useTranslation();

  const collectedRewards = useAppSelector(selectUser).rewards;

  const isSelected = collectedRewards.some(
    (_reward) => _reward.id === reward.id
  );

  return (
    <View style={[styles.container, onPress && isSelected && styles.selected]}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        {amount && <Text style={styles.amount}>+{amount}</Text>}
      </View>
      {onPress && !isSelected && (
        <CustomButton title={t('home.collect')} onPress={onPress} />
      )}
    </View>
  );
};

export default RewardsListItem;
