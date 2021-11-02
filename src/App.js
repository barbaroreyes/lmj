import React,{useState,useEffect} from 'react';
import {Switch , Route} from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify,{API,graphqlOperation} from 'aws-amplify';
import confi from './aws-exports'
import {listJollas} from './graphql/queries'
import Pay from './conpo/Payment'

Amplify.configure(confi)


function App() {


  const [prendas,setPrendas] = useState([])

 useEffect(()=>{
   fectPrendas()
 },[])


  const fectPrendas = async () => {
    try {
      const listData = await API.graphql(graphqlOperation(listJollas));
      const  dataList = listData.data.listJollas.items;
      setPrendas(dataList)
      console.log(dataList,'datalist')

      
    } catch (error) {
      
    }
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AmplifySignOut/>
          <Pay/>
        </Route>
      </Switch>
    </div>
  );
}

export default withAuthenticator(App)  ;
