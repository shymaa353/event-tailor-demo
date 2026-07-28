import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors, radius, spacing, typography } from '../constants/theme';

export default function SignUpScreen() {
  const [role, setRole] = useState<'user' | 'vendor'>('user');

  const handleSignUp = () => {
    if (role === 'vendor') {
      router.push('/vendor-reg-business');
    } else {
      router.push('/(tabs)/home');
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Create Your Account</Text>

      <Text style={styles.label}>I am a...</Text>
      <View style={styles.roleRow}>
        <TouchableOpacity
          style={[styles.roleBtn, role === 'user' && styles.roleBtnSelected]}
          onPress={() => setRole('user')}
        >
          <Ionicons
            name="person-outline"
            size={18}
            color={role === 'user' ? '#fff' : colors.ink}
          />
          <Text style={[styles.roleText, role === 'user' && styles.roleTextSelected]}>
            Planning an Event
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleBtn, role === 'vendor' && styles.roleBtnSelected]}
          onPress={() => setRole('vendor')}
        >
          <Ionicons
            name="storefront-outline"
            size={18}
            color={role === 'vendor' ? '#fff' : colors.ink}
          />
          <Text style={[styles.roleText, role === 'vendor' && styles.roleTextSelected]}>
            A Vendor
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.field}
        placeholder={role === 'vendor' ? 'Contact Name' : 'Full Name'}
        placeholderTextColor={colors.ash}
      />
      <TextInput
        style={styles.field}
        placeholder="Email Address"
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

      <TouchableOpacity style={styles.primaryBtn} onPress={handleSignUp}>
        <Text style={styles.primaryBtnText}>
          {role === 'vendor' ? 'Continue to Business Setup' : 'Sign Up'}
        </Text>
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
        <Text style={styles.footText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.footLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.paper, padding: spacing.xxl, paddingTop: 70 },
  title: {
    fontSize: typography.displaySize.md,
    fontWeight: '700',
    color: colors.ink,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },

  label: { fontSize: 11.5, fontWeight: '700', color: colors.ash, textTransform: 'uppercase', marginBottom: spacing.sm },
  roleRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg },
  roleBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.md,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  roleBtnSelected: { backgroundColor: colors.ink, borderColor: colors.ink },
  roleText: { fontSize: 12, fontWeight: '600', color: colors.ink, textAlign: 'center' },
  roleTextSelected: { color: '#fff' },

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
    marginBottom: spacing.lg,
  },
  passwordInput: { flex: 1, fontSize: typography.textSize.md, color: colors.ink },

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