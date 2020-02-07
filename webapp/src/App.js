import React from 'react';
import './App.css';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
          <form>
            <div class="input-block">
              <label htmlFor="github_username">Usuário do Github</label> 
              <input name="github_username" id="github_username" required />
            </div>
            
            <div class="input-block">
              <label htmlFor="techs">Técnologias</label> 
              <input name="techs" id="techs" required />
            </div>
            
            <div className="input-group">
              <div class="input-block">
                <label htmlFor="latitude">Latitude</label> 
                <input name="latitude" id="latitude" required />
              </div>

              <div class="input-block">
                <label htmlFor="longitude">Longitude</label> 
                <input name="longitude" id="longitude" required />
              </div>
            </div>
            
            <button type="submit">Salvar</button>
          </form>
      </aside>
      <main>
      </main>
    </div>
  );
}

export default App;