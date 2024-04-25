import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
//  TELA HOME
export const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.base.ghost_white,
        padding: theme.spacing.lg, // espaçamento entre os componentes internos
        //paddingTop: theme.spacing.sm,
    },
    // titulo
    title: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.xl, // tamanho da fonte
        marginBottom: theme.spacing.lg,
    },
})
// scroll view
export const stylesViewHome = StyleSheet.create({
    container: {
        marginBottom: theme.spacing.lg,
    },
})
// Titulo e filtro
export const stylesTopHome = StyleSheet.create({
    container: {
        width: '100%', 
        //paddingHorizontal: theme.spacing.md,
        //justifyContent: 'space-between',
    },
    // titulo
    title: {
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.xl, // tamanho da fonte
        marginBottom: theme.spacing.lg,
        
        textAlign: 'left',
    },
    image:{
        //resizeMode: 'contain',
        height:32, 
        width:32, 
    },   
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.brand.naples_yellow,


        flexDirection: 'row',
        flexWrap: 'wrap',
        width:220,

        paddingHorizontal: theme.spacing.md,
        alignSelf: 'center',
        paddingVertical: theme.spacing.sm,
        marginBottom: theme.spacing.md,

        borderRadius: theme.borderRadius.button,
        elevation: 2,
    },  
})


// Tarefas
export const stylesViewTasks = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
})
export const stylesTasks = StyleSheet.create({
    container: {
        width: '99%', 

        backgroundColor: theme.colors.base.white_smoke,
        borderRadius: theme.borderRadius.tasks,
        
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.xs,
        
        marginBottom: theme.spacing.md,
        elevation: 3,

        alignItems: 'center',
        
        flexDirection: 'row',
        
        justifyContent: 'space-between',
    },
    // titulo
    text: {
        width: '70%', 
        color: theme.colors.base.dark_blue_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.md, // tamanho da fonte
        //paddingRight:  theme.spacing.md
    },

    // ios
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },      
})
//    |
// Botão nova tarefa
export const stylesButtonNew = StyleSheet.create({
    button: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.brand.naples_yellow,


        flexDirection: 'row',
        flexWrap: 'wrap',
        width:220,

        paddingHorizontal: theme.spacing.md,
        alignSelf: 'center',
        paddingVertical: theme.spacing.sm,
        marginBottom: theme.spacing.md,

        borderRadius: theme.borderRadius.button,
        elevation: 2,

        //right: 30,
        bottom: 0,
    },
    text:{
        fontSize: theme.font_size.md,
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




// Botão Lixeira Delete
export const stylesButtonDelete = StyleSheet.create({
    button: {
        //borderRadius: theme.borderRadius.button,
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
//    |
// Botões
export const stylesButtonImage = StyleSheet.create({
    // padding:{
    // paddingLeft: theme.spacing.sm,
    // },   
})