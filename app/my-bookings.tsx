import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import EmptyState from '../components/EmptyState';
import { colors, radius, spacing, typography } from '../constants/theme';

const TABS = ['All (5)', 'Pending (2)', 'Confirmed (2)', 'Completed (1)'];

const BOOKINGS = [
  { name: 'Alma Hall', pkg: 'Venue · Standard Package', status: 'Pending Response', date: 'Jun 20, 2025', price: 'EGP 26,250' },
  { name: 'Light Studio', pkg: 'Photography · Basic Package', status: 'Pending Response', date: 'Jun 20, 2025', price: 'EGP 8,400' },
  { name: 'Blossom Decor', pkg: 'Decoration · Premium', status: 'Confirmed', date: 'Jun 20, 2025', price: 'EGP 18,000' },
  { name: 'Pure Catering', pkg: 'Catering · 150 Guests', status: 'Confirmed', date: 'Jun 20, 2025', price: 'EGP 45,000' },
  { name: 'Garden Venue', pkg: 'Venue · Site Visit', status: 'Completed', date: 'Apr 3, 2025', price: '—' },
];

export default function MyBookingsScreen() {
  const [tab, setTab] = useState(0);
  const hasBookings = BOOKINGS.length > 0;

  return (
    <View style={styles.screen}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>
        <Text style={styles.title}>My Bookings</Text>
        <View style={{ width: 22 }} />
      </View>

      {!hasBookings ? (
        <EmptyState
          icon="calendar-outline"
          title="No bookings yet"
          sub="When you book a vendor, it'll show up here so you can track every request in one place."
          ctaLabel="Book Your Venue"
          onPress={() => router.push('/book-venue')}
        />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
            {TABS.map((t, i) => (
              <TouchableOpacity key={t} onPress={() => setTab(i)} style={[styles.chip, tab === i && styles.chipActive]}>
                <Text style={[styles.chipText, tab === i && styles.chipTextActive]}>{t}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {BOOKINGS.map((b) => (
            <TouchableOpacity key={b.name} style={styles.card} onPress={() => router.push('/booking-detail')}>
              <View style={styles.cardTop}>
                <View style={styles.thumb} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.vname}>{b.name}</Text>
                  <Text style={styles.vpkg}>{b.pkg}</Text>
                  <View style={[styles.badge, b.status === 'Confirmed' && styles.badgeConfirmed]}>
                    <Text style={[styles.badgeText, b.status === 'Confirmed' && styles.badgeTextConfirmed]}>{b.status}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaText}>Event <Text style={styles.metaBold}>{b.date}</Text></Text>
                <Text style={styles.price}>{b.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xl },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: spacing.xl, paddingTop: 60, paddingBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  chipRow: { flexDirection: 'row', marginBottom: spacing.lg },
  chip: { borderWidth: 1, borderColor: colors.line, borderRadius: 20, paddingHorizontal: spacing.md, paddingVertical: 8, marginRight: spacing.sm },
  chipActive: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12.5, fontWeight: '600', color: colors.ink },
  chipTextActive: { color: '#fff' },

  card: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md },
  cardTop: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.md },
  thumb: { width: 48, height: 48, borderRadius: radius.md, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  vname: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  vpkg: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  badge: { alignSelf: 'flex-start', backgroundColor: colors.mist, borderRadius: 8, paddingHorizontal: 9, paddingVertical: 4, marginTop: 6 },
  badgeConfirmed: { backgroundColor: colors.ink },
  badgeText: { fontSize: 10, fontWeight: '700', color: colors.ink },
  badgeTextConfirmed: { color: '#fff' },

  metaRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: colors.mist, paddingTop: spacing.sm },
  metaText: { fontSize: 11.5, color: colors.ash },
  metaBold: { color: colors.ink, fontWeight: '600' },
  price: { fontSize: 13, fontWeight: '700', color: colors.ink },
});