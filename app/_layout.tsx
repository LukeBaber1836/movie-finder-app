import { Stack, useSegments, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './globals.css';

export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Don't do anything during initial render
    if (!isReady) return;

    // Save current path when it changes
    const currentPath = '/' + segments.join('/');
    if (currentPath) {
      AsyncStorage.setItem('lastRoute', currentPath);
    }
  }, [segments, isReady]);

  // On initial load, restore the last route
  useEffect(() => {
    const restoreRoute = async () => {
      try {
        const lastRoute = await AsyncStorage.getItem('lastRoute');
        // Only navigate if we have a saved route and we're not already on a deep route
        if (lastRoute && segments.length <= 1) {
          router.replace(lastRoute);
        }
      } catch (e) {
        console.error('Failed to restore navigation state:', e);
      } finally {
        setIsReady(true);
      }
    };

    restoreRoute();
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
}