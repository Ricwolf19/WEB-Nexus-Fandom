import { Route } from 'wouter';

import Index from './components/Index'

export default function App() {
  return (
    <>
      <Route path="/">
        <Index />
      </Route>
    </>
  )
}
