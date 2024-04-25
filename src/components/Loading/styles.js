import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
export const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: theme.colors.base.ghost_white,
        alignItems: 'center', // centralizar os itens do container
        justifyContent: 'center', //  distribuir os itens do container
        height: '94%',
        alignSelf: 'center',
        
        
    }
})