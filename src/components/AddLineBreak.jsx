
// Renvoi à la ligne
export function AddLineBreak(str, pattern){
  
    return (
      str.split(pattern).map(substr => (<span key={substr}>{substr}<br/></span>))
    ) 
  
}

