import React from 'react';
import { Metadata } from 'next';
import '../stylesheets/style.css';

export const metadata: Metadata = {
    title: 'bookgirl.space',
    description: 'welcome to my landing page ^u^',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <html lang="en">
        <head>
            <link href="favicon.ico" rel="icon" type="image/x-icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>{children}</body>
    </html>
    )
  }