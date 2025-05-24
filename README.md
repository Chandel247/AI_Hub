# AI Chat App

A cross-platform AI chat application built with React Native, integrating OpenAI's GPT model and Firebase backend.

## Features

- 🔐 User Authentication (Email & Google Sign-in)
- 💬 AI Chat Interface powered by OpenAI GPT
- 🌓 Dark/Light Mode Support
- 📱 Cross-platform (iOS & Android)
- 🔄 Real-time Chat History
- 👤 User Profiles & Settings

## Tech Stack

- **Frontend**: React Native (Expo)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS (via NativeWind)
- **Backend**: Firebase (Auth, Firestore)
- **AI Integration**: OpenAI API
- **Navigation**: React Navigation
- **Type Safety**: TypeScript

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase Account
- OpenAI API Key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-chat-app.git
cd ai-chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and add your configuration:
   - Go to Firebase Console
   - Create a new project
   - Enable Authentication (Email & Google Sign-in)
   - Create a Firestore database
   - Copy your Firebase config to `src/services/firebase.ts`

4. Set up OpenAI API:
   - Get your API key from OpenAI
   - Add it to your environment variables

5. Start the development server:
```bash
npm start
```

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── SignUpForm.tsx
│   ├── chat/
│   │   ├── ChatBubble.tsx
│   │   └── MessageInput.tsx
│   └── common/
│       ├── Button.tsx
│       └── Input.tsx
├── screens/
│   ├── AuthScreen.tsx
│   ├── ChatScreen.tsx
│   └── ProfileScreen.tsx
├── services/
│   └── firebase.ts
├── store/
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── chatSlice.ts
│   └── index.ts
└── constants/
    └── theme.ts
```

## Environment Variables

Create a `.env` file in the root directory:

```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
OPENAI_API_KEY=your_openai_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/)
- [OpenAI](https://openai.com/)
- [Tailwind CSS](https://tailwindcss.com/) 