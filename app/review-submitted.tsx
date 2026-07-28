import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function ReviewSubmittedScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.center}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={30} color={colors.ink} />
        </View>
        <Text style={styles.title}>Thank you!</Text>
        <Text style={styles.sub}>
          Your review of Alma Hall has been submitted and will help other couples planning their events.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/event-recap')}>
        <Text style={styles.primaryBtnText}>Rate Another Vendor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
        <Text style={styles.ghostLink}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xl, paddingTop: 80 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconCircle: { width: 88, height: 88, borderRadius: 44, borderWidth: 1.6, borderColor: colors.line, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.xl },
  title: { fontSize: typography.displaySize.md, fontWeight: '700', color: colors.ink, marginBottom: 8 },
  sub: { fontSize: 13, color: colors.ash, textAlign: 'center', lineHeight: 20, maxWidth: 250 },

  primaryBtn: { backgroundColor: colors.ink, borderRadius: radius.lg, height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },
  ghostLink: { textAlign: 'center', fontSize: 13, fontWeight: '600', color: colors.ink },
});