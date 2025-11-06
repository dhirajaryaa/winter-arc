'use client'
export default function GlobalError({ error }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Global Error Handler</title>
            </head>
            <body>
                <h1 style={{ textAlign: "center" }}>Something went wrong!</h1>
            </body>
        </html>
    )
}