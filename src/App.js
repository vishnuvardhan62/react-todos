
import './App.css';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.css'
function App() {
  return (
    <div className="App">
      <PageTitle> TODO List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
