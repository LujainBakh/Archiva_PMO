import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span>
      <img
        src={"/archiva-logo.png"}
        alt="Archiva Logo"
        style={{ height: "25px", marginRight: "10px" }}
      />
    </span>
  ),
  project: {
    link: 'https://github.com/LujainBakh/Archiva_PMO',
  },
  docsRepositoryBase: 'https://github.com/LujainBakh/Archiva_PMO',
  footer: {
    text: 'PMO documentation for © Solutions By 42',
  },
}

export default config
