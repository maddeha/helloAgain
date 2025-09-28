# App Screenshots

<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-09-28 at 12 00 46" src="https://github.com/user-attachments/assets/3533d37d-70ae-49e4-a9e8-cd222afc2fa6" />
<img width="1206" height="2622" alt="image" src="https://github.com/user-attachments/assets/8b218c4f-4a59-4a62-81e9-e740285f62e4" />
<img width="1206" height="2622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-09-28 at 12 00 50" src="https://github.com/user-attachments/assets/f1fd3454-b892-4817-baa9-f743c1407a4c" />


# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.
