# 🌟 AstroJournal

A React Native application that combines daily horoscopes with personal journaling.

## ✨ Features

### Current Features
- **📱 Cross-Platform**: Built with React Native for iOS and Android
- **🌍 Multilingual Support**: English and Hindi language support with automatic device language detection
- **♈ Zodiac Integration**: 12 zodiac signs with personalized daily horoscopes
- **📖 Personal Journaling**: Daily journal entries with persistent local storage
- **🎨 Clean UI/UX**: Modern, intuitive interface with smooth navigation

### User Experience Flow
1. **Welcome & Setup**: Users select their zodiac sign and preferred language
2. **Daily Horoscope**: View personalized daily insights based on zodiac sign
3. **Journal Writing**: Reflect and write daily thoughts and experiences
4. **History Review**: Browse through past journal entries
5. **Settings**: Switch between languages and update zodiac preferences

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 20 or higher
- **React Native CLI**: Latest version
- **Android Studio**: For Android development
- **Xcode**: For iOS development (macOS only)
- **Java Development Kit (JDK)**: Version 11 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AstroJournal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Start Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run the application**
   
   For Android:
   ```bash
   npm run android
   # or
   yarn android
   ```
   
   For iOS:
   ```bash
   npm run ios
   # or
   yarn ios
   ```

### Development Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

```

## 🏗️ Project Structure

```
AstroJournal/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── ZodiacPicker.tsx
│   ├── context/            # React Context for state management
│   │   └── AppContext.tsx
│   ├── i18n/              # Internationalization
│   │   └── index.ts
│   ├── navigation/        # Navigation configuration
│   │   └── RootNavigator.tsx
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── JournalScreen.tsx
│   │   └── index.ts
│   ├── services/         # Business logic and API calls
│   │   ├── horoscopeService.ts
│   │   └── storage.ts
│   └── utils/           # Utility functions
│       └── zodiac.ts
├── android/             # Android-specific code
├── ios/                # iOS-specific code
├── __tests__/          # Test files
└── Journal.webm        # Demo recording of journal functionality
```

### 📹 Demo & Media Files

- **Journal.webm**: A demonstration recording showcasing the journal functionality of the AstroJournal app. This video file provides a visual walkthrough of how users can interact with the journaling features, including writing entries, navigating through the interface, and experiencing the overall user flow.

#### 🎥 Journal Functionality Demo

<video width="100%" controls>
  <source src="Journal.webm" type="video/webm">
  Your browser does not support the video tag. You can download the video file directly: [Journal.webm](Journal.webm)
</video>

*Watch the demo above to see the AstroJournal app in action, showcasing the journaling features and user interface.*

## 🔧 Technical Stack

- **Framework**: React Native 0.81.1
- **Language**: TypeScript
- **Navigation**: React Navigation v7
- **State Management**: React Context API
- **Internationalization**: i18next & react-i18next
- **Date Handling**: dayjs
- **Storage**: AsyncStorage
- **Styling**: React Native StyleSheet

## 🎯 Product Vision & Future Enhancements

### Phase 1: Core Foundation (Current)
- ✅ Basic horoscope display
- ✅ Simple journaling functionality
- ✅ Multilingual support (EN/HI)
- ✅ Local data persistence

### Phase 2: Enhanced User Experience
- **🎨 Advanced UI/UX**
  - Dark/Light theme support
  - Customizable color schemes
  - Smooth animations and transitions
  - Improved typography and spacing

- **📊 Analytics & Insights**
  - Mood tracking integration
  - Journal entry analytics
  - Horoscope accuracy feedback
  - Personal growth metrics

- **🔔 Smart Notifications**
  - Daily horoscope reminders
  - Journal writing prompts
  - Astrological event notifications
  - Personalized insights

### Phase 3: Advanced Features
- **🌐 Real Horoscope API Integration**
  - Professional astrology services
  - Multiple horoscope sources
  - Detailed astrological charts
  - Compatibility readings

- **☁️ Cloud Synchronization**
  - Cross-device data sync
  - Backup and restore
  - Data export/import
  - Privacy-focused cloud storage

- **🤝 Social Features**
  - Share horoscopes and insights
  - Community discussions
  - Astrology groups
  - Expert consultations

### Phase 4: AI & Personalization
- **🤖 AI-Powered Features**
  - Personalized horoscope generation
  - Smart journal prompts
  - Mood pattern recognition
  - Predictive insights

- **📈 Advanced Analytics**
  - Life pattern analysis
  - Goal tracking integration
  - Habit formation insights
  - Wellness recommendations

### Phase 5: Ecosystem Expansion
- **🔮 Extended Astrology Services**
  - Birth chart analysis
  - Tarot card readings
  - Numerology insights
  - Meditation guides

- **🏢 Enterprise Features**
  - Corporate wellness programs
  - Team compatibility analysis
  - Workplace astrology insights
  - B2B partnerships

## 📈 Growth Strategy & Product Insights

### Target Market
- **Primary**: Astrology enthusiasts (18-45 years)
- **Secondary**: Wellness and mindfulness practitioners
- **Tertiary**: Journaling and self-reflection users

### Key Metrics to Track
- **Engagement**: Daily active users, session duration
- **Retention**: 7-day, 30-day retention rates
- **Content**: Journal entries per user, horoscope views
- **Growth**: User acquisition, referral rates

### Monetization Opportunities
- **Premium Features**: Advanced horoscope readings, detailed analytics
- **Subscription Model**: Monthly/yearly premium access
- **In-App Purchases**: Specialized readings, expert consultations
- **Partnerships**: Astrology services, wellness brands

### User Acquisition Strategy
- **Content Marketing**: Astrology blogs, social media presence
- **Influencer Partnerships**: Astrology influencers, wellness coaches
- **App Store Optimization**: Keyword optimization, visual assets
- **Community Building**: Forums, social features, user-generated content

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details on:
- Code style and standards
- Pull request process
- Issue reporting
- Development setup

---

**Built with ❤️ for the astrology and journaling community**