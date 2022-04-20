import React from 'react'
import './index.css'
import {BrowserRouter , Routes , Route,
    NavLink, Link} from 'react-router-dom'
import Home from './Home'
//import About from './About
import OrderSummary from './OrderSummary'
import NoMatch from './NoMatch'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import NewProducts from './NewProducts'
import Users from './Users'
import UserDetails from './UserDetails'
import Admin from './Admin'
import { AuthProvider } from './auth'
import Login  from './Login'
import Profile from './Profile'
import RequireAuth  from './RequireAuth'

const LazyAbout = React.lazy(() => import('./About'))
//TO IMPLEMENT LAZY LOADING


function RouteV6() {

  const navLinkStyles = ({isActive}) => {
      return {
          fontWeight : isActive ? 'bold' : 'normal',
          textDecoration : isActive ? 'none' : 'underline'
      }
  }
  return (
    <BrowserRouter>
      <AuthProvider>
        <p>USING LINK TAG</p>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            <Link to='/profile'>Profile</Link>
        </nav>

        <p>USING NAVLINK TAG</p>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            {/* BY USING NAVLINK , WE CAN ABLE TO APPLY 
            'ACTIVE AS A CLASSNAME TO THE PRODUCED 'A' TAG 
            USING THAT WE CAN STYLE THEM*/}
        </nav>

        <p>STYLING NAVLINK TAG WITH A FUNCTION</p>
        <nav>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
            {/* STYLE IS APPLIED USING THE FUNCTION NAVLINKSTYLES*/}
        </nav>

          
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login />} />
            <Route
            path='/profile'
            element={
                <RequireAuth>
                <Profile />
                </RequireAuth>
            }
            />
            <Route path='/about' element={
            <React.Suspense>
                <LazyAbout/>
            </React.Suspense>}/>
            {/* NESTED ROUTE */}
            <Route path='/products' element={<Products/>}>
                <Route index element={<FeaturedProducts/>}/> {/* INDEX ROUTE --  SETTING DEFAULT COMP(NOT ROUTE) ALONG WITH PARENT'S ROUTE */}
                <Route path='featured' element={<FeaturedProducts/>}/>
                <Route path='new' element={<NewProducts/>}/>
            </Route>

            <Route path='users' element={<Users/>}/>
            <Route path='users/:userId' element={<UserDetails/>}/>{/*DYNAMIC ROUTE */}
            <Route path='users/admin' element={<Admin/>}/> 
            {/*
            * MATCHING ROUTES ARE ALWAYS GIVEN A PRIORITY RATHER THAN DYNAMIC ONES 
            * THESE CAN ALSO BE NESTED
             */}


            <Route path='order-summary' element={<OrderSummary/>}/>
            <Route path='*' element={<NoMatch/>}/>{/* *(ASTERIK) HERE DEFINES THAT IF NO MATCH FOUND */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RouteV6


{/**
LAZY LOADING - TO PREVENT A COMP FROM DOWNLOADING IF IT ISN'T REQUIRED(EX : ABOUT ISN'T REQUIRED WHEN HOME IS LOADED , BUT WHEN NAV TO ABOUT IT GETS DOWNLADED)
 TO IMPLEMENT LAZY LOADING:
    USE React.lazy() TO IMPORT THE ABOUT
    THEN WRAP IMPORTED ABOUT COMP WITH React.Suspense COMP

*/}