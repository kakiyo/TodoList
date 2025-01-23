"use client"
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import {TodoInput} from "@Component/compnent/TodoInput";
import {ConfigProvider} from "antd";

export default function Home() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#000000',
                },
            }}
        >
             <div dangerouslySetInnerHTML={{
                __html: '<script async src="https://www.googletagmanager.com/gtag/js?id=G-138CGPC6W5"></script>\n' +
                    '                <script>\n' +
                    '                    window.dataLayer = window.dataLayer || [];\n' +
                    '                    function gtag(){dataLayer.push(arguments);}\n' +
                    '                    gtag(\'js\', new Date());\n' +
                    '                    gtag(\'config\', \'G-138CGPC6W5\');\n' +
                    '                </script>'
            }}/>
        <main className={styles.main}>
           <TodoInput/>
        </main>
        </ConfigProvider>
    )
}
