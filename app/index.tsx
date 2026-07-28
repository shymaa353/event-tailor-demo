import { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { colors, spacing } from '../constants/theme';

const TAGLINE = 'Stop worrying about the details.';
const LOGO_ANIM_MS = 900;     // how long the logo takes to fade + scale in
const TAGLINE_FADE_MS = 500;  // how long the tagline takes to fade in after the logo
const HOLD_MS = 2600;         // how long everything stays fully visible before navigating

export default function SplashScreen() {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.85)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: LOGO_ANIM_MS,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: LOGO_ANIM_MS,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Tagline only starts fading in once the logo has fully revealed
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: TAGLINE_FADE_MS,
        useNativeDriver: true,
      }).start();
    });

    // Navigate only after: logo reveal + tagline fade-in + a 2.6s hold
    // so both are fully visible and readable before moving on.
    const totalDelay = LOGO_ANIM_MS + TAGLINE_FADE_MS + HOLD_MS;
    const navTimer = setTimeout(() => {
  router.replace('/login');
}, totalDelay);

    return () => clearTimeout(navTimer);
  }, []);

  return (
    <View style={styles.screen}>
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logo, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.tagline, { opacity: taglineOpacity }]}>
        {TAGLINE}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.charcoal,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxl,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: spacing.lg,
  },
  tagline: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'center',
  },
});