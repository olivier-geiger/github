// == Import npm
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

// Import css
import './app.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css'

// Routes
import Menu from '../Menu';
import Home from '../Home';
import NotFound from '../NotFound';
import FAQ from '../FAQ';

// Composants
import SearchBar from '../SearchBar';
import UserSearchBar from '../UserSearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import UserRepoResult from '../UserRepoResult';
import ReposResultsLoading from '../ReposResultsLoading';
import UserReposResultsLoading from '../UserReposResultsLoading';

// == Import local divers
import { mapRepos } from '../../utils';
import logoGitHub from '../../assets/logo-github.png';

// == Composant
const App = () => {

  // ==state
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  
  const showMessage = (text, isErrorMessage = false) => {
    setMessage(text);
    setIsError(isErrorMessage);
  };

  // on encapsule showMessage dans une fonction permettant d'afficher une erreur
  const showError = (text) => showMessage(text, true);

  // == repos Github
  const launchSearch = () => {
    console.log('je vais lancer la recherche');

    // avant de lancer la requête, on met en place l'état loading
    // et on réinitialise quelques entrées du state
    setRepos([]);
    setResultsCount(0);
    setLoading(true);
    showMessage('Recherche en cours...');

    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then(
        (response) => {
          const totalCount = response.data.total_count;
          console.log(response)
          setResultsCount(totalCount);
          setRepos(mapRepos(response.data.items));
          showMessage(totalCount > 1 ? `${totalCount} résultats trouvés` : `${totalCount} résultat trouvé`);
          toast.success(totalCount > 1 ? `${totalCount} résultats trouvés` : `${totalCount} résultat trouvé`, {
            autoClose: 3000,
          });
          setSearch('');
        },
      ).catch(
        () => {
          showMessage('Un problème est survenu...', true);
        },
      ).finally(() => {
        setLoading(false);
      });

    // console.log(apiEntryPoint);
  };

  // = Github user
  const userLaunchSearch = () => {
    console.log('je vais lancer la recherche');

    setRepos([]);
    setResultsCount(0);
    setLoading(true);
    showMessage('Recherche en cours...');

    axios.get(`https://api.github.com/search/users?q=${search}`)
      .then(
        (response) => {
          const totalCount = response.data.total_count;
          console.log(response)
          setResultsCount(totalCount);
          setUser((response.data.items));
          showMessage(totalCount > 1 ? `${totalCount} résultats trouvés` : `${totalCount} résultat trouvé`);
          setSearch('');
          toast.success(totalCount > 1 ? `${totalCount} résultats trouvés` : `${totalCount} résultat trouvé`, {
            autoClose: 3000,
        });
        },
      ).catch(
        () => {
          showMessage('Un problème est survenu...', true);
        },
      ).finally(() => {
        // une fois la requête terminée, on retire l'état loading
        setLoading(false);
      });
  }

  return (
    <Router>
      <div className="app">
        <header className="header">
          <img className="logo" src={logoGitHub} alt="git hub" />
        </header>
        <Menu />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/githuberrepo" exact>
            <SearchBar
              search={search}
              setSearch={setSearch}
              doSubmit={launchSearch}
              manageError={showError}
              loading={loading}
            />
            {
              // mécanisme de vue conditionnelle :
              // si le message n'est pas une chaine vide, on affiche le composant
            }
            {message !== '' && <Message message={message} isError={isError} />}
            {
              // on utilise mapRepos pour transformer
              // notre tableau d'objets complexes
              // en un tableau d'objet plus simple
              // (à plat et contenant seulement les propriétés utiles)
            }
            {
              !loading ? <ReposResults repos={repos} /> : <ReposResultsLoading />
            } 
          </Route>
          <Route path="/githubuser" exact>
            <UserSearchBar 
              search={search}
              setSearch={setSearch}
              doUserSubmit={userLaunchSearch}
              manageError={showError}
              loading={loading}
            />
            {
              // mécanisme de vue conditionnelle :
              // si le message n'est pas une chaine vide, on affiche le composant
            }
            {message !== '' && <Message message={message} isError={isError} />}
            {
              // on utilise mapRepos pour transformer
              // notre tableau d'objets complexes
              // en un tableau d'objet plus simple
              // (à plat et contenant seulement les propriétés utiles)
            }
            {
              !loading ? <UserRepoResult user={user}/> : <UserReposResultsLoading />
            } 
          </Route>
          <Route path="/faq" exact>
            <FAQ />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
};

// == Export
export default App;
