import React from 'react';

function App() {
  const downloadPdf = () => {
    window.location.href = 'http://localhost:5001/download-pdf';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Download PDF Template</h1>
        <button onClick={downloadPdf}>Download PDF</button>
      </header>
    </div>
  );
}

export default App;
