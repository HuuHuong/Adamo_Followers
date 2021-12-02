import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { COLOR } from '../../../assets'
import { AppButton } from '../../../components/AppButton'
import { AppHeader } from '../../../components/AppHeader/AppHeader'
import { AppInput2 } from '../../../components/AppInput2/AppInput2'
import { Change_Password, setToken } from '../../../services/API'
import { styles } from './styles'

export const ChangePassword = (props: any) => {
    const { navigation } = props
    const [currentPass, setCurrentPass] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [background, setBackground] = useState(false)
    const [message, setMessage] = useState('')
    const onChangePass = async () => {
        try {
            const response = await Change_Password({
                current_password: currentPass,
                password: password,
                password_confirmation: passConfirm
            })
            console.log(response);

        } catch (error) {
            console.error({ error });
            return (
                setBackground(true),
                setMessage('The given data was invalid')
            )
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLOR.Neutral.Neutral0 }}>
            <View style={{ paddingHorizontal: 24 }}>
                <AppHeader
                    onPress={() => navigation.goBack()}
                    text={'Change Password'}
                />
                <AppInput2
                    onFocused={() => {
                        return (setBackground(false),
                            setMessage(''))
                    }}
                    style={background ? { borderColor: 'red', borderWidth: 1 } : { borderColor: undefined }}
                    onValueChange={setCurrentPass}
                    value={currentPass}
                    text={'Current Password'}
                    error={message}
                />
                <AppInput2
                    onFocused={() => {
                        return (setBackground(false),
                            setMessage(''))
                    }}
                    style={background ? { borderColor: 'red', borderWidth: 1 } : { borderColor: undefined }}
                    onValueChange={setPassword}
                    value={password}
                    text={'New password'}
                    error={message}
                />
                <AppInput2
                    onFocused={() => {
                        return (setBackground(false),
                            setMessage(''))
                    }}
                    style={background ? { borderColor: 'red', borderWidth: 1 } : { borderColor: undefined }}
                    onValueChange={setPassConfirm}
                    value={passConfirm}
                    text={'Confirm new password'}
                    error={message}
                />

                <AppButton
                    onPress={onChangePass}
                    activeOpacity={0.5}
                    styleChildren={styles.txtBtn}
                    children={'Change Password'}
                />
            </View>
        </View>
    )
}
