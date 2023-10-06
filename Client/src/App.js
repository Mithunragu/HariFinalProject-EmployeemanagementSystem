import './App.css';
import { Register } from './Components/register';
import { Login } from './Components/login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// import { Dashboardowner } from './Dashboard/Owner/owner';
// import { Dashboarduser } from './Dashboard/User/user';
import { AdminLogout } from './Dashboard/Admin/logout';
import { AdminEmployee } from './Dashboard/Admin/employee'; // Make sure you import AdminEmployee
import { AdminProfile } from './Dashboard/Admin/profile';
import { Menu } from './Menu';
import { DashboardView } from './Dashboard/Admin/DashboardView';
import AddEmployee from './Dashboard/Admin/AddEmp';
import { DashboardAdmin } from './Dashboard/Admin/Admin';
import { Dashboarduser } from './Dashboard/User/user';
import { Updatedetails } from './Dashboard/Admin/update';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/loginswitch' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/DashboardAdmin/:id' element={[<Menu />, <DashboardAdmin />]} />
        <Route path='/DashboardEmp/:id' element={<Dashboarduser />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/employee' element={<AddEmployee />}></Route>
        <Route path='/update/:id' element={<Updatedetails />}></Route>
        <Route path='/Menu' element={[<Menu/>]} />


        <Route path='/DashboardView' element={[<Menu />, <DashboardView />]} />
        <Route path='/AdminEmployee' element={[<Menu />, <AdminEmployee />]} />
        <Route path='/AdminProfile' element={[<Menu />, <AdminProfile />]} />
        <Route path='/AdminLogout' element={[<Menu />, <AdminLogout />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
