import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function CreateEventCreatedScreen() {
  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
        <Ionicons name="close" size={22} color={colors.ink} />
      </TouchableOpacity>

      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="calendar" size={40} color={colors.ink} />
        </View>
        <Text style={styles.title}>Your event is created!</Text>
        <Text style={styles.sub}>Let's start planning an unforgettable event.</Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.primaryBtnText}>Go to My Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 60 },
  closeBtn: { alignItems: 'flex-end', width: '100%' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: colors.mist,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 8 },
  sub: { fontSize: typography.textSize.md, color: colors.ash, textAlign: 'center' },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
});