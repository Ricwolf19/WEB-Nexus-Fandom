import { Route } from 'wouter';

import Index from './pages'

export default function App() {
  return (
    <>
      <Route path="/">
        <Index />
      </Route>
    </>
  )
}
