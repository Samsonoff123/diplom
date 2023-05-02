import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native"
import { KeyboardAvoidingView } from "react-native"

export const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}