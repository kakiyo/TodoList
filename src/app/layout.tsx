import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         <div dangerouslySetInnerHTML={{
        __html: '<script async src="https://www.googletagmanager.com/gtag/js?id=G-138CGPC6W5"></script>\n' +
            '                <script>\n' +
            '                    window.dataLayer = window.dataLayer || [];\n' +
            '                    function gtag(){dataLayer.push(arguments);}\n' +
            '                    gtag(\'js\', new Date());\n' +
            '                    gtag(\'config\', \'G-138CGPC6W5\');\n' +
            '                </script>'
      }}/>

      <div dangerouslySetInnerHTML={{
        __html: '<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n' +
            'new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n' +
            'j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n' +
            '\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n' +
            '})(window,document,\'script\',\'dataLayer\',\'GTM-KTCDXWG\');</script>'
      }}/>
         <div dangerouslySetInnerHTML={{
        __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KTCDXWG"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
      }}/>
        {children}
      </body>
    </html>
  )
}
