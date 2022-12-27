import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#F4F5F6',
            orange: '#FC4501',
            black: '#000000'
        }
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    color: '#FC4501'
                }
            }
        }
    }
})