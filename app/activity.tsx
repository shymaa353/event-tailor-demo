import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

const FILTERS = ['All', 'Bookings', 'Payments', 'Reminders'];

const GROUPS = [
  { day: 'Today', items: [
    { icon: 'checkmark', title: 'Blossom Decor confirmed your booking', sub: 'Decoration · Premium Package', time: '2 hours ago', unread: true },
    { icon: 'wallet-outline', title: 'Venue deposit due in 4 days', sub: 'Alma Hall · EGP 15,000', time: '5 hours ago', unread: true },
  ]},
  { day: 'Yesterday', items: [
    { icon: 'star-outline', title: 'Next recommended step ready', sub: 'Book a Photographer — based on your plan', time: 'Yesterday, 4:12 PM', unread: false },
    { icon: 'checkbox-outline', title: '2 checklist items are overdue', sub: 'Book Photographer, Send Save-the-Date', time: 'Yesterday, 9:00 AM', unread: false },
  ]},
  { day: 'This Week', items: [
    { icon: 'shield-checkmark-outline', title: 'Light Studio is a verified vendor near you', sub: 'Photography · 4.8 (120 reviews)', time: 'Monday', unread: false },
    { icon: 'wallet-outline', title: 'Photography budget is running low', sub: 'EGP 5,000 of EGP 20,000 remaining', time: 'Monday', unread: false },
  ]},
];

export default function ActivityScreen() {
  const [filter, setFilter] = useState(0);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Activity</Text>
          <Text style={styles.clearLink}>Mark all read</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
          {FILTERS.map((f, i) => (
            <TouchableOpacity key={f} onPress={() => setFilter(i)} style={[styles.chip, filter === i && styles.chipActive]}>
              <Text style={[styles.chipText, filter === i && styles.chipTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {GROUPS.map((group) => (
          <View key={group.day}>
            <Text style={styles.dayLabel}>{group.day}</Text>
            {group.items.map((item, i) => (
              <View key={i} style={[styles.row, !item.unread && styles.rowRead]}>
                <View style={styles.iconBox}>
                  <Ionicons name={item.icon as any} size={16} color={colors.ink} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSub}>{item.sub}</Text>
                  <Text style={styles.itemTime}>{item.time}</Text>
                </View>
                {item.unread && <View style={styles.dot} />}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },
  clearLink: { fontSize: 12.5, color: colors.ash, fontWeight: '600' },

  chipRow: { flexDirection: 'row', marginBottom: spacing.md },
  chip: { borderWidth: 1, borderColor: colors.line, borderRadius: 20, paddingHorizontal: spacing.md, paddingVertical: 8, marginRight: spacing.sm },
  chipActive: { backgroundColor: colors.ink, borderColor: colors.ink },
  chipText: { fontSize: 12.5, fontWeight: '600', color: colors.ink },
  chipTextActive: { color: '#fff' },

  dayLabel: { fontSize: 12, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginTop: spacing.md, marginBottom: spacing.sm },

  row: { flexDirection: 'row', gap: spacing.md, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.mist, position: 'relative' },
  rowRead: { opacity: 0.65 },
  iconBox: { width: 38, height: 38, borderRadius: 11, backgroundColor: colors.mist, alignItems: 'center', justifyContent: 'center' },
  itemTitle: { fontSize: 13, fontWeight: '700', color: colors.ink, lineHeight: 18 },
  itemSub: { fontSize: 11.5, color: colors.ash, marginTop: 2 },
  itemTime: { fontSize: 10.5, color: colors.ash, marginTop: 5 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.ink, position: 'absolute', right: 0, top: 16 },
});