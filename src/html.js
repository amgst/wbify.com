import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* Tailwind CDN */}
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
