import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            orange: '#FC4501',
            gray: '#9FA6B2'
        }
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl'
            }
        },
        MuiButton: {
            defaultProps: {
                disableFocusRipple: true
            },
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    color: '#FC4501'
                }
            }
        }
    }
})