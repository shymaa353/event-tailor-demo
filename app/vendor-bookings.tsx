import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const TABS = ['Requests (2)', 'Upcoming (4)', 'Past (18)'];

const REQUESTS = [
  { name: 'Shymaa', event: 'Wedding', date: 'Jun 20, 2025', pkg: 'Standard Package', price: 'EGP 25,000' },
  { name: 'Ahmed & Nour', event: 'Engagement', date: 'Aug 3, 2025', pkg: 'Basic Package', price: 'EGP 8,000' },
];

export default function VendorBookingsScreen() {
  const [tab, setTab] = useState(0);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Bookings</Text>
          <View style={{ width: 22 }} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
          {TABS.map((t, i) => (
            <TouchableOpacity key={t} onPress={() => setTab(i)} style={[styles.chip, tab === i && styles.chipActive]}>
              <Text style={[styles.chipText, tab === i && styles.chipTextActive]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {REQUESTS.map((r) => (
          <View key={r.name} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{r.name}</Text>
                <Text style={styles.event}>{r.event} · {r.date}</Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>{r.pkg}</Text>
              <Text style={styles.detailPrice}>{r.price}</Text>
            </View>
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.declineBtn}>
                <Text style={styles.declineText}>Decline</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptBtn}>
                <Text style={styles.acceptText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  chipRow: { flexDirection: 'row', marginBottom: spacing.lg },
  chip: { borderWidth: 1, borderColor: colors.line, borderRadius: 20, paddingHorizontal: spacing.md, paddingVertical: 8, marginRight: spacing.sm },
  chipActive: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12.5, fontWeight: '600', color: colors.ink },
  chipTextActive: { color: '#fff' },

  card: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.md },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.md },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  name: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  event: { fontSize: 11.5, color: colors.ash, marginTop: 1 },

  detailRow: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: colors.mist, paddingTop: spacing.sm, marginBottom: spacing.md },
  detailLabel: { fontSize: 12, color: colors.ash },
  detailPrice: { fontSize: 13, fontWeight: '700', color: colors.ink },

  actionRow: { flexDirection: 'row', gap: spacing.sm },
  declineBtn: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 42, alignItems: 'center', justifyContent: 'center' },
  declineText: { fontSize: 13, fontWeight: '600', color: colors.ink },
  acceptBtn: { flex: 1, backgroundColor: colors.ink, borderRadius: radius.md, height: 42, alignItems: 'center', justifyContent: 'center' },
  acceptText: { fontSize: 13, fontWeight: '600', color: '#fff' },
});