import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../../constants/theme';

const GROUP_1 = [
  { icon: 'calendar-outline', label: 'My Events', route: '/my-bookings' },
  { icon: 'sync-outline', label: 'Calendar Sync', route: '/calendar-sync' },
  { icon: 'notifications-outline', label: 'Notifications', route: '/notifications' },
  { icon: 'heart-outline', label: 'Saved Inspirations', route: '/(tabs)/saved' },
];

const GROUP_2 = [
  { icon: 'help-circle-outline', label: 'Help Center', route: '/(tabs)/profile' },
  { icon: 'shield-checkmark-outline', label: 'Privacy Policy', route: '/privacy-settings' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile header */}
        <View style={styles.profileHead}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.pname}>Shymaa</Text>
            <Text style={styles.pemail}>shymaa@email.com</Text>
            <TouchableOpacity style={styles.editBtn} onPress={() => router.push('/edit-profile')}>
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.list}>
          {GROUP_1.map((item, i) => (
            <TouchableOpacity
              key={item.label}
              style={[styles.row, i === GROUP_1.length - 1 && styles.rowLast]}
              onPress={() => router.push(item.route as any)}
            >
              <Ionicons name={item.icon as any} size={16} color={colors.ink} />
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={15} color={colors.ash} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.list}>
          <TouchableOpacity style={styles.row} onPress={() => router.push('/settings-menu')}>
            <Ionicons name="settings-outline" size={16} color={colors.ink} />
            <Text style={styles.rowLabel}>Settings</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          {GROUP_2.map((item, i) => (
            <TouchableOpacity
              key={item.label}
              style={[styles.row, i === GROUP_2.length - 1 && styles.rowLast]}
              onPress={() => router.push(item.route as any)}
            >
              <Ionicons name={item.icon as any} size={16} color={colors.ink} />
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={15} color={colors.ash} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Temporary test link — remove once real auth flow is wired in */}
        <View style={styles.list}>
          <TouchableOpacity style={styles.row} onPress={() => router.push('/login')}>
            <Ionicons name="log-in-outline" size={16} color={colors.ink} />
            <Text style={styles.rowLabel}>Go to Login (test)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, styles.rowLast]}>
            <Ionicons name="log-out-outline" size={16} color={colors.ink} />
            <Text style={styles.rowLabel}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingBottom: spacing.xxl * 2 },

  profileHead: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.mist,
    borderWidth: 1,
    borderColor: colors.line,
  },
  pname: { fontSize: typography.displaySize.sm, fontWeight: '700', color: colors.ink },
  pemail: { fontSize: typography.textSize.sm, color: colors.ash, marginTop: 2, marginBottom: spacing.sm },
  editBtn: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 9,
    height: 26,
    paddingHorizontal: spacing.sm,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  editBtnText: { fontSize: 11, fontWeight: '600', color: colors.ink },

  list: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.mist,
  },
  rowLast: { borderBottomWidth: 0 },
  rowLabel: { flex: 1, fontSize: 13.5, fontWeight: '600', color: colors.ink },
});