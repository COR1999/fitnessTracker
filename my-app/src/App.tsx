
import { useState } from 'react'
import type { ComponentProps } from 'react';

import './App.css'

import "Chart" from "../my-app/components/chart"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
