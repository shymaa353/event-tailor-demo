import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function BookingConfirmedScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={30} color={colors.ink} />
        </View>
        <Text style={styles.title}>Booking Confirmed!</Text>
        <Text style={styles.sub}>Your booking request has been sent to the vendor.</Text>

        <View style={styles.nextCard}>
          <Text style={styles.nextTitle}>What's Next?</Text>
          <Text style={styles.nextItem}>• You'll receive a confirmation once the vendor accepts.</Text>
          <Text style={styles.nextItem}>• You can track the status in your bookings.</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/my-bookings')}>
  <Text style={styles.primaryBtnText}>View My Bookings</Text>
</TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.ghostLink}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 80 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: { width: 78, height: 78, borderRadius: 39, borderWidth: 1.6, borderColor: colors.line, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 8 },
  sub: { fontSize: 13, color: colors.ash, textAlign: 'center', marginBottom: spacing.xl },

  nextCard: { width: '100%', backgroundColor: colors.mist, borderRadius: radius.lg, padding: spacing.md },
  nextTitle: { fontSize: 13, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  nextItem: { fontSize: 12, color: colors.ink, lineHeight: 19 },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
  ghostLink: { textAlign: 'center', fontSize: 13, fontWeight: '600', color: colors.ink },
});