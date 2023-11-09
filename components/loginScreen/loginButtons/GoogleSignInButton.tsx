import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './googleSignInButton.style'

const GoogleSignInButton = () => {
  return (
    <Pressable style={styles.signInButton}>
        <AntDesign name="google" size={24} style={styles.googleLogo} />
        <Text style={styles.signInButtonText}>Sign in with Google</Text>
    </Pressable>
  )
}

export default GoogleSignInButton