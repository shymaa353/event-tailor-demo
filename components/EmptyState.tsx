import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, spacing, typography } from '../constants/theme';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  sub: string;
  ctaLabel: string;
  onPress?: () => void;
};

export default function EmptyState({ icon, title, sub, ctaLabel, onPress }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={36} color={colors.ink} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{sub}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{ctaLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.xxl },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 24,
    backgroundColor: colors.mist,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  title: { fontSize: typography.displaySize.sm, fontWeight: '700', color: colors.ink, marginBottom: 8, textAlign: 'center' },
  sub: { fontSize: 13, color: colors.ash, textAlign: 'center', lineHeight: 20, marginBottom: spacing.xl, maxWidth: 240 },
  btn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 48,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 220,
  },
  btnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});