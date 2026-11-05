# Medi Helper

Hindi medicine reminder Android app starter project. Android 15+ target.

## Features in this starter
- Hindi interface
- Medicine name, dose and daily time entry
- Local alarm notification
- 5-minute snooze action
- Basic reminder history
- GitHub Actions workflow to build a debug APK

## Build on GitHub using a phone
1. Extract this ZIP on your phone.
2. Open your GitHub repository in Chrome.
3. Choose **Add file > Upload files**.
4. Upload the extracted files and folders (not the ZIP itself).
5. Commit to the `main` branch.
6. Open the repository's **Actions** tab.
7. Select **Build Medi Helper APK** and run it if it has not started automatically.
8. Open the completed workflow run, then download the **Medi-Helper-APK** artifact.

## Important Android alarm note
Android and phone manufacturers control Do Not Disturb, Silent mode, exact-alarm access and background restrictions. The app uses an alarm notification channel with alarm audio usage, but cannot guarantee audible ringing while Silent/DND is enabled on every device. Grant notification and exact-alarm permissions and configure the phone's DND/alarm settings.

This is a starter build, not a medical device. Test reminders carefully before relying on them. Reboot restoration and full multi-schedule management need further development.
