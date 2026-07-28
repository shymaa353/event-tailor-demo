import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import EmptyState from '../components/EmptyState';
import { colors, radius, spacing, typography } from '../constants/theme';

const GUESTS = [
  { name: 'Nada Ahmed', status: 'Confirmed' },
  { name: 'Omar Khaled', status: 'Confirmed' },
  { name: 'Mona Yassin', status: 'Pending' },
  { name: 'Ahmed Tarek', status: 'Confirmed' },
  { name: 'Yara Mostafa', status: 'Pending' },
];

export default function GuestsScreen() {
  const hasGuests = GUESTS.length > 0;

  return (
    <View style={styles.screen}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={colors.ink} />
        </TouchableOpacity>
        <Text style={styles.title}>Guests</Text>
        <TouchableOpacity onPress={() => router.push('/event-settings')}>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.ink} />
        </TouchableOpacity>
      </View>

      {!hasGuests ? (
        <EmptyState
          icon="people-outline"
          title="No guests added yet"
          sub="Start building your list — you can add contacts one by one or import them all at once."
          ctaLabel="+ Add Guest"
        />
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.statRow}>
              <View style={styles.statCard}><Text style={styles.statNum}>120</Text><Text style={styles.statLabel}>Total</Text></View>
              <View style={styles.statCard}><Text style={styles.statNum}>85</Text><Text style={styles.statLabel}>Confirmed</Text></View>
              <View style={styles.statCard}><Text style={styles.statNum}>35</Text><Text style={styles.statLabel}>Pending</Text></View>
            </View>

            <View style={styles.searchRow}>
              <View style={styles.searchField}>
                <Ionicons name="search-outline" size={15} color={colors.ash} />
                <TextInput style={styles.searchInput} placeholder="Search guests" placeholderTextColor={colors.ash} />
              </View>
              <TouchableOpacity style={styles.filterBtn}>
                <Ionicons name="options-outline" size={16} color={colors.ink} />
              </TouchableOpacity>
            </View>

            {GUESTS.map((g) => (
              <View key={g.name} style={styles.guestRow}>
                <View style={styles.avatar} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.guestName}>{g.name}</Text>
                  <Text style={styles.guestStatus}>{g.status}</Text>
                </View>
                <Ionicons
                  name={g.status === 'Confirmed' ? 'checkmark' : 'time-outline'}
                  size={16}
                  color={g.status === 'Confirmed' ? colors.ink : colors.ash}
                />
              </View>
            ))}
          </ScrollView>

          <View style={styles.footBtn}>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>+ Add Guest</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { paddingHorizontal: spacing.xl },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: spacing.xl, paddingTop: 60, paddingBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  statRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  statCard: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: spacing.md, alignItems: 'center' },
  statNum: { fontSize: 19, fontWeight: '700', color: colors.ink },
  statLabel: { fontSize: 10.5, color: colors.ash, fontWeight: '600', marginTop: 2 },

  searchRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  searchField: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, height: 44, flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: spacing.md },
  searchInput: { flex: 1, fontSize: 12.5, color: colors.ink },
  filterBtn: { width: 44, height: 44, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },

  guestRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.mist },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.mist, borderWidth: 1, borderColor: colors.line },
  guestName: { fontSize: 13.5, fontWeight: '700', color: colors.ink },
  guestStatus: { fontSize: 11.5, color: colors.ash, marginTop: 1 },

  footBtn: { padding: spacing.xl, paddingTop: spacing.sm },
  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 48, alignItems: 'center', justifyContent: 'center' },
  primaryBtnText: { fontSize: 14.5, fontWeight: '600', color: '#fff' },
});