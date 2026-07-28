import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.sub}>Log in to keep planning where you left off.</Text>

      <TextInput
        style={styles.field}
        placeholder="Email"
        placeholderTextColor={colors.ash}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordField}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor={colors.ash}
          secureTextEntry
        />
        <Ionicons name="eye-outline" size={18} color={colors.ash} />
      </View>

      <TouchableOpacity onPress={() => router.push('/forgot-password')}>
        <Text style={styles.forgotLink}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/(tabs)/home')}>
  <Text style={styles.primaryBtnText}>Log In</Text>
</TouchableOpacity>

      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-google" size={16} color={colors.ash} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Ionicons name="logo-apple" size={17} color={colors.ink} />
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footRow}>
        <Text style={styles.footText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.footLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xxl, paddingTop: 80 },
  title: { fontSize: typography.displaySize.xl, fontWeight: '700', color: colors.ink, marginBottom: 6 },
  sub: { fontSize: typography.textSize.md, color: colors.ash, lineHeight: 20, marginBottom: spacing.xxl },

  field: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: spacing.lg,
    fontSize: typography.textSize.md,
    color: colors.ink,
    marginBottom: spacing.md,
  },
  passwordField: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 50,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  passwordInput: { flex: 1, fontSize: typography.textSize.md, color: colors.ink },

  forgotLink: {
    textAlign: 'right',
    fontSize: 12.5,
    color: colors.ink,
    fontWeight: '600',
    marginBottom: spacing.lg,
  },

  primaryBtn: {
    backgroundColor: colors.ink,
    borderRadius: radius.lg,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: { fontSize: typography.textSize.lg, fontWeight: '600', color: '#fff' },

  dividerRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginVertical: spacing.xl },
  dividerLine: { flex: 1, height: 1, backgroundColor: colors.line },
  dividerText: { fontSize: 11.5, color: colors.ash },

  socialRow: { flexDirection: 'row', gap: spacing.md },
  socialBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  socialText: { fontSize: 13.5, fontWeight: '600', color: colors.ink },

  footRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 'auto', paddingTop: spacing.xl },
  footText: { fontSize: 12.5, color: colors.ash },
  footLink: { fontSize: 12.5, color: colors.ink, fontWeight: '700' },
});