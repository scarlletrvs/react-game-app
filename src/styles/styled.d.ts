import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        title:string;

        colors:{
            primary: string ,
            secundary: string,
             Terciary: string,
             barrapesquisa: string,
             hover:string,
             texthover:string,
             botaoVoltar:string,
            background: string,
            text: string;
            voltarHover:string;
            colorHover:string;
            select:string;
           },
        }
    }
