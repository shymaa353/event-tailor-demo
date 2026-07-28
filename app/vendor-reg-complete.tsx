import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function VendorRegCompleteScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="storefront-outline" size={40} color={colors.ink} />
        </View>
        <Text style={styles.title}>Your business is live!</Text>
        <Text style={styles.sub}>
          Couples planning events near you can now find and book your services.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/vendor-dashboard')}>
        <Text style={styles.primaryBtnText}>Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 80 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 28,
    backgroundColor: colors.mist,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 10, textAlign: 'center' },
  sub: { fontSize: 13.5, color: colors.ash, textAlign: 'center', lineHeight: 20, maxWidth: 260 },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 50, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});