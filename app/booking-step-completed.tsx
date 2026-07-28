import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function BookingStepCompletedScreen() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={colors.ink} />
      </TouchableOpacity>

      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={28} color={colors.ink} />
        </View>
        <Text style={styles.title}>Amazing!</Text>
        <Text style={styles.sub}>
          You've completed{'\n'}
          <Text style={styles.underline}>Book Your Venue</Text>
        </Text>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressLabelRow}>
          <Text style={styles.progressLabel}>Planning Progress</Text>
          <Text style={styles.progressPct}>42%</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '42%' }]} />
        </View>
        <Text style={styles.progressSub}>10 steps left</Text>
      </View>

      <View style={styles.nextCard}>
        <View style={styles.nextEyebrowRow}>
          <Ionicons name="star" size={11} color="#fff" />
          <Text style={styles.nextEyebrow}>Next Recommendation</Text>
        </View>
        <Text style={styles.nextTitle}>Book Photographer</Text>
        <Text style={styles.nextDesc}>Photographers get booked months in advance.</Text>
        <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/book-venue')}>
          <Text style={styles.nextBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.ghostLink}>Back to My Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },
  center: { alignItems: 'center', marginBottom: spacing.lg },
  iconCircle: { width: 74, height: 74, borderRadius: 37, borderWidth: 1.6, borderColor: colors.line, alignItems: 'center', justifyContent: 'center', marginTop: spacing.md, marginBottom: spacing.md },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: 12.5, color: colors.ash, textAlign: 'center', lineHeight: 18 },
  underline: { color: colors.ink, fontWeight: '600', textDecorationLine: 'underline' },

  progressCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md },
  progressLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  progressLabel: { fontSize: 12, color: colors.ash, fontWeight: '600' },
  progressPct: { fontSize: 13, fontWeight: '700', color: colors.ink },
  progressTrack: { height: 6, backgroundColor: colors.mist, borderRadius: radius.sm, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.ink, borderRadius: radius.sm },
  progressSub: { fontSize: 11, color: colors.ash, marginTop: spacing.sm },

  nextCard: { backgroundColor: colors.ink, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg },
  nextEyebrowRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: spacing.sm },
  nextEyebrow: { fontSize: 10.5, fontWeight: '700', color: 'rgba(255,255,255,0.6)' },
  nextTitle: { fontSize: 15, fontWeight: '700', color: '#fff', marginBottom: 5 },
  nextDesc: { fontSize: 11.5, color: 'rgba(255,255,255,0.6)', marginBottom: spacing.md },
  nextBtn: { backgroundColor: '#fff', borderRadius: 10, height: 32, paddingHorizontal: spacing.md, alignSelf: 'flex-start', justifyContent: 'center' },
  nextBtnText: { fontSize: 12, fontWeight: '700', color: colors.ink },

  ghostLink: { textAlign: 'center', fontSize: 13, fontWeight: '600', color: colors.ink },
});