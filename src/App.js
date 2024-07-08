import React from 'react';
import HallOfFame from './HallOfFame';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="App flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <section className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4">Welcome to the Hall of Fame</h2>
                        <p className="text-lg text-gray-700">
                            Celebrating our outstanding students who have excelled in their respective fields.
                        </p>
                    </section>
                    <HallOfFame />

                </div>
            </main>

        </div>
    </div>
  );
}

export default App;
