import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../../constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topBar}>
          <Ionicons name="menu-outline" size={22} color={colors.ink} />
          <Ionicons name="notifications-outline" size={22} color={colors.ink} />
        </View>

        <Text style={styles.greeting}>Good morning, Shymaa 👋</Text>

        <TouchableOpacity style={styles.eventCard} onPress={() => router.push('/event-overview')}>
          <View>
            <Text style={styles.eventName}>Shymaa's Wedding</Text>
            <Text style={styles.eventMeta}>March 14, 2027</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.ash} />
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.progressLabelRow}>
            <Text style={styles.progressLabel}>Planning Progress</Text>
            <Text style={styles.progressPct}>32%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '32%' }]} />
          </View>
          <Text style={styles.progressSub}>17 steps left</Text>
        </View>

        <View style={styles.nextCard}>
          <View style={styles.nextEyebrowRow}>
            <Ionicons name="star" size={12} color="#fff" />
            <Text style={styles.nextEyebrow}>Next Recommended Step</Text>
          </View>
          <Text style={styles.nextTitle}>Book Your Venue</Text>
          <Text style={styles.nextDesc}>Venues get booked fast. Let's secure yours.</Text>
          <TouchableOpacity style={styles.nextBtn} onPress={() => router.push('/book-venue')}>
            <Text style={styles.nextBtnText}>Start Step</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickGrid}>
          <QuickAction icon="checkbox-outline" label="Checklist" onPress={() => router.push('/checklist')} />
<QuickAction icon="wallet-outline" label="Budget" onPress={() => router.push('/budget')} />
<QuickAction icon="people-outline" label="Guest List" onPress={() => router.push('/guests')} />
<QuickAction icon="document-text-outline" label="Notes" onPress={() => router.push('/notes')} />        </View>

        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Recommended For You</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.vendorScroll}>
          <VendorCard name="Alma Hall" type="Venue" />
          <VendorCard name="Light Studio" type="Photography" />
          <VendorCard name="Blossom Decor" type="Decoration" />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function QuickAction({ icon, label, onPress }: { icon: any; label: string; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.quickItem} onPress={onPress}>
      <Ionicons name={icon} size={20} color={colors.ink} />
      <Text style={styles.quickLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function VendorCard({ name, type }: { name: string; type: string }) {
  return (
    <View style={styles.vendorCard}>
      <View style={styles.vendorThumb}>
        <Ionicons
          name="heart-outline"
          size={14}
          color={colors.ink}
          style={styles.vendorHeart}
        />
      </View>
      <Text style={styles.vendorName}>{name}</Text>
      <Text style={styles.vendorType}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingBottom: spacing.xxl * 2 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.lg },
  greeting: {
    fontSize: typography.displaySize.md,
    fontWeight: '700',
    color: colors.ink,
    marginBottom: spacing.lg,
  },
  eventCard: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  eventName: { fontSize: typography.textSize.lg, fontWeight: '700', color: colors.ink },
  eventMeta: { fontSize: typography.textSize.md, color: colors.ash, marginTop: 2 },
  card: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  progressLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  progressLabel: { fontSize: typography.textSize.xs, color: colors.ash, fontWeight: '600' },
  progressPct: { fontSize: typography.textSize.lg, fontWeight: '700', color: colors.ink },
  progressTrack: { height: 6, backgroundColor: colors.mist, borderRadius: radius.sm, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.ink, borderRadius: radius.sm },
  progressSub: { fontSize: typography.textSize.xs, color: colors.ash, marginTop: spacing.sm },
  nextCard: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  nextEyebrowRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: spacing.sm },
  nextEyebrow: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.6)',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  nextTitle: { fontSize: typography.displaySize.sm, fontWeight: '700', color: '#fff', marginBottom: 5 },
  nextDesc: { fontSize: typography.textSize.sm, color: 'rgba(255,255,255,0.6)', marginBottom: spacing.md },
  nextBtn: {
    backgroundColor: '#fff',
    borderRadius: radius.sm + 1,
    height: 34,
    paddingHorizontal: spacing.lg,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  nextBtnText: { fontSize: typography.textSize.sm, fontWeight: '700', color: colors.ink },
  sectionTitle: { fontSize: typography.textSize.md, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  seeAll: { fontSize: typography.textSize.sm, color: colors.ash, fontWeight: '500' },
  quickGrid: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  quickItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    paddingVertical: spacing.md,
  },
  quickLabel: { fontSize: 10, color: colors.ink, fontWeight: '600', textAlign: 'center' },
  vendorScroll: { flexDirection: 'row' },
  vendorCard: { width: 112, marginRight: spacing.md },
  vendorThumb: {
    width: 112,
    height: 84,
    borderRadius: radius.md,
    backgroundColor: colors.mist,
    borderWidth: 1,
    borderColor: colors.line,
    marginBottom: 7,
  },
  vendorHeart: { position: 'absolute', top: 7, right: 7 },
  vendorName: { fontSize: 12, fontWeight: '700', color: colors.ink },
  vendorType: { fontSize: 11, color: colors.ash },
});