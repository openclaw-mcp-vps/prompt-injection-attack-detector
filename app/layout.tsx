import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Injection Attack Detector',
  description: 'Detect prompt injection attempts in user inputs before they reach your AI models.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="54b0b11b-a6bb-4a67-9660-441a2ed48ebb"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
