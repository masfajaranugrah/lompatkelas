import React,{lazy} from 'react';
const Index = lazy(() => import("@/router/index")) 
function App() {
  return (
<>
<Index/>
</>
  );
}

export default App;