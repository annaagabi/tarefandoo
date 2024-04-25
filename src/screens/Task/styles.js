import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
// TELA HOME
export const stylesTaskScreen = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: theme.colors.base.ghost_white,
        paddingHorizontal: theme.spacing.lg, // espaçamento entre os componentes internos
        
    },
    // titulo
    title: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.xl, // tamanho da fonte

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        paddingVertical: theme.spacing.sm,
        marginBottom: theme.spacing.md,
    },

    text:{
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.lg, // tamanho da fonte

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal:  theme.spacing.md,
    },

    boxInput:{
        //height: 400,
        marginTop: theme.spacing.md,
        backgroundColor: theme.colors.base.white,

        borderRadius: theme.borderRadius.input,
        width:'95%',
        
        alignSelf: 'center',

        paddingBottom: theme.spacing.md,
        
        marginBottom: theme.spacing.lg,
        elevation: 3,
    },
    input:{
        width: '100%', 
        backgroundColor: theme.colors.base.white,

        borderBottomColor: theme.colors.base.dark_blue_black,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

        paddingHorizontal: theme.spacing.md,

        textAlign: 'center',

        elevation: 3,
    }



    //tarefas
})

// Botão nova tarefa
export const stylesButtonAddNew = StyleSheet.create({
    button: {
        //position:  'absolute',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.brand.naples_yellow,


        flexDirection: 'row',
        width:'95%',

        paddingHorizontal: theme.spacing.md,
        alignSelf: 'center',
        paddingVertical: theme.spacing.sm,
        marginVertical: theme.spacing.xl,

        borderRadius: theme.borderRadius.button,
        elevation: 2,
    },
    text:{
        color: theme.colors.base.dark_blue_black,
        fontSize: theme.font_size.lg,
    },
    image:{
    //resizeMode: 'contain',
        height:25, 
        width:25,
    },

    // ios
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },    
})

// Botões
export const stylesButtonImage = StyleSheet.create({
    padding:{
    paddingLeft: theme.spacing.sm,
    },   
})

export const stylesCategorias = StyleSheet.create({
    button:{
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: theme.colors.base.white,


        flexDirection: 'row',
        width:'95%',

        paddingHorizontal: theme.spacing.xl,
        alignSelf: 'center',
        paddingVertical: theme.spacing.sm,
        marginBottom: theme.spacing.sm,
        borderRadius: theme.borderRadius.input,

        elevation: 2,

    },
    text:{
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontSize: theme.font_size.md,
        fontFamily: theme.font_family.regular, // fonte
    }, 
    title: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.xl, // tamanho da fonte

        paddingVertical: theme.spacing.sm,
        marginBottom: theme.spacing.md,

        textAlign: 'center'
    }, 
    image:{
        marginRight: theme.spacing.md,
    } 
})

export const stylesCategoriaEscolhida = StyleSheet.create({
    button:{
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: theme.colors.base.white,


        flexDirection: 'row',
        width:'95%',

        //paddingHorizontal: theme.spacing.xl,
        alignSelf: 'center',
        paddingVertical: theme.spacing.sm,
        paddingLeft: theme.spacing.xl,
        paddingRight: 85,
        marginBottom: theme.spacing.sm,

        borderRadius: theme.borderRadius.tasks,

        elevation: 2,
    },
    text:{
        color: theme.colors.brand.byzantium, // cor da fonte
        fontSize: theme.font_size.md,
        fontFamily: theme.font_family.regular, // fonte
    },
})