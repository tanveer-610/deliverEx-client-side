import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import AddNewService from './Components/OrderManagement/AddNewService/AddNewService';
import ManageAllOrder from './Components/OrderManagement/ManageAllOrder/ManageAllOrder';
import MyOrder from './Components/OrderManagement/MyOrder/MyOrder';
import PlaceOrder from './Components/OrderManagement/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/sharedComponents/Footer/Footer';
import Headers from './Components/sharedComponents/Headers/Headers';
import NotFoundPage from './Components/sharedComponents/NotFoundPage/NotFoundPage';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Headers></Headers>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <LogIn></LogIn>
          </Route>


          <PrivateRoute path="/placeOrder/:_id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>

          <PrivateRoute path="/manageAllOrder">
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>

          <PrivateRoute path="/addNewService">
            <AddNewService></AddNewService>
          </PrivateRoute>

          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>

        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
