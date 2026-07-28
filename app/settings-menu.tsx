import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function SettingsMenuScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
          <View style={{ width: 22 }} />
        </View>

        <Text style={styles.sect}>Account</Text>
        <View style={styles.list}>
          <TouchableOpacity style={styles.row} onPress={() => router.push('/edit-profile')}>
            <Text style={styles.rowKey}>Edit Profile</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowKey}>Change Password</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, styles.rowLast]}>
            <Text style={styles.rowKey}>Email & Phone</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sect}>Preferences</Text>
        <View style={styles.list}>
          <TouchableOpacity style={styles.row} onPress={() => router.push('/notifications')}>
            <Text style={styles.rowKey}>Notifications</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress={() => router.push('/calendar-sync')}>
            <Text style={styles.rowKey}>Calendar Sync</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowKey}>Units & Currency</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, styles.rowLast]} onPress={() => router.push('/language-currency')}>
            <Text style={styles.rowKey}>Language</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sect}>Privacy & Security</Text>
        <View style={styles.list}>
          <TouchableOpacity style={styles.row} onPress={() => router.push('/privacy-settings')}>
            <Text style={styles.rowKey}>Privacy Settings</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, styles.rowLast]}>
            <Text style={styles.rowKey}>Blocked Vendors</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sect}>More</Text>
        <View style={styles.list}>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowKey}>About Us</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowKey}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, styles.rowLast]}>
            <Text style={[styles.rowKey, { color: '#B3261E' }]}>Log Out</Text>
            <Ionicons name="chevron-forward" size={15} color={colors.ash} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper },
  scrollContent: { padding: spacing.xl, paddingTop: 60 },

  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.lg },
  title: { fontSize: 17, fontWeight: '700', color: colors.ink },

  sect: { fontSize: 11.5, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginBottom: spacing.sm, marginTop: spacing.md },

  list: { borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, overflow: 'hidden', marginBottom: spacing.md },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.md, paddingHorizontal: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.mist },
  rowLast: { borderBottomWidth: 0 },
  rowKey: { fontSize: 13.5, fontWeight: '600', color: colors.ink },
});