// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        
        {/* 1. BANNER (STEP 2): Va hasta arriba de la tarjeta */}
        <Image 
          source={require('./assets/banner.png')} 
          style={styles.banner} 
          resizeMode="cover" 
        />

        {/* 2. HEADER ROW (STEP 3 & 1): Avatar al lado del nombre, rol y ubicación */}
        <View style={styles.headerRow}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('./assets/avatar.png')} 
              style={styles.avatar} 
            />
            {/* STEP 4: Badge online */}
            <View style={styles.onlineBadge} />
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>Alex Rivera</Text>
            <Text style={styles.role}>Mobile Developer</Text>
            <Text style={styles.location}>Lisbon, Portugal</Text>
          </View>
        </View>

        {/* 3. BIO (STEP 1): Texto descriptivo debajo del header */}
        <Text style={styles.bio} numberOfLines={3}>
          {BIO}
        </Text>

        {/* 4. STATS ROW (STEP 3): Estadísticas con .map() */}
        <View style={styles.statsRow}>
          {STATS.map((stat, index) => (
            <View 
              key={index} 
              style={[
                styles.statItem, 
                index > 0 && styles.statDivider
              ]}
            >
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* 5. TAGS (STEP 4): Etiquetas de habilidades */}
        <View style={styles.tags}>
          {SKILLS.map((skill, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{skill}</Text>
            </View>
          ))}
        </View>

        {/* 6. ACTIONS (STEP 4): Botones de Follow y Message */}
        <View style={styles.actions}>
          <View style={[styles.button, styles.primaryButton]}>
            <Text style={styles.primaryButtonText}>Follow</Text>
          </View>
          <View style={[styles.button, styles.outlineButton]}>
            <Text style={styles.outlineButtonText}>Message</Text>
          </View>
        </View>

      </View>
    </View>
  );
}


const COLORS = {
  background: '#EEF1F6',
  card: '#FFFFFF',
  text: '#1F2937',
  muted: '#6B7280',
  primary: '#2563EB',
  primaryLight: '#EFF6FF',
  border: '#E5E7EB',
  online: '#22C55E',
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  banner: {
    width: '100%',
    height: 130,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: -15,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 4,
    borderColor: COLORS.card,
  },
  onlineBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.online,
    borderWidth: 3,
    borderColor: COLORS.card,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 14,
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  role: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 2,
  },
  location: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    color: COLORS.muted,
    lineHeight: 20,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  statsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 20,
  },
  tag: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 24,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  outlineButton: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  outlineButtonText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 15,
  },
});
