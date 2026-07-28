import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const LEADS = [
  { name: 'Shymaa', event: 'Wedding · Jun 20, 2025', status: 'New Request' },
  { name: 'Ahmed & Nour', event: 'Engagement · Aug 3, 2025', status: 'New Request' },
];

export default function VendorDashboardScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.greeting}>Good morning, Alma Hall</Text>
            <Text style={styles.sub}>Here's how your business is doing.</Text>
          </View>
          <Ionicons name="notifications-outline" size={22} color={colors.ink} />
        </View>

        <View style={styles.statRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>4.8</Text>
            <Text style={styles.statLabel}>RATING</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNum}>12</Text>
            <Text style={styles.statLabel}>BOOKINGS THIS MONTH</Text>
          </View>
        </View>

        <View style={styles.payoutCard}>
          <Text style={styles.payoutLabel}>Next Payout</Text>
          <Text style={styles.payoutAmount}>EGP 72,250</Text>
          <Text style={styles.payoutNote}>After 15% commission · Released Feb 2, 2026</Text>
        </View>

        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>New Lead Requests</Text>
          <TouchableOpacity onPress={() => router.push('/vendor-bookings')}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        {LEADS.map((lead) => (
          <TouchableOpacity key={lead.name} style={styles.leadRow} onPress={() => router.push('/vendor-bookings')}>
            <View style={styles.leadAvatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.leadName}>{lead.name}</Text>
              <Text style={styles.leadEvent}>{lead.event}</Text>
            </View>
            <View style={styles.leadBadge}>
              <Text style={styles.leadBadgeText}>{lead.status}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.qaGrid}>
          <TouchableOpacity style={styles.qaItem} onPress={() => router.push('/vendor-bookings')}>
            <Ionicons name="clipboard-outline" size={18} color={colors.ink} />
            <Text style={styles.qaLabel}>Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.qaItem} onPress={() => router.push('/vendor-calendar')}>
            <Ionicons name="calendar-outline" size={18} color={colors.ink} />
            <Text style={styles.qaLabel}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.qaItem} onPress={() => router.push('/vendor-business-profile')}>
            <Ionicons name="storefront-outline" size={18} color={colors.ink} />
            <Text style={styles.qaLabel}>My Store</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Vendor bottom nav */}
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tab}>
          <Ionicons name="bar-chart-outline" size={19} color={colors.ink} />
          <Text style={styles.tabLabelActive}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/vendor-bookings')}>
          <Ionicons name="clipboard-outline" size={19} color={colors.ash} />
          <Text style={styles.tabLabel}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/vendor-calendar')}>
          <Ionicons name="calendar-outline" size={19} color={colors.ash} />
          <Text style={styles.tabLabel}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => router.push('/vendor-business-profile')}>
          <Ionicons name="person-outline" size={19} color={colors.ash} />
          <Text style={styles.tabLabel}>My Store</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60, paddingBottom: spacing.xxl },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing.lg },
  greeting: { fontSize: typography.displaySize.sm, fontWeight: '700', color: colors.ink },
  sub: { fontSize: 12, color: colors.ash, marginTop: 2 },

  statRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  statCard: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, alignItems: 'center' },
  statNum: { fontSize: 19, fontWeight: '700', color: colors.ink },
  statLabel: { fontSize: 9.5, color: colors.ash, fontWeight: '600', marginTop: 3, textAlign: 'center' },

  payoutCard: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.lg },
  payoutLabel: { fontSize: 11, color: colors.ash, fontWeight: '600', marginBottom: 6 },
  payoutAmount: { fontSize: 22, fontWeight: '700', color: colors.ink },
  payoutNote: { fontSize: 11, color: colors.ash, marginTop: 4 },

  sectionTitle: { fontSize: 13.5, fontWeight: '700', color: colors.ink, marginBottom: spacing.sm, marginTop: spacing.md },
  sectionTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.md },
  seeAll: { fontSize: 12, color: colors.ash, fontWeight: '500' },

  leadRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.sm },
  leadAvatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  leadName: { fontSize: 13, fontWeight: '700', color: colors.ink },
  leadEvent: { fontSize: 11, color: colors.ash, marginTop: 1 },
  leadBadge: { backgroundColor: colors.ink, borderRadius: 8, paddingHorizontal: 9, paddingVertical: 4 },
  leadBadgeText: { fontSize: 10, fontWeight: '700', color: '#fff' },

  qaGrid: { flexDirection: 'row', gap: spacing.sm },
  qaItem: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center', gap: 7, paddingVertical: spacing.md },
  qaLabel: { fontSize: 10.5, fontWeight: '600', color: colors.ink },

  tabbar: { height: 64, borderTopWidth: 1, borderTopColor: colors.line, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: colors.paper },
  tab: { alignItems: 'center', gap: 4 },
  tabLabel: { fontSize: 9.5, color: colors.ash, fontWeight: '500' },
  tabLabelActive: { fontSize: 9.5, color: colors.ink, fontWeight: '700' },
});