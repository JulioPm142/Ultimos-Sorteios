import './App.css';
import { Provider } from './contexts/Contexto';
import Principal from './pages/Principal';
import { ThemeProvider } from 'styled-components';


const theme = {
  primaryColor: 'blue',
  // Adicione outras propriedades do tema conforme necessário
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Principal />
      </Provider>
    </ThemeProvider>
  );
}

export default App;


