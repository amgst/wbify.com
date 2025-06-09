import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head {...props.headComponents}>
        {/* Tailwind CDN */}
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        {props.preBodyComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.body}
        {props.postBodyComponents}
      </body>
    </html>
  )
}
