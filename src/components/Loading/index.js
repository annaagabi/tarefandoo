import { View, ActivityIndicator } from 'react-native'
                // componente do react native para spinner
import { styles } from './styles'
import { theme } from '../../theme'

import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.

// criando o loading
export function Loading() {
    return (
        //<SafeAreaProvider style={styles.container}>
        <View style={styles.container}>
            <ActivityIndicator size={60} color={theme.colors.brand.purple_yam} />
            {/* spinner                                  cor do tema */}
        </View>
        //</SafeAreaProvider>
    )
}
