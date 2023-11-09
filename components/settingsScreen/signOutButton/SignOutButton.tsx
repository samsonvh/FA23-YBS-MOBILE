import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './signOutButton.style'
import { useSession } from '@components/auth/AuthContext'

const SignOutButton = () => {
  const {signOut} = useSession();

  return (
    <Pressable style={styles.signOutButton} onPress={() => signOut()}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
    </Pressable>
  )
}

export default SignOutButton