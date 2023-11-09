import styles from '@components/settingsScreen/settingsScreen.style'
import SignOutButton from '@components/settingsScreen/signOutButton/SignOutButton'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const SettingsPage = () => {
  return (
    <ScrollView style={styles.settingsScreen} contentContainerStyle={styles.settingsScreenContent}>
      <View style={styles.settingsContainer}>
        <Text>Settings</Text>
      </View>
      <View style={styles.signOutButtonContainer}>
        <SignOutButton/>
      </View>
    </ScrollView>
  )
}

export default SettingsPage